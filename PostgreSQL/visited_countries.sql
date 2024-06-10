CREATE TABLE visited_countries(
id SERIAL PRIMARY KEY,
country_code CHAR(3)NOT NULL UNIQUE
	);