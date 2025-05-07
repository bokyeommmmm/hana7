set @x = 0;
set @y = NULL;

call sp_ttt(@x,@y);
select @x, @y;

call sp_emplist(10);

call sp_deptinfo('개발');

prepare xp from 'sekect * from emp where id = ? ';
execute xp using @x;


drop procedure if exists sp_cnt;
delimiter $$
create procedure sp_cnt(_table varchar(31))
begin
SET @sql = CONCAT('select count(*) from ', _table);
PREPARE myQuery from @sql;
EXECUTE myQuery;
DEALLOCATE PREPARE myQuery;
end $$
delimiter ;

call sp_dept_salary();