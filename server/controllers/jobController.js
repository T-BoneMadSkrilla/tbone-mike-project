const addSingleQuotes = (word) => {
    return `'` + word + `'`;
}

module.exports={
    getJobs: async (req, res) => {
        try {
            const db = req.app.get('db');

            if(req.session.user == req.params.id && req.session.userType == 1){
                const jobs = await db.query(`SELECT * FROM jobs WHERE job_id NOT IN (SELECT job_id FROM applied_jobs WHERE student_id = ${req.params.id})`)
                return res.status(200).send(jobs);
            } else {
                res.status(401)
            }
        }
        catch(err) {
            throw(err);
        }
        // should be something like 
        //'SELECT * FROM jobs WHERE applicatable_major = (SELECT major FROM students WHERE id = ${id_were_passing_in}) AND id <> (SELECT job_id FROM applied_jobs WHERE student_id <> ${id_were_passing_in});
    },

    applyJobs: async (req, res) => {
        try {
            const db = req.app.get('db');
            const {JobId, UserId} = req.body;
            const applied = await db.query(`INSERT INTO applied_jobs (job_id, student_id) VALUES (${JobId}, ${UserId})`)
            return res.status(200).send(applied);
        }
        catch(err) {
            throw(err);
        }
    }

}