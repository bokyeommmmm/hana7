select 1;
select 1 from dual;  -- from dual은 없는것 그냥, 표준 Sql에서 from 필수여서 구색맞추기

select *
    from prof p inner join (
            select 1 x from dual 
             union
            select 2 from dual 
             union all
             select 3  from dual) sub
        on p.id = sub.x;
 
select * from prof where id=1
union
select * from prof where id=2;