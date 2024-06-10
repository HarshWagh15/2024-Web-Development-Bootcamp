CREATE TABLE homework_submission(
id SERIAL PRIMARY KEY,
mark INTEGER,
student_id INTEGER REFERENCES student(id)
);

INSERT INTO homework_submission(mark,student_id)
VALUES(90,1),(91,1),(92,1)


SELECT student_id,first_name,last_name,mark
FROM student
JOIN homework_submission
ON student.id = homework_submission.student_id