

-- Universities

INSERT INTO universities(university_name) VALUES
('A State'),
('B Tech'),
('C Southern');


-- companies

INSERT INTO companies(company_name) VALUES
('A Company'),
('B Company'),
('C Company');


-- jobs

INSERT INTO jobs(company_id, Job_title, start_date, min_gpa, location) VALUES
(1, 'Job 1', '05/20/2020', 0, 'Anywhere, USA'),
(1, 'Job 2', '05/21/2020', 1, 'Anywhere, USA'),
(2, 'Job 3', '05/22/2020', 2, 'Anywhere, USA'),
(2, 'Job 4', '05/23/2020', 3, 'Anywhere, USA'),
(3, 'Job 5', '05/24/2020', 3.5, 'Anywhere, USA'),
(3, 'Job 6', '05/25/2020', 1.5, 'Anywhere, USA');

-- students

INSERT INTO students(university_id, first_name, last_name, email, gpa, graduation_date) VALUES
(1, 'John', 'A', 'JohnA@university.edu', 2.5, '05/20/2020'),
(1, 'John', 'B', 'JohnB@university.edu', 3, '05/21/2020'),
(2, 'John', 'C', 'JohnC@university.edu', 4, '05/22/2020'),
(2, 'John', 'D', 'JohnD@university.edu', 0.45, '05/23/2020'),
(3, 'John', 'E', 'JohnE@university.edu', 1.9, '05/24/2020'),
(3, 'John', 'F', 'JohnF@university.edu', 2.9, '05/25/2020');


-- applied_jobs

INSERT INTO applied_jobs(job_id, student_id) VALUES
(1, 7),
(2, 7),
(1, 8);