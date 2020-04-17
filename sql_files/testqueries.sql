

-- find all jobs, include a field of if student has applied
SELECT A.job_id, A.job_title, A.start_date, A.location, B.Applied FROM jobs A 
LEFT JOIN (SELECT job_id, 1 AS applied FROM applied_jobs WHERE student_id =7 ) AS B
ON A.job_id = B.job_id;

---