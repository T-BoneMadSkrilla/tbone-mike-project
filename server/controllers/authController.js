const bcrypt = require("bcryptjs");

module.exports={
    login : async (req, res) => {
        const db = req.app.get("db");
        const email = `'` + req.body.Email + `'`;
        await db.query(`SELECT * FROM users WHERE email = ${email}`).then( async users => {
        console.log(users);
        if (!users.length) {
            res.status(401).json({ error: "No user found" });
            
        } else {
            const isMatch = await bcrypt.compare(
            req.body.Password,
            users[0].password
            );
            console.log(isMatch)
            if (isMatch) {
            req.session.user = { email: users[0].id };
            res.json({ id: users[0].id, email: users[0].email, user_type: users[0].user_type });
            } else {
            res.status(401).json({ error: "Incorrect password" });
            }
        }
        });
    }
}

  
//   const signup = async (req, res) => {
//     // see if the user exists already, if not, don't make an account
//     // if not, add them to the database
//     const db = req.app.get("db");
//     const hash = await bcrypt.hash(req.body.password, 10);
  
//     try {
//       const response = await db.addUser({
//         username: req.body.username,
//         password: hash
//       });
//       res.json({ username: response[0].username });
//     } catch (e) {
//       console.log(e);
  
//       res.status(401).json("An error occurred");
//     }
//   };
  
//   const me = (req, res) => {
//     if (req.session.user) {
//       res.json(req.session.user);
//     } else {
//       res.status(401).json({ error: "Please log in" });
//     }
//   };
  
//   module.exports = {
//     login,
//     signup,
//     me
//   };