module.exports={
    getJobs: async (req, res) => {
        const db = req.app.get('db');
        const jobs = await db.query('SELECT * FROM jobs')
        return res.status(200).send(jobs);
    }

}