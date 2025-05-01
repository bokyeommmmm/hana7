set @x = 0;
set @y = NULL;

call sp_ttt(@x,@y);
select @x, @y;

call sp_emplist(10);

call sp_deptinfo('개발부');