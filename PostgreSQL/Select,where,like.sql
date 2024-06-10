--Selecting a TAble
SELECT * FROM world_food;
--Selecting a country column
SELECT country FROM world_food;
--Selecting a country and wheat_productions coloumns
SELECT country,wheat_productions FROM world_food;
--Equals Condition
SELECT rice_productions
FROM world_food
WHERE country='United States';
--greater than codition we can use all conditions.
SELECT country
FROM world_food
WHERE wheat_productions > 20 ;
--LIKE condition
SELECT country
FROM world_food
WHERE country LIKE'U'||'%';
--Where like codition with ending 'a'.
SELECT country
FROM world_food
WHERE country LIKE'%'||'a';