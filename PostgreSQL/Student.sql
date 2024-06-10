CREATE TABLE student(
id SERIAL PRIMARY KEY,
first_name TEXT,
last_name TEXT);

CREATE TABLE contact_detail(
id INTEGER REFERENCES student(id)UNIQUE,
tel TEXT,
address TEXT);

INSERT INTO student(first_name,last_name)
VALUES('Harsh' , 'Wagh');

INSERT INTO contact_detail(id,tel,address)
VALUES (1,'9359769852','ABC')


SELECT *
FROM student
JOIN contact_detail
ON student.id = contact_detail.id