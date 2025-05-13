desc Emp;
desc Dept;

alter table Dept add column captain int unsigned null comment '부서장';

alter table Dept add constraint foreign key (captain) references Emp(id)
  on Delete set null on Update cascade;
  
show create table Dept;

select * from Dept;

alter table Dept drop constraint dept_ibfk_1;

create table EmailLog (
  id int unsigned not null auto_increment primary key,
  sender int unsigned not null comment '발신자',
  receiver varchar(1024) not null comment '수신자',
  subject varchar(255) not null default '' comment '제목',
  body text null comment '내용',
  foreign key fk_EmailLog_sender_Emp (sender)
    references Emp(id) on update cascade on delete no action
) ENGINE = MyIsam;