-- 1. Test 테이블 생성 및 5개 데이터 추가(Insert)
create table Test (
  id int unsigned not null auto_increment Primary Key,
  ttt varchar(31) not null,
  dept tinyint unsigned not null
);

insert into Test(ttt, dept)
         values ('aaa1', 3), ('aaa2', 4), ('aaa3', 5),
                ('aaa4', 6), ('aaa5', 7);

-- 2. Test 테이블에서 3개 데이터 삭제 
delete from Test where id in (3,4,5);

select * from test;

-- full backup 17:05

insert into Test(ttt, dept) values ('bbb', 5), ('ccc', 6);
update Test set ttt='CCC' where id = 7; -- # at 690
--   복구 시점 935-- 


-- mistake !! # at 996
delete from test;