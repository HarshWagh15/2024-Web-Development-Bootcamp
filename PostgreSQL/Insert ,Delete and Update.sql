


alter table visited_countries
	add user_id varchar(45)
	
alter table visited_countries
	add unique(user_id,country_code)
	
Insert into visited_countries(user_id,country_code)
	values (1,'FR')
	
update visited_countries
set country_code = 'IND'
where id='1'

select * from visited_countries
order by id desc

delete from visited_countries
where id='2'
	