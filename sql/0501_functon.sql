DELIMITER $$
CREATE Function f_dt(_ts timestamp) RETURNS varchar(31)
BEGIN
	RETURN date_format(_ts, '%m/%d %H:%i');
END $$
DELIMITER ;


select f_dt(current_timestamp);
select createdate, f_dt(createdate) from Student;

select id, f_empinfo(id) from emp limit 10;

SHOW PROCEDURE STATUS WHERE Db = '<db>';
