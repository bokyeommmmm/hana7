-- offset 활용 . limit 으로 페이지화
select * from emp order by id desc limit 0, 10;
select * from emp order by id desc limit 10,10;
select * from emp order by id desc limit 20,10;

select * from emp order by id desc limit 250, 10;
-- select * from emp order by id desc limit (page-1)*10, 10;
select floor(count(*) / 10) , count(*)%10 from emp;
 -- floor(count(*) / 10 ) -> page
 -- 와 같은 논리 생각해보자 .
-- update Emp set salary = 901
-- where salary=900 order by rand() limit 5;

 select * from emp;
 select dept, count(*), sum(salary) totsal, avg(salary) svgsal from emp group by dept;
 
 -- sub query 
 
  select (select max(dname) from dept where id = e.dept) dept_name, dept, count(*), sum(salary) totsal, avg(salary) svgsal from emp e group by dept;
  -- max 를 이용해 두개가 있더라도 하나만 표시되도록 MAX OR min ㄱㄱ 
  
  -- --- 1) from 절 sub query 
  select * 
	from (select dept, avg(salary) avgsal from emp group by dept) s
	 where avgsal > (select avg(salary)from emp);
     
  -- 2) having
  select dept, avg(salary)avgsal from emp
   group by dept having avgsal>(select avg(salary) from emp);
  
  -- 위 쿼리에서 부서명도 함께 출력 
  -- 1) 

select (select dname from dept where id = emp.dept) dept_name,
dept, avg(salary)avgsal from emp
   group by dept having avgsal>(select avg(salary) from emp);
   -- 2) join
	select e.dept,avg(salary) avgsal from emp e inner join dept d on e.dept = d.id
    group by e.dept having  avgsal > (select avg(salary) from emp);
    
	select e.*, d.dname 
      from emp e inner join dept d on e.dept =d.id;
	-- select * from subject s, prof p where s.prof = s.id; -- 이거랑 같다. 
      
-- 교수 전체 목록에 담당 교과가 있으면 교과명도 함께 출력 - outer join 
select * from subject;
select * from prof;

select *
	from subject s inner join prof p on s.prof=p.id; -- 이건 수업 있는 교수만 나옴.
-- select * from subject s, prof p where s.prof =* s.id;

select p.*, IFNULL(s.name,'담당 교과 없음') subject_name
	from prof p left outer join subject s on p.id = s.prof;
    
    

select * from emp;
update emp set dept = 100 where id=3;
  
  
  select * from emp where salary = (select max(salary) from emp);
  -- select * from emp where salary = (select salary from emp);  
  -- 이건 안된다. 
  
  -- ---
ALTER TABLE Emp ADD COLUMN outdt DATE COMMENT '퇴사일';
UPDATE Emp
	SET outdt = '2025-04-25'
	 WHERE id IN (3, 5);
     
UPDATE Emp
	SET outdt = CURRENT_DATE()
	WHERE id IN (14, 26);
    
    -- --  채점용 
    
update Emp set salary = 901 + dept
  where id in (152, 97,18,80,133,47,128);

    -- -- 채점용 

-- 전체 급여 평균보다 더 높은 급여를 가진 직원 목록을 출력하시오.
-- (부서id, 부서명, 직원id, 직원명, 급여)

select e.dept, d.dname , e.id, e.ename , e.salary
	from emp e inner join dept d on e.dept = d.id
  where e.salary > (select avg(salary) from emp);

select e.dept, d.dname, e.id,e.ename,e.salary
  from emp e join dept d on e.dept = d.id
 where (e.dept, e.salary) in(select dept,max(salary) as maxSalary
							from emp
							group by dept)
 order by dept;
 
 
select e.dept, DeptMaxSal.dname, e.id, e.ename, e.salary
  from Emp e
    inner join
      (select d.dname, e.dept, max(salary) maxsal
         from Emp e inner join Dept d on e.dept = d.id
        group by dept) DeptMaxSal
    on e.dept = DeptMaxSal.dept and e.salary = DeptMaxSal.maxsal
 order by e.dept;
 
-- 부서 별 최고 급여자 목록을 추출하시오.
-- (부서별 1명 씩)


-- ---------
select * from enroll;

insert into enroll(subject, student)
	select 3, id from student where id not in (select student from enroll where subject = 3);
    
select 1, id from student;

alter table enroll add column iscaptain boolean default 0 comment '반장여부';

select * from enroll order by subject, student;


-- select * from 
update
		(select en.subject, 
		  (case subject when 1 then max(s.id) when 2 then min(s.id) else 6 end) captain
		  from enroll en inner join student s on en.student = s.id
		where s.name like '김%'
		group by en.subject) sub inner join enroll en
								 on sub.subject = en.subject and sub.captain = en.student
		set en.iscaptain =1;
	