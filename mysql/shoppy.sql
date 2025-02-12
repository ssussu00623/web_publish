/** 
shoppy 사이트 데이터 베이스
**/
--  shoppy_member 테이블 생성 
use hrdb2019;
select database();
show tables;

-- shoppy로 시작하는 모든 테이블 조회

select * from information_schema.tables
where table_name like 'shoppy%';

CREATE TABLE SHOPPY_MEMBER (
	ID			VARCHAR(30)	PRIMARY KEY,
    PWD			VARCHAR(50) NOT NULL,
    NAME		VARCHAR(10)	NOT NULL,
    PHONE		VARCHAR(13)	NOT NULL,
    EMAILNAME	VARCHAR(20)	NOT NULL,
    EMAILDOMAIN	VARCHAR(20)	NOT NULL,
    ZIPCODE		CHAR(5),
    ADDRESS		VARCHAR(80),
    MDATE		DATETIME
);

desc shoppy_member;
select * from shoppy_member;

-- test 중복체크
-- : check하는 과정은 결과를 count 함수로 반환하여야 한다. 
select count(id) as result from shoppy_member where id = 'test';
-- 특정 아이디가 있는지 확인하는게 아니라 id와 같은 값을 카운트해서 0이면 true, 1이면 fale이 되도록 한다
-- {result : 0} 이렇게 json으로 넘어오며 이면 트루인 것. 

use hrdb2019;
select database();

-- Login
select count(*) as result_rows from shoppy_member
	where id = 'test123' and pwd = '1111';
    
use hrdb2019;
SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_NAME LIKE 'SHOPPY%';

-- SHOPPY_PRODUCT
CREATE TABLE SHOPPY_PRODUCT(
	PID				INT				PRIMARY KEY		AUTO_INCREMENT,
    PNAME 			VARCHAR(50)		NOT NULL,
    PRICE			INT,
    DESCRIPTION		VARCHAR(200),
    UPLOAD_FILE		VARCHAR(100),
    SOURCE_FILE		VARCHAR(100),
    PDATE			DATETIME
);

set sql_safe_updates = 0;
DESC SHOPPY_PRODUCT;
delete from shoppy_product;
commit;
select * from shoppy_product;
 
 drop table shoppy_product;
 
 
 CREATE TABLE SHOPPY_PRODUCT(
	PID				INT				PRIMARY KEY		AUTO_INCREMENT,
    PNAME 			VARCHAR(50)		NOT NULL,
    PRICE			INT,
    DESCRIPTION		VARCHAR(200),
    UPLOAD_FILE		json, 
    SOURCE_FILE		json,
    -- 모든 회사에서 json이 가능한게 아니니... 미리 확인하고 해야한다. 
    PDATE			DATETIME
);
DESC SHOPPY_PRODUCT;
select * from shoppy_product;                           
select upload_file from shoppy_product;
select source_file from shoppy_product;
        select 
            pid,
            pname as name, 
            price,
            description as info,
            -- concat('http://localhost:9000/', upload_file) as image, 이미지를 하나만 가져와서 바로 출력 가능할 때.
            concat('http://localhost:9000/', upload_file->>'$[0]') as image,
            -- 멀티플일때. 공백 금지! 화살표 2개 들어가야하는 것 확인하기. 
            source_file,
            pdate
        from shoppy_product ;
use hrdb2019;
select database();
show tables;
select * from shoppy_product; 
desc shoppy_product;
select 	pid,
		pname,
        price,
        description,
        upload_file as uploadFile, 
        source_file as sourceFile, 
        pdate,
        concat('http://localhost:9000/', upload_file->>'$[0]') as image,
        -- json_array(0,1,2 번지의 이미지를 가져와서 배열객체로 생성하는 함수) as imgList
        json_array(
			concat('http://localhost:9000/', upload_file->>'$[0]'),
            concat('http://localhost:9000/', upload_file->>'$[1]'),
            concat('http://localhost:9000/', upload_file->>'$[2]') 
        ) as imgList,
        -- 이렇게 각 0, 1, 2번지의 이미지들이 imgList라는 이름으로 출력된다. 
--         ["http://localhost:9000upload_files\\1739169715810-113338499-1.jpg", 
--         "http://localhost:9000upload_files\\1739169715810-917001291-2.jpg", 
--         "http://localhost:9000upload_files\\1739169715822-556264576-3.jpg"]
		json_arrayagg(
			concat('http://localhost:9000/', jt.filename)) 
            as detailImgList
	from shoppy_product, 
			json_table (shoppy_product.upload_file, '$[*]' 
				columns (filename varchar(100) path '$') ) as jt -- 제이슨 타입을 위한 인라인 뷰
		-- json_table (shoppy_product.upload_file, 매핑데이터 columns (컬럼 생성 후 리턴) as jt 
        -- 제이슨 타입을 위한 인라인 뷰
        -- ["http://localhost:9000/upload_files\\1739169715810-113338499-1.jpg", 
        --  "http://localhost:9000/upload_files\\1739169715810-917001291-2.jpg", 
        -- "http://localhost:9000/upload_files\\1739169715822-556264576-3.jpg", 
        -- "http://localhost:9000/upload_files\\1739169715826-541175476-4.jpg", 
        -- "http://localhost:9000/upload_files\\1739169715831-275245698-5.jpg", 
        --  "http://localhost:9000/upload_files\\1739169715835-520037328-6.jpg"] 
        -- 6개가 배열 형태가 되었다! 
    where pid = 5 
    group by pid;
    
    
    
    -- 0212
    use hrdb2019;
    select database();
    select * from shoppy_product;
    
    -- pid, pname, price, description, upload_file 0번지 이미지
    
    select 	pid,
			pname,
            price,
            description, 
            concat('http://localhost:9000/',upload_file->> '$[0]') as image
	from shoppy_product
    where pid in (8,9,11);
    -- 빌트인 and || or는 in or로 선언해야 여러가지를 담는 사람과 하나를 담는 사람 모두 처리 할 수 있기 때문에....and 가 아닌 or 로 준다. 
    
    
    
    
    
    
    
    
    
    
    