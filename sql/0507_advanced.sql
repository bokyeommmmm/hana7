-- cte
WITH RECURSIVE cte (n,p) AS
(
  SELECT 1,1
  UNION ALL
  SELECT n + 1 ,pow(n+1,2) FROM cte where n<5
)
SELECT /*+ SET_VAR(cte_max_recursion_depth = 20) */ * FROM cte;

select d.dname,e.dept, avg(e.salary) avgsal
    from emp e inner join dept d on e.dept = d.id
  group by dept
  order by avgsal desc limit 1;
-- UNION
--   select d.dname,e.dept, avg(e.salary) avgsal
--    from emp e inner join dept d on e.dept = d.id
--  group by dept
--  order by avgsal limit 1;  -- union을 하면 정렬을 한번밖에 못한다. 

with avgsal as
    (select d.dname,e.dept, avg(e.salary) avgsal
        from emp e inner join dept d on e.dept = d.id
      group by dept),
      maxsal as (select * from avgsal order by avgsal desc limit 1),
      minsal as (select * from avgsal order by avgsal limit 1),
-- avgsal , minsal ,maxsal  -> 3개의 cte.
    sumup as(
    select * from maxsal
    union
    select * from minsal)
select * from sumup
union
select  '평균 차액',' - ', max(avgsal) - min(avgsal) from sumup;



--
--
-- recursive

insert into Dept(pid, dname) values(6, '인프라셀');
insert into Dept(pid, dname) values(6, 'DB셀');
insert into Dept(pid, dname) values(7, '모바일셀');
select * from dept;
select * from dept d1 inner join dept d2 on d1.id = d2.pid;


--  더 이쁘게 짜보자 
WITH RECURSIVE CteDept(id, pid, pname, dname, dx, h) AS 
(
    select id, pid, cast('' as char(31)), dname, 0, cast(id as char(10)) from Dept where pid = 0
    UNION ALL
    select d.id, d.pid, cte.dname, d.dname, dx + 1, concat(cte.h, '-', d.id) 
      from Dept d inner join CteDept cte on d.pid = cte.id
)
select /*+ SET_VAR(cte_max_recursion_depth = 5) */ concat(repeat('->',dx),dname),id, dname, h from CteDept order by h;
-- show variables; -- 환경변수 나옴


--
--
--
-- window function

select dept, ename, salary, avg(salary) avgsal, sum(salary) totsal
  from emp where ename like'박%'
  group by dept,ename, salary
  order by dept, salary desc;
 
 select dept, ename,salary
  from emp 
 where ename like'박%'
 order by dept, salary desc;
 
 select row_number() over (order by dept, salary desc) '순번',
    dept, salary,
    lead(dept,1) over w next_dept,
    lead(dept,2) over w next_dept2,
    round(avg(salary) over (partition by dept order by salary desc)) avgsal,
    sum(salary) over w sumsal
  from emp e where ename like '박%'
  window w as (partition by dept order by salary desc);
  -- 각 dept 에서 마지막 avgsal, sumsal이 결과가 될 수 있다. -> 누적되기 때문 부서별로.
  
  --
  --
  --
  -- ROLLUP
  
  select p.id pid,d.id did,
            (case when p.id is not null then max(p.dname) else '-총계-'end)'상위부서',
            (case when d.id is not null then max(d.dname) else '-소계-'end)'하위부서',
            format(sum(e.salary),0) '급여 합'
    from dept p inner join dept d on p.id = d.pid
        inner join emp e on d.id=e.dept
    group by p.id,d.id
    with rollup;
    
    --
    --
    -- pivot
select e.dept,max(d.dname) '부서',
        format(round(avg(e.salary)*10000),0) '평균급여',
        format(round(sum(e.salary)*10000),0) '총급여',
        format(round(min(e.salary)*10000),0)'Min',
        format(round(max(e.salary)*10000),0)'Max'
    from emp e inner join dept d on e.dept = d.id
--  where d.pid<>0
  group by e.dept
  order by d.id;
  
  select '평균급여' as '구분',
   format(avg(case when dept = 3 then salary end) * 10000, 0) '영업1팀',
   format(avg(case when dept = 4 then salary end) * 10000, 0) '영업2팀',
   format(avg(case when dept = 5 then salary end) * 10000, 0) '영업3팀',
   format(avg(case when dept = 6 then salary end) * 10000, 0) '서버팀',
   format(avg(case when dept = 7 then salary end) * 10000, 0) '클라팀'
 from Emp
UNION
select '급역합계',
   format(sum(salary * (dept = 3)) * 10000, 0),
   format(sum(salary * (dept = 4)) * 10000, 0),
   format(sum(salary * (dept = 5)) * 10000, 0),
   format(sum(salary * (dept = 6)) * 10000, 0),
   format(sum(salary * (dept = 7)) * 10000, 0)
 from Emp
UNION
select '최소급여',   
   format(min(IF(dept = 3, salary, ~0)) * 10000, 0),
   format(min(IF(dept = 4, salary, ~0)) * 10000, 0),
   format(min(IF(dept = 5, salary, ~0)) * 10000, 0),
   format(min(IF(dept = 6, salary, ~0)) * 10000, 0),
   format(min(IF(dept = 7, salary, ~0)) * 10000, 0)
 from Emp
UNION
select '최대급여',   
   format(max(IF(dept = 3, salary, 0)) * 10000, 0),
   format(max(IF(dept = 4, salary, 0)) * 10000, 0),
   format(max(IF(dept = 5, salary, 0)) * 10000, 0),
   format(max(IF(dept = 6, salary, 0)) * 10000, 0),
   format(max(IF(dept = 7, salary, 0)) * 10000, 0)
 from Emp
 ;
select 0 ,+0,~0;

--
--
--
-- 