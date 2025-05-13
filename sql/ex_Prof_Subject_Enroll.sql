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

create table Enroll (
    id int unsigned not null primary key,
    subject smallint unsigned not null comment '과목번호',
    student int unsigned not null comment '학번',
    foreign key fk_Enroll_subject (subject)
      references Subject (id) on Update cascade on Delete cascade,
    foreign key fk_Enroll_student (student)
      references Student (id) on Update cascade on Delete cascade
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

select id from Major order by rand();