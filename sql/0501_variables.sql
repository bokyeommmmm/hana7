set @x= 1;
select @y := 2;

select name into @z from prof where id = 1;

select @x,@y,@z from dual;

-- whlie(@x<10) do 
   --  set @x=@x+1;
-- end while

select @x;


