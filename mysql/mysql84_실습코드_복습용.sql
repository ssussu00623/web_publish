/*
	SQL(Structured Query Language): 데이터 베이스에서 사용하는 구조화된 언어
	--> DBMS(DataBase Management System)에 접속하여 CRUD 작업을 수행하는 언어
    
    (1) DDL(Data Definition Language) : 데이터 정의어
		- 데이터를 저장하기 위한 공간을 생성하고 관리하는 논리적인 언어 
        - CREATE, ALTER, TRUNCATE, DROP
        
	(2) DML(Data Manipulation Language) : 데이터 조작어 <<= 가장 많이 접할 예정
		- 데이터를 CRUD 작업을 통해 수행하는 언어
        - insert(C), select(R), update(U), delete(D)
        
	(3) DCL(Data Control Language) : 데이터 제어어
		- 데이터에 접근하는 권한을 제어하는 언어 
        - GRANT(권한 부여), DEVOKE(권한 해제)
        
	(4) DTL (Data Transaction Language) : 데이터 트랙잭션 제어어
		- 데이터베이스의 작업 처리 단위의 트랙잭션을 관리하는 언어
        - commit(완료), rollback(취소), savepoint(작업구간별 저장) ..
*/
/*
	데이터베이스 선택 및 조회
    show databases; 						-- 모든 데이터 베이스 목록을 출력
    use [선택한 데이터 베이스 명(대괄호 생략가능)]; 	-- 사용할 데이터 베이스 선택 / 자동으로 바뀌지 않음! 때마다 선택하기
    select database(); 						-- 데이터 베이스 선택
    show tables; 							--데이터 베이스에 저장된 테이블 전체 목록
*/
show databases;  
use hrdb2019;
select database();
show tables;

/*
	테이블 구조를 확인하는 명령어 : DESC(DESCRIBE) --풀은 describe였으나, 4글자씩 잘라서 쓰게 됨(활용도를위해) 
    형식 - DESC [테이블명];
*/

SHOW TABLES; -- 대소문자를 가리지 않는다!
DESC DEPARTMENT;
DESC EMPLOYEE;
DESC UNIT;
DESC VACATION;


/*
	테이블 조회(단순) : SELECT
    형식 - SELECT [컬럼리스트] FROM [테이블명];
		  SELECT [*(전체 컬럼리스트)] FROM [테이블명];
*/

SHOW TABLES;
DESC EMPLOYEE;
SELECT EMP_ID, EMP_NAME FROM EMPLOYEE;
SELECT * FROM EMPLOYEE;
SELECT * FROM UNIT;
SELECT * FROM DEPARTMENT;
SELECT * FROM VACATION;

-- 사원테이블에서 사원아이디, 사원명, 성별, 입사일, 조회 
SHOW TABLES;
DESC EMPLOYEE; 
SELECT EMP_ID, EMP_NAME, GENDER, HIRE_DATE FROM EMPLOYEE;

-- 사원테이블에서 사원명, 부서명, 입사일, 폰번호, 연봉 조회
SELECT 
	EMP_NAME,
    DEPT_ID,
    HIRE_DATE,
    PHONE,
    EMAIL,
    SALARY
FROM EMPLOYEE;

-- 부서테이블의 모든 컬럼 조회

SHOW TABLES;
DESC EMPLOYEE;
SELECT 
	EMP_ID, 
    EMP_NAME, 
    HIRE_DATE, 
    DEPT_ID, SALARY
	FROM EMPLOYEE;
    -- 이건 기본 형식
DESC EMPLOYEE;
SELECT 
	EMP_ID AS '노예번호',
    EMP_NAME 노예명,
    HIRE_DATE 노예계약일,
    DEPT_ID 부서명,
    SALARY 노예삯
    FROM EMPLOYEE;
    -- ALIAS(별칭)으로 출력
    -- 오라클, MSQL에선 AS가 없어도 출력이 되지만 C퀄에서는 불가능
    -- 단어가 하나일 때(ex. 아이디)는 '' 생략이 가능하다. 단어가 2개 이상일 때는(ex.사원 아이디) 오류가 출력된다.
    
-- 사원 테이블에서 사원명, 부서, 연봉을 조회
-- 별칭으로 컬럼명을 수정
-- 기존 컬럼을 이용하여 가상컬럼 생성 - 연봉에 10% 인센티브 컬럼을 생성하기
-- 타입이 숫자인 컬럼은 수식 연산이 가능함 (숫자(INT), 문자(CHAR, VARCHAR), 날짜(DATE)로 크게 3가지로 나누어져 있음) 

    
-- 현재의 날짜를 조회, 화면상에 출력되는 별칭 변경
SELECT CURDATE(); -- 조회
SELECT CURDATE() DATE; -- 별칭 지정 단순1
SELECT CURDATE() AS DATE; -- 별칭 지정 단순 2
SELECT CURDATE() AS 'DATE'; -- 별칭 지정 정석

/*
	테이블 조회(단순-테이블 하나만 가지고 조회하는 것) : SELECT ~ FROM ~ WHERE
    - 조건절을 추가하여 다양한 쿼리를 실행하는 형식 
    형식 - SELECT [컬럼리스트 or *] 
			FROM [테이블명]
            WHERE[조건절];
*/

-- 사원 테이블에서 SYS 부서에 근무하는 모든 사원을 조회
DESC EMPLOYEE;
SELECT *
FROM EMPLOYEE 
WHERE DEPT_ID = 'SYS';

-- 사원 테이블에서 사원명이 '정주고'인 사원을 조회
DESC EMPLOYEE;
SELECT *
FROM EMPLOYEE
WHERE EMP_NAME = '정주고';
    
-- 사원 테이블에서 사원 아이디가 S0011인 사원의 정보를 모두 조회
SELECT *
FROM EMPLOYEE
WHERE EMP_ID='S0011';

-- 사원 테이블에서 연봉이 5800인 사원의 모든 정보 조회
SELECT *
FROM EMPLOYEE
WHERE SALARY = 5800;

-- 사원 테이블에서 여성사원들의 아이디, 이름, 입사일, 이메일 정보를 조회 
SELECT EMP_ID, EMP_NAME, HIRE_DATE, EMAIL
FROM EMPLOYEE
WHERE GENDER='F';
    
-- 사원테이블에서 부서명이 SYS인 사원들의 아이디, 사원명, 입사일을 조회
-- 출력되는 아이디 컬럼명을 '사원번호' 별칭 사용
SELECT EMP_ID AS '사원번호', EMP_NAME, HIRE_DATE
FROM EMPLOYEE
WHERE DEPT_ID='SYS';


    
-- WHERE절 조건에 별칭으로 검색이 가능할까? => x



    /*
		별칭은 보여지기 직전에 데코레이션으로 컬럼의 이름을 바꾸는 것... 
        실행 순서가 FEOM -> WHERE-> SELECT 이기 때문에 구조와 타이밍상 이미 필터링이 된 상태에서 꺼내는 것이기 때문에
        찾을 수 없음
    */
    
-- 사원 테이블에서 마케팅 부서의 모든 사원 정보를 조회
SELECT *
FROM EMPLOYEE
WHERE DEPT_ID='MKT';

-- 사원 ㅔ이블에서 입사일이 2014년 8월 1일인 모든 사원 조회
SELECT * 
FROM EMPLOYEE
WHERE HIRE_DATE = '2014-08-01';

-- 연봉이 5000인 사원 정보 조회
SELECT *
FROM EMPLOYEE
WHERE SALARY = 5000;
/* 
	NULL 타입 정리 
    - 문자 컬럼에서는 NULL보다 큰 값이 들어올 수 있다고 인식한다.
    - 숫자 컬럼에서는 가장 큰 숫자로 인식한다.
    - NULL은 논리적인 의미를 가지므로 IS 키워드를 통해 비교 연산을 수행한다.
*/
SELECT * FROM EMPLOYEE; -- 조회했을 때 값이 NULL인 데이터들을 조회 할 수 있음.

-- 사원 테이블에서 ENG_NAME이 NULL인 모든 사원의 정보를 조회
SELECT *
FROM EMPLOYEE
WHERE ENG_NAME IS NULL;


    
-- 연봉이 정해지지 않은 사원을 조회
SELECT *
FROM EMPLOYEE
WHERE SALARY IS NULL;
    
-- ifnull(); : NULL 값을 바꿔주는 함수. 
-- 형식 : ifnull(null포함 컬럼명, 대체할 값)
-- 컬럼리스트(셀렉트 이후, FROM 전)에서 호출하여 사용


    
-- ENG_NAME이 NULL인 사원들은 'SMITH' 이름으로 변경 후 조회
SELECT EMP_NAME, ENG_NAME, IFNULL(ENG_NAME, 'SMITH') AS 'ENG_NAME'
FROM EMPLOYEE
WHERE ENG_NAME IS NULL;
    
-- 사원의 아이디, 사원명, 입사일, 퇴사일을 조회
-- 현재 근무중인 사원인 퇴사일에 현재의 날짜를 출력 
SELECT * FROM EMPLOYEE;
SELECT EMP_ID, EMP_NAME, HIRE_DATE, RETIRE_DATE, IFNULL(RETIRE_DATE, CURDATE())
FROM EMPLOYEE
WHERE RETIRE_DATE IS NULL;
 