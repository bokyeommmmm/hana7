
create table Prof (
  id smallint unsigned not null primary key,
  name varchar(31) not null,
  likecnt int not null default 0
);


create table Subject (
  id smallint unsigned not null primary key,
  name varchar(31) not null,
  prof smallint unsigned null,
  foreign key fk_Subject_prof_Prof(prof) references Prof(id) on Update cascade on Delete set null
);

create table Enroll (
  id int unsigned not null primary key,
  subject smallint unsigned not null,
  student int unsigned not null,
  foreign key fk_Enroll_subject(subject) references Subject (id) on Update cascade on Delete cascade,
  foreign key fk_Enroll_student(student) references Student (id) on Update cascade on Delete cascade
);
-- 0429 
insert into student(name,birthdt,major,mobile,email)
			values ('김일수','19990123',1,01012340001,'kim@gmail.com');
insert into student(name,birthdt,major,mobile,email)
		values ('김이수','19990223',1,01012340002,'kim1@gmail.com'),
		('김삼수','19990323',1,01012340003,'kim2@gmail.com');
insert into student(name,birthdt,major,mobile,email)
		values ('김사수','19990423',1,01012340004,'kim4@gmail.com');
insert into student(name,birthdt,major,mobile,email)
		values ('김사수','19990423',1,01012340004,'kim5@gmail.com')
	on duplicate key update birthdt='19990425',major=1,email='kim5@gmail.com';
        
select * from student;