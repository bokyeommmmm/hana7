create table Student (
    id int unsigned not null auto_increment comment '학번',
    name varchar(31) not null COMMENT '학생명',
    createdate timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '등록일시',
    updatedate timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '등록일시',
    email varchar(255) not null comment '이메일주',
	graduatedt varchar(10) DEFAULT NULL COMMENT '졸업일',
	auth tinyint(1) unsigned NOT NULL DEFAULT '9' COMMENT '0:sys, 1:super, ...9:guest',
	address varchar(63),
    zipcode char(5),
	PRIMARY KEY (id),
    UNIQUE KEY unique_student_email (email)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

select now(), curdate(), curtime();

create table Emp like Student;
create table TT AS select * from Student;

update Emp set address = 'Pusan';