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

DESC SHOPPY_PRODUCT;
 