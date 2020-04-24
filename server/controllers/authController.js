const bcrypt = require("bcryptjs");

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


module.exports={
    login : async (req, res) => {
        const db = req.app.get("db");
        const email = `'` + req.body.Email + `'`;
        console.log(emailRegexp.test(req.body.Email))
        if(emailRegexp.test(req.body.Email)){
            await db.query(`SELECT * FROM users WHERE email = ${email}`).then( async users => {
                if (!users.length) {
                    res.status(401)
                    res.json("No user found")
                } else {
                    const isMatch = await bcrypt.compare(
                        req.body.Password,
                        users[0].password
                        );
                        if (isMatch) {
                            req.session.user = users[0].id;
                            req.session.userType = users[0].user_type;
                            console.log(req.session)
                            res.json({ id: users[0].id, email: users[0].email, user_type: users[0].user_type });
                        } else {
                            res.sendStatus(401)
                            res.json("Incorrect password")
                            // .json({ Error: "Incorrect password" });
                        }
                    }
                });
            } else {
                res.statusMessage = "Not a valid email";
                res.status(401);
                // res.send("Not a valid email")
                // .json({Error: "Not a valid email"})
        }
    },

    employerSignUp: async (req, res) => {
        const db = req.app.get("db");

        const email = `'` + req.body.Email + `'`;
        if(emailRegexp.test(req.body.Email)){
            await db.query(`SELECT * FROM users WHERE email = ${email}`).then( async users => {
                if (!users.length) {
                    const hash = await bcrypt.hash(req.body.Password, 10);
                    await db.query(`INSERT INTO users (email, password, user_type) VALUES (${email}, ${hash}, 2)`)
                    await db.query(`SELECT * FROM users WHERE email = ${email}`).then(users => {
                        req.session.user = users[0].id;
                        req.session.userType = users[0].user_type;
                        res.status(200)
                    })
                } else {
                    res.status(401).json({ error: `There's already a user with this account` });
                }
            })
        } else {
            res.status(401).json({error: "Not a valid email"})
        }
    },
}
  
