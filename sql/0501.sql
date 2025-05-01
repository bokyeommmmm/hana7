select * from Emp where ename='김바순';
update Emp set ename='김바순' where id = 207;
select * from Emp where id = 207;

-- Dept 테이블에 이름이 가장 빠른 직원(가나다 순)을 captain으로 update 하시오
select dept, min(id), min(ename) from Emp
 group by dept;
 
select * from Emp where ename = SOME(select min(ename) from Emp group by dept)
 order by dept;
 
select e1.id, e1.dept
  from Emp e1 left outer join Emp e2 on e1.dept = e2.dept and e1.ename > e2.ename
 where e2.id is null;

select *
  from Dept d
    inner join (select e1.id, e1.dept
                  from Emp e1 left outer join Emp e2
                    on e1.dept = e2.dept and e1.ename > e2.ename
                 where e2.id is null) sub
    on d.id = sub.dept
 order by d.id;
 
update Dept d
    inner join (select e1.id, e1.dept
                  from Emp e1 left outer join Emp e2
                    on e1.dept = e2.dept and e1.ename > e2.ename
                 where e2.id is null) sub
    on d.id = sub.dept
  set d.captain = sub.id
 where d.id > 0;
  
select * from Dept where captain is not null;

select *, (select ename from Emp where id = d.captain) ename from Dept d;

-- 
select d.*, e.ename from Dept d inner join Emp e on d.id = e.dept and d.captain = e.id;

-- 
-- 선처리: Emp table에 outdt(퇴사일) 컬럼 추가
-- 조건: 퇴사일이 null이면 재직중

-- 그리고 다음 과정을 수행하시오.
-- Emp.id가 3, 5 인 직원을 4월 25일자 퇴사 처리하시오.
-- Emp.id가 14, 26 인 직원을 오늘자 퇴사 처리하시오.
-- 만약 Dept.captain이 퇴사자면 공석으로 처리!

alter table emp add column outdt date comment '퇴사일';
alter table emp add column outdt2 varchar(10) comment '퇴사일2';
-- update emp set outdt =cast('2025-04-25' as date), outdt2 = '2025-04-25'
	-- where id in(3,5);
-- cast 써도되고 안써도된다   
update emp set outdt ='2025-04-25', outdt2 = '2025-04-25'
where id in(3,5);

start transaction ;

update emp e left outer join dept d on e.id = d.captain
	set e.outdt = curdate(), e.outdt2=curdate(),
		d.captain = null
  where e.id in (14,26);
  
show processlist;  

commit;
rollback;

select * from emp where id in (3,5,14,26);


-- 
select deptp, min(ename) minName, max(ename) maxName;

select s.*,p.name
	from subject s left outer join prof p on s.prof=p.id;
-- view ->
select * from v_subject;



insert into subject(name,prof) values ('김과목',4);
insert into subject(name,prof) values ('과목5',4);
insert into subject(name,prof) values ('과목6',2);
select * from subject;


-- ex trigger

alter table prof add column subjectcnt tinyint unsigned not null default 0;
select * from subject;
select * from prof;

update prof p
	set subjectcnt = (select count(*) from subject where prof = p.id)
  where p.id>0;
  
show triggers;

insert into subject(name,prof) values('과목7',3);

select * from prof;

update subject set prof = 2 where id = 5;