show create database testdb;

create table T (
  id int not null auto_increment primary key,
  name varchar(31) not null
);

show create table T;

insert into T(name) values('홍길동');

select * from T;

CREATE TABLE `T` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(31) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

select * from Emp;
select * from Dept where id=4;

explain select e.*, d.dname
  from Emp e inner join Dept d on e.dept = d.id
 where e.id = 2;
 
desc Dept;
 
select * from Emp where id = 2;
select * from Emp where ename = '유세혜';
select * from Dept where id = PreResult.dept;
 
select * from EmpBackup;
create table EmpBackup AS select * from Emp;
truncate table Emp;
insert into Emp select * from EmpBackup;
drop table EmpBackup;

rename table T to TT;

desc Emp;
select * from Emp;

alter table Emp add column auth tinyint(1) unsigned not null default 9
     comment '0:sysadmin, 1:superuser, 3: manager, 5:employee, 7:temporary, 9:guest';
     
alter table Emp modify column auth tinyint(1) unsigned not null default 9
     comment '0:sysadmin, 1:superuser, 3: manager, 5:employee, 7:temporary, 9:guest'
     after dept;
     
alter table Emp add column auth2
 enum('sysadmin','superuser',' manager','employee','temporary','guest');
 
alter table Emp drop column auth2;
     