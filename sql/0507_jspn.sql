alter table emp add column remark json;
alter table emp add column remark2 text;
-- ALTER TABLE emp DROP COLUMN remark2;
update Emp set remark = '{"id": 1, "age": 30, "fam": [{"id": 1, "name": "유세차"}]}',
                remark2 = '{"id": 1, "age": 30, "fam": [{"id": 1, "name": "유세차"}]}'
 where id = 2;

update Emp set remark = '{"id": 3, "age": 33, "fam": [{"id": 1, "name": "유세차"}, {"id":2, "name": "홍길숭"}]}'
 where id = 3;

update Emp set remark = '{"id": 4, "age": 34, "fam": [{"id": 1, "name": "유세차"}]}'
 where id = 4;

update Emp set remark = json_object( 'id', 5, 'age', 44, 
                          'fam', json_array(
                              json_object('id', 1, 'name', '지세차'),
                              json_object('id', 2, 'name', '지세창')   )  )
 where id = 5;


select json_pretty(remark),e.* from emp e where id <= 5;   


-- 꺽쇄 두개쓰면 "" 걷어냄.
select remark-> '$.id', remark ->'$.age',
        remark->>'$.fam[0].name', remark->'$.fam[last].name',
        remark->>'$.fam[last - 1 to last].name',
        json_valid(remark)-- , json_valid(remark2)
  from emp
  -- where 33 member of (remark->'$.age');
  where json_object('id',1,'name','유세차') member of (remark->'$.fam');

select JSON_EXTRACT(remark, "$.id"), remark->'$.k',
JSON_UNQUOTE(JSON_EXTRACT(remark, "$.id")), remark->>'$.k',
json_value(remark,'$.id'),json_type(remark->'$.age')
from emp where id<=5;
  
alter table Emp add index index_Emp_remark_famxx ((
  cast(remark->>'$.fam[*].name' as char(255) array)
));
show index from Emp;

explain select * from Emp
 where '유세차' member of (remark->>'$.fam[*].name');


update emp set remark = json_object('id',1,'age',55,'name','Hong')
where id = 2;

update emp set remark = json_insert(remark,'$.addr', 'Seoul')
where id = 2;

update emp set remark = json_insert(remark,'$.fam', json_array(json_object('id',1,'name','유세홍')))
where id = 2;

update emp set remark 
    = json_array_append(remark,'$.fam', json_object('id',2,'name','유세이'))
where id = 2;

update emp set remark 
    = json_set(remark,'$.fam[1].name', '새로이')
where id = 2;

select json_storage_size(remark) from emp;

select * from emp where id =2;
update emp set remark = json_remove(remark,'$.addr')where id = 2;

select remark from emp where remark->'$.fam[1].name'='새로이';

select e.*,d.dname
  from emp e inner join dept d on e.remark->'$.fam[0].id'=d.id
where json_length(e.remark->'$.fam')>0;

select json_objectagg(id,dname) From dept d;
-- 두개의 컬럼이 있을때 key , value로 하나의 json 데이터로 통합?