-- 학과테이블
create table Major (
    id smallint unsigned auto_increment primary key comment '학과번호',
    name varchar(31) not null comment '학과명'
);

insert Major(name) values('철학과');
insert Major(name) values('컴공과');
insert Major(name) values('건축과');

select * from Major;

create table Student (
    id int not null auto_increment primary key comment '학번',
    createdate timestamp default current_timestamp comment '입학일시',
    updatedate timestamp default current_timestamp on update current_timestamp comment '수정일시',
    name varchar(31) not null comment '이름', 
    birthdt varchar(10) not null comment '생년월일',
    major smallint unsigned not null comment '학과번호',
    mobile varchar(11) not null comment '휴대전화번호', 
    email varchar(127) not null comment '이메일주소',
    gender bit not null default 0 comment '성별(1:남, 0:여)',
    graduatedat date null comment '졸업 일자, 재학 중일 경우 null'
);

alter table Student modify column name varchar(25) not null comment '학생이름';
desc Student;
show create table Student;

alter table Student add constraint foreign key (major) references Major(id);