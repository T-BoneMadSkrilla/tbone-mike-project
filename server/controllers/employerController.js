module.exports = {
    getCandidates: async (req, res) => {
        try {
            console.log("getting this far")
            console.log(req.session)
            console.log(req.params)
            const db = req.app.get("db");
            if(req.session.user == req.params.id) {
                const candidates = await db.query(`SELECT * FROM students WHERE student_id IN (SELECT student_id FROM applied_jobs)`)
                return res.status(200).send(candidates)
            } else {
                res.status(401)
            }

        }
        catch(err) {
            throw(err)
        }
    }
}