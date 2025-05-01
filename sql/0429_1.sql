create table Prof (
    id smallint not null primary key comment '교수번호',
    name varchar(31) not null comment '교수명',
    likecnt int not null default 0
);
alter table Prof modify column id smallint unsigned not null comment '교수번호';

desc Prof;
desc Student;
show create table Prof;

create table Subject (
    id smallint unsigned not null primary key,
    name varchar(31) not null comment '과목명',
    prof smallint unsigned null comment '교수번호',
    foreign key fk_Subject_prof_Prof (prof)
      references Prof (id) on Update cascade on Delete set null
);



insert into Student(name, birthdt, major, mobile, email)
            values ('김일수', '19990123', 1, '01012340001', 'kim@gmail.com');
            
-- bulk insert (batch)
insert into Student(name, birthdt, major, mobile, email)
            values ('김이수', '19990223', 1, '01012340002', 'kim2@gmail.com'),
                   ('김삼수', '19990323', 1, '01012340003', 'kim3@gmail.com');

insert ignore into Student(name, birthdt, major, mobile, email)
            values ('김일수', '19990123', 1, '01012340001', 'kim@gmail.com');
            
insert ignore into Student(name, birthdt, major, mobile, email)
                   values ('김사수', '19990423', 1, '01012340004', 'kim4@gmail.com');
            
insert into Student(name, birthdt, major, mobile, email)
            values ('김사수', '19990423', 1, '01012340004', 'kim5@gmail.com')
    on duplicate key update birthdt = '19990425', major = 1, email = 'kim5@gmail.com';
            
insert ignore into Student(name, birthdt, major, mobile, email)
                   values ('김오수', '19990523', 2, '01012340005', 'kim5@gmail.com');

select * from Major;
select * from Student;
select * from Enroll;
select * from prof;
select *, if(likecnt>5,'best','wosrt') as level from prof;
select *,
	(case likecnt when 2 then 'two' when 3 then 'three' else 'seven' end )as num, 
	(case when likecnt >5 then 'best' when likecnt <=2 then 'worst' else 'good' end) as level 
	from prof;
select * from subject;
insert into Major(name) values('경제학'),('경영학');

INSERT INTO Prof(name, likecnt)
SELECT CONCAT(SUBSTRING(name, 1, 1), '교수'), 0
FROM Student
WHERE name NOT LIKE '이%';
desc prof;
insert into Subject(name, prof)
  select concat('과목', id), id from Prof order by rand();
insert into Enroll(subject, student)
  select id, (select id from Student order by rand() limit 1) from Subject;
update student set graduatedat = curdate()
 order by rand() limit 1 ;
select * from student;

select e.*,(select name from subject where id =e.subject) as subject_name
    from Enroll e;

select * from prof where id < any(select id from prof);
select * from prof where id <= some(select id from prof);
select * from prof where id <= all(select id from prof);
-- 서브쿼리가 리턴하는값도 찍어보자 
select * from student where major between 1 and 3 order by id;
show index from student;
show create table student;

select id from Major order by rand();