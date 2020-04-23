DROP TABLE IF EXISTS  applied_jobs, students, companies, universities, jobs CASCADE;



CREATE TABLE universities(
	university_id serial PRIMARY KEY,
	university_name VARCHAR (50) UNIQUE NOT NULL
);

CREATE TABLE companies(
	company_id serial PRIMARY KEY,
	company_name VARCHAR (50) UNIQUE NOT NULL
);

CREATE TABLE students(
	student_id serial PRIMARY KEY,
	university_id INTEGER NOT NULL,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL,
	email VARCHAR (100) UNIQUE NOT NULL,
	gpa NUMERIC (4,3),
	graduation_date DATE,
	major VARCHAR (50),
	CONSTRAINT student_university_id_fkey FOREIGN KEY (university_id)
		REFERENCES universities (university_id)
		ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE jobs(
	job_id serial PRIMARY KEY,
	company_id INTEGER NOT NULL,
	job_title VARCHAR(50),
	start_date DATE,
	min_gpa NUMERIC (4,3),
	location VARCHAR(50),
	majors VARCHAR(50),
	CONSTRAINT jobs_company_id_fkey FOREIGN KEY (company_id)
		REFERENCES companies (company_id)
		ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE applied_jobs(
	applied_jobs_id serial PRIMARY KEY,
	job_id INTEGER NOT NULL,
	student_id INTEGER NOT NULL,
	applied_on TIMESTAMP DEFAULT NOW(),
	company_replied BOOL DEFAULT 'f',
	CONSTRAINT applied_job_id_fkey FOREIGN KEY (job_id)
		REFERENCES jobs (job_id)
		ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT applied_student_id_fkey FOREIGN KEY (student_id)
		REFERENCES students (student_id)
		ON UPDATE NO ACTION ON DELETE NO ACTION
);