/*
	* 데이터베이스의 테이블은 행과 열을 이용하여 데이터를 저장하는 시스템이다. 
    
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
	테이블 조회(단순/ 단일 테이블 기준) : SELECT
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
    - 조건절(WHERE절)을 추가하여 다양한 쿼리를 실행하는 형식 
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
SELECT EMP_ID, EMP_NAME, HIRE_DATE, RETIRE_DATE, IFNULL(RETIRE_DATE, CURDATE()) AS 퇴사일
FROM EMPLOYEE
WHERE RETIRE_DATE IS NULL;
 
 
 /*
	DISTINCT : 데이터의 중복을 배제. 중복된 데이터 하나만 출력
    형식 - SELECT [DISTINCT 컬럼리스트(중복데이터 포함)] 
    FROM [테이블명]
	WHERE [조건절];
 */
 -- 사원 테이블의 부서 컬럼을 조회
 SELECT DISTINCT DEPT_ID
	FROM EMPLOYEE;
    
 SELECT DISTINCT EMP_ID, DEPT_ID -- 두가지 모두 중복되는 값을 배제함
  FROM EMPLOYEE;
  
  /*
	데이터를 INSERT할 때 데이터는 차곡차곡 쌓이는 게 아니라 무수히 돌아가는 실린더 사이에
    가장 가까운 축으로 (관람차가 돌아가고 들어오는 데이터는 그대로 싣는 것) 저장되기 때문에
    기본 정렬은 오름/내름 등 일관성있게 저장되지 않는다.
    따라서 저장된 데이터를 정렬하기 위한 명령어가 필요하다.
    ORDER BY : 데이터 정렬 (오름차순, 내림차순)
    형식 : SELECT ~
			FROM ~
            WHERE ~
            ORDER BY 컬럼 리스트 [ASC / DESC ] 
            - ASC는 기본 값이라 따로 선언하지 않아도 
            해당 값으로 나오지만 DESC는 명령해야 출력 됨
  */
  
  -- 사원아이디, 사원명, 입사일, 연봉을 조회
  -- 사원아이디 기준 오름차순 정렬 
  SELECT EMP_ID, EMP_NAME, HIRE_DATE, SALARY
	FROM EMPLOYEE
    ORDER BY EMP_ID ASC;
    
-- 사원아이디 기준 오름차순, 입사일 기준 내림차순

SELECT EMP_ID, EMP_NAME, HIRE_DATE, SALARY
	FROM EMPLOYEE
	ORDER BY EMP_ID ASC, HIRE_DATE DESC;
    
-- 급여를 기준으로 오름차순 정렬 후 조회alter
SELECT *
	FROM EMPLOYEE
    ORDER BY SALARY ASC;
    
-- ENG_NAME이 정해지지 않은 사원들은 최근 입사한 순서대로 조회 
SELECT *
	FROM EMPLOYEE
    WHERE ENG_NAME IS NULL -- NULL값은 논리적이기 때문에 꼭 IS를 줘야함 ! 
    ORDER BY HIRE_DATE DESC;
    
-- 퇴직한 사람들을 급여가 높은 순으로 조회
SELECT * 
	FROM EMPLOYEE
    WHERE RETIRE_DATE IS NOT NULL
    ORDER BY SALARY DESC;
    
-- 정보시스템 부서의 사원들 중 급여가 높은 순으로 조회
SELECT *
	FROM EMPLOYEE
    WHERE DEPT_ID = 'SYS'
    ORDER BY SALARY DESC;
    
-- 정보 시스템 부서의 사원들 중 최근 입사일 기준, 급여가 낮은 순으로 조회 
SELECT *
	FROM EMPLOYEE
    WHERE DEPT_ID = 'SYS'
    ORDER BY HIRE_DATE DESC, SALARY ASC;
    
/*
	특정 범위의 데이터 검색 : WHERE [조건절 + 비교연산자] 
    형식- SELECT [컬럼리스트]
		FROM [테이블 명]
        WHERE 컬럼명 [비교연산자 조건절]
*/

-- 사원중에서 연봉이 5000이상인 사원들을 조회
SELECT * 
	FROM EMPLOYEE
    WHERE SALARY >= 5000
    ORDER BY SALARY DESC;
    
-- 입사일이 '2016년 1월 1일' 이전에 입사한 사원들 조회
-- DATE 타입은 표현은 문자처럼(내가 명령할 때는 STRING. 인식은 NUM)
-- 처리 방식은 숫자처럼! 꼭 기억하기

SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE <= '2016-01-01'
    ORDER BY HIRE_DATE DESC;
    
-- 입사일이 2015년 1월 1일 이후이고, 급여가 6000이상인 사원들을조회
-- AND (~이고) : 두 개의 조건이 모두 만족한 데이터만 조회

SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE >='2015-01-01'
    AND SALARY >= 6000
    ORDER BY HIRE_DATE DESC;
    
-- 입사일이 2015년 1월 1일 이후이거나, 급여가 6000이상인 사원들을조회
-- OR (~또는) : 두 개의 조건 중 하나만 만족해도 데이터 조회
SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE >='2015-01-01'
    OR SALARY >= 6000
    ORDER BY HIRE_DATE DESC;
    
-- 입사일이 2015년 1월 1일 부터 2017년 12월 31일사이에입사한 사원들을모두 조회 
-- 특정한 구간이 필요한 경우 컬럼이 하나일 때는 오류로 나타난다. 
SELECT * 
	FROM EMPLOYEE
    WHERE HIRE_DATE >= '2015-01-01' AND HIRE_DATE <='2017-12-31'
    ORDER BY HIRE_DATE DESC;
    
-- 연봉 구간이 5000이상 7000미만인 사원들을 모두 조회
SELECT * 
	FROM EMPLOYEE
    WHERE SALARY >= 5000 AND SALARY < 7000
    ORDER BY SALARY DESC;
    
/*
	BETWEEN ~ AND : 특정 구간 조회시 사용
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
            WHERE 컬럼명 BETWEEN [시작구간] AND [종료구간];
*/
-- 2016년 입사자들을 조회 (2016-01-01~2016-12-31) 
SELECT * 
	FROM EMPLOYEE
    WHERE HIRE_DATE BETWEEN '2016-01-01' AND '2016-12-31'
    ORDER BY SALARY DESC;
    
-- 사원 아이디가 'S0001','S0010','S0020'인 사원의 모든 정보를 조회
SELECT * 
	FROM EMPLOYEE
    WHERE EMP_ID = 'S0001' OR EMP_ID = 'S0010' OR EMP_ID = 'S0020'
    ORDER BY SALARY DESC;
    
-- 부서 아이디가 MKT, GEN, HRD인 부서에 속한 모든 사원을 조회
SELECT * 
	FROM EMPLOYEE
    WHERE DEPT_ID = 'MKT' OR DEPT_ID = 'GEN' OR DEPT_ID = 'HRD'
	ORDER BY SALARY DESC;
    
/*
	IN 연산자 : 한 컬럼에 추가되는 QR 연산식을 대체하는 IN 연산자
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
            WHERE 컬럼명 IN(조건1, 조건2, 조건3 ...);
*/
-- 사원 아이디가 'S0001','S0010','S0020'인 사원의 모든 정보를 조회
SELECT * 
	FROM EMPLOYEE
    WHERE EMP_ID IN ('S0001','S0010','S0020')
	ORDER BY SALARY DESC;
    
-- 부서 아이디가 MKT, GEN, HRD인 부서에 속한 모든 사원을 조회
SELECT * 
	FROM EMPLOYEE
    WHERE DEPT_ID IN('MKT', 'GEN', 'HRD')
	ORDER BY SALARY DESC;
    
/*
	와일드 카드 문자 : 특정 문자열 검색 + LIKE 
    종류: %(전체), _(한문자)
    사용법: LIKE 연산자와 함께 조건식을 추가하여 사용됨
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
			WHERE 컬럼명 [와일드카드 문자를 이용한 특정 문자열 검색 조건] 
*/

-- 영어 이름이 'f'로 시작하는 모든 사원들을 조회
SELECT *
	FROM EMPLOYEE
    WHERE ENG_NAME LIKE 'f%';

-- '한'씨 성을 가진 모든 사원들을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_NAME LIKE '한%';
	
-- 이메일 주소 2번째 자리에 'a'가 들어가는 모든 사원을 조회

SELECT *
	FROM EMPLOYEE
    WHERE EMAIL LIKE '_a%';
    
-- 이메일 주소가 4자리인 모든 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMAIL LIKE '____@%';

-- 이름에 '삼'이 들어가는 모든 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_NAME LIKE '%삼%' ;
    
/***************************************************
	내장함수(Built-in) : 숫자, 문자, 날짜 함수
    - 함수 테스트를 위한 테이블 DUAL
    - SELECT [함수 실행] FROM DUAL;
***************************************************/
-- 1. 숫자 함수: abs(), rand(), truc()...
--  (1) ABS 함수 : 절대값 표현 함수 
SELECT 100, -100, ABS(100) AS '이렇게 이름도 바꿀 수 있음', ABS(-100)
	FROM DUAL;
    
--  (2) FLOOR함수 : 소수점을 버리는(삭제) 함수 
-- 		TRUNC(TRUNCATE) : 소수점을 삭제하는 함수 - TRUNCATE(데이터, 자릿수) // 기왕이면 이걸 외우는 걸 추천.
-- 		구버전에서는 TRUNC도 가능하지만 최신 버전은 TRUNCATE만 가능하다. 
SELECT 123.456, FLOOR(123.456)
	FROM DUAL;
SELECT 123.456, 
	TRUNCATE(123.456, 0) AS '소수점 0',
    TRUNCATE(123.456, 2) AS '소수점 2'
	FROM DUAL;
    
-- (3) RAND 함수 : 임의의 수를 생성. 같은 곳 안에 있어도 호출되는 만큼의 임의의 수를 호출한다.
SELECT RAND(),
		RAND() * 1000,
        RAND() * 100000
    FROM DUAL;
    
-- 정수 값만 출력하는 쿼리를 생성해보기 
SELECT FLOOR(RAND()) AS 'RAND 1',
		TRUNCATE(RAND() * 1000, 0) AS 'RAND 2', 
        TRUNCATE(RAND() * 100000, 0) AS 'RAND 3',
        TRUNCATE(RAND() * 100000, 2) RAND4
    FROM DUAL;
    
-- (4) MOD 함수 : 모둘러 연산을 실행하는 함수 -MOD(숫자데이터, 나누는 숫자)
-- 값을 나누고 나머지 값이 출력되기 때문에 짝수는 0, 홀수는 1이 출력된다.
SELECT MOD(100,2) 짝수, MOD(101,2)홀수 FROM DUAL; 

-- 1~3자리의 정수를 생성하고, 생선한 정수를 2로 나누는 모듈러 함수를 실행하는 쿼리를 완성해주세요.
SELECT MOD(TRUNCATE(RAND()*1000, 0), 2) AS RESULT
	FROM DUAL;
    
-- 사원 테이블에서 사원 아이디, 사원명, 부서아이디, 입사일, 연봉, 인센티브(연봉20%)를 조회
-- 인센티브의 소수점은 생략하라. 
-- 5000미만의 사원들 정보만 출력
SELECT 
	EMP_ID, 
    EMP_NAME, 
    DEPT_ID, 
    HIRE_DATE, 
    IFNULL(SALARY, 0) AS SALARY,
    IFNULL(TRUNCATE(SALARY*0.2, 0), 0) AS INCENTIVE
    FROM EMPLOYEE
    WHERE SALARY < 5000 OR SALARY IS NULL;
    -- NULL을 0으로 바꿔주었다 해도 SELECT는 가장 마지막에 보여주는 값이기 때문에 
    -- NULL값을 따로 지정해야 기존에 NULL값이었던게 호출 됨
    
    
-- 2. 문자 함수: CONCAT(), SUBSTRING()...
--  (1). CONCAT (문자열, 문자열....) : 문자열 결합
SELECT CONCAT('MY','SQL','-84') AS NAME
	FROM DUAL;
    
-- 사원 테이블의 사원명과 영어이름을 결합하여 새로운 컬럼을 생성하고 컬럼명은 TEST_NAME으로 조회 예시)홍길동/HONG
-- 영어 이름이 정해지지 않은 사원은 빈문자열로 치환해서 실행
SELECT EMP_NAME, ENG_NAME,
	CONCAT(EMP_NAME, '/', IFNULL(ENG_NAME, '')) AS TEST_NAME
    FROM EMPLOYEE;
    
-- 사원 테이블의 사원아이디와 1~5자리 사이의 임의의 정수를 결합하여사원 번호라는 새로운 컬럼을 생성하고 조회
-- 사원 아이디, 사원번호, 사원명, 입사일, 급여, 퇴사일 컬럼리스트를 조회
-- 현재 근무중인 사원은 현재 날짜를 출력하도록 진행
SELECT EMP_ID, 
	CONCAT(EMP_ID, '_', TRUNCATE(RAND()*100000, 0)) AS EMP_NUM, EMP_NAME, 
    HIRE_DATE, 
    SALARY, 
    IFNULL(RETIRE_DATE, CURDATE()) AS CURDATE,
    IFNULL(RETIRE_DATE, NOW()) AS NOW -- 회원가입시 NOW를 더 많이 쓴다. 시분초로 더 분별력 가지기 
    FROM EMPLOYEE;
    
-- (2) SUBSTRING(문자열, 위치, 추출자릿수) : 문자열 추출 함수
SELECT SUBSTRING('대한민국 홍길동 만세 1234!!', 1, 4) AS 대한민국,
	 SUBSTRING('대한민국 홍길동 만세 1234!!', 6, 3) AS 홍길동,
	 SUBSTRING('대한민국 홍길동 만세 1234!!', 10, 2) AS 만세,
	 SUBSTRING('대한민국 홍길동 만세 1234!!', 17, 2) AS 느낌표,
     SUBSTRING('대한민국 홍길동 만세 1234!!', 13, 4) AS '1234'
		FROM DUAL;
    
-- 사원 테이블에서 사원 아이디, 사원명, 입사년도, 입사월, 입사일, 급여를 조회
SELECT EMP_ID,
	EMP_NAME,
    SUBSTRING(HIRE_DATE, 1, 4) AS HIRE_YY,
    SUBSTRING(HIRE_DATE, 6, 2) AS HIRE_MM,
    SUBSTRING(HIRE_DATE, 9, 2) AS HIRE_DD,
    SALARY
	FROM EMPLOYEE;

-- 2015년도 입사한 모든 사원들을 조회
SELECT *
	FROM EMPLOYEE
	WHERE SUBSTRING(HIRE_DATE, 1, 4) = '2015';

-- 2018년도 정보시스템 부서에 입사한 모든 사원들을 조회해보세요
SELECT *
	FROM EMPLOYEE
	WHERE SUBSTRING(HIRE_DATE, 1, 4) = '2018' 
	AND DEPT_ID = 'SYS';
    
-- (3) LEFT(문자열, 추출숫자), RIGHR(문자열, 추출숫자) 

 SELECT LEFT('대한민국 홍길동 만세 1234!!', 4) 대한민국,
		RIGHT('대한민국 홍길동 만세 1234!!', 2) '!!'
		FROM DUAL;
    
-- 2015년도에 입사한 모든 사원들을 조회
SELECT *
	FROM EMPLOYEE
    WHERE LEFT(HIRE_DATE, 4) ='2015';
    
-- 사원들의 폰번호 마지막 4자리를 조회
-- 사원명, 부서아이디, 입사년도, 폰번호(뒷 4자리)
SELECT 
	EMP_NAME,
    DEPT_ID,
    LEFT(HIRE_DATE, 4) AS HIRE_DATE,
    RIGHT(PHONE, 4) AS PHONE
    FROM EMPLOYEE
    ORDER BY HIRE_DATE DESC;
    
-- (4) UPPER(대문자), LOWER(소문자)
SELECT * FROM EMPLOYEE
WHERE UPPER(DEPT_ID) = UPPER('SYS');

-- 사원들의영어 이름과 이메일 주소를 모두 대문자로 조회

SELECT EMP_ID, 
	EMP_NAME, 
	UPPER(ENG_NAME), 
	UPPER(EMAIL)
	FROM EMPLOYEE;
    
-- (5) TRIM():공백 제거
--  하지만 문자열 사이의 공백은 제거하지 않음

SELECT TRIM('                  MYSQL  84') TRIM1,
		TRIM('MYSQL                    ') TRIM2,
        TRIM('              MYSQL   84  ') TRIM3
        FROM DUAL;
        
-- (6) FORMAT(문자열, 소수점자리): 문자열의 포맷 수정
-- 숫자를 3자리씩 콤마로 구분하여 출력하는 포맷 생성
SELECT FORMAT(123456, 0) FORMAT1,
		FORMAT(123456, 3) FORMAT2 FROM DUAL;
        
-- 사원테이블의 사원 아이디, 사원명,입사일, 연봉을 조회
-- 연봉협상 전인 사원은 0으로 변환 후 조회
-- 연봉은 3자리씩 콤마로 구분하여 출력
SELECT EMP_ID,
	EMP_NAME,
    HIRE_DATE,
    CONCAT(FORMAT(IFNULL(SALARY, 0), 0), '만원') SALARY
    FROM EMPLOYEE;
-- 사원아이디, 사원명, 부서아이디, 입사일, 연봉, 보너스(연봉의 0.05%)컬럼들을 조회
-- 연봉과 보너스 컬럼은 3자리 콤마로 구분하여 출력 후 '만원' 표시
-- 보너스 칼럼은 소수점 1자리까지 출력
SELECT EMP_ID, 
	EMP_NAME, 
    DEPT_ID, 
    HIRE_DATE,
    CONCAT(FORMAT(IFNULL(SALARY, 0), 0), '만원') SALARY,
    CONCAT(FORMAT(IFNULL(SALARY*0.05, 0), 1), '만원') BONUS
    FROM EMPLOYEE;
        
-- 3. 날짜 함수 : CURDATE(), NOW(), SYSDATE()
-- (1) CURDATE() : 현재 시스템 날짜를 출력. 컴퓨터 환경 기준
	SELECT CURDATE() FROM DUAL;
-- (2) NOW(), SYSDATE() : 현재 시스템 날짜를 출력, 년월일 시분초 출력 SYSDATE는 오라클에서도 사용한다.
	SELECT NOW(), SYSDATE() FROM DUAL;
    
-- 4. 형변환 함수 : CAST(), CONVERT() <- 구버전 함수. 작동은 되지만 잘 사용하지 않음
-- CAST (변경 테이터 AS 데이터 타입) 숫자를 문자 형식으로 바꿀 수 있는 식
	SELECT 12345 숫자, CAST(12345 AS CHAR ) 문자 FROM DUAL;
    SELECT '12345' 문자, CAST(12345 AS UNSIGNED INTEGER) 정수 FROM DUAL;
    
-- 입력 폼에서 '20150101'데이터 날짜를 가진 사원을 조회
	SELECT *
    FROM EMPLOYEE
    WHERE HIRE_DATE = CAST('20150101' AS DATE);
    
-- FLOOR 함수를 적용한 CAST 함수
	SELECT  FLOOR('12-34-5') 문자,
			FLOOR(CAST('12-34-5'AS UNSIGNED INTEGER)) 정수
		FROM DUAL;

-- 5. 문자열 치환 함수 : REPLACE(문자열, OLD, NEW)
SELECT '123,456'문자, CAST(REPLACE('123,456',',','') AS UNSIGNED INTEGER) 숫자
FROM DUAL;

-- 사원테이블의 입사일 포맷을 변경 '2015-01-01'--> '2015/01/01'
SELECT EMP_NAME, HIRE_DATE, REPLACE(HIRE_DATE, '-', '/') HIRE_DATE
FROM EMPLOYEE;
-- 실제 데이터는 하이픈(-)이지만 보이는 것을 슬래쉬(/)로 보이게 하는 것 

/***************************************************************
	그룹(집계)함수: SUM(), AVG(평균), MIN(), MAX(), COUNT()...
    GROUP BY : 그룹함수를 적용하기 위해 일반컬럼을 그룹핑하는 단위
    HAVING : 그룹함수의 조건절을 적용하는 구문
***************************************************************/ 
-- 1.SUM(숫자, 숫자 컬럼) 
-- 사원테이블에서 모든 연봉 총합을 조회 
SELECT SUM(SALARY) 연봉총합,
		CONCAT(FORMAT(SUM(SALARY),0),'만원') 총합꾸미기 
FROM EMPLOYEE; 
/*
	SELECT EMP_ID, SUM(SALARY) 연봉총합 FROM EMPLOYEE; 
    이렇게 그룹함수가 아닌 EMP_ID를 함께 출력하고자 하면
	오류가 난다. 일반 컬럼과 함께 사용할 수 없음
*/

-- 2. AVG(숫자, 숫자 컬럼) 
-- 사원들의 총연봉, 평균연봉을 조회 , 3자리 구분과 단위추가
-- 소수점 1자리까지 유지
SELECT 
	CONCAT(FORMAT(SUM(SALARY),1),'만원') 총연봉,
	CONCAT(FORMAT(AVG(SALARY),0),'만원') 평균연봉
    FROM EMPLOYEE;
    
-- 3. MIN(숫자, 숫자컬럼) 
-- 가장 작은 값을 출력
-- 사원들의 총 연봉, 평균 연봉, 최소연봉을 출력
-- 3자리 구분, 만원추가, 소수점자리 생략
SELECT 
	CONCAT(FORMAT(SUM(SALARY),1),'만원') 총연봉,
	CONCAT(FORMAT(AVG(SALARY),0),'만원') 평균연봉,
	CONCAT(FORMAT(MIN(SALARY), 0), '만원') 최소연봉
    FROM EMPLOYEE;

-- 4. MAX(숫자, 숫자컬럼)
-- 가장 큰 값을 출력
-- 사원들의 총 연봉, 평균 연봉, 최소연봉, 최대연봉을 출력
-- 3자리 구분, 만원추가, 소수점자리 생략
SELECT 
	CONCAT(FORMAT(SUM(SALARY),1),'만원') 총연봉,
	CONCAT(FORMAT(AVG(SALARY),0),'만원') 평균연봉,
	CONCAT(FORMAT(MIN(SALARY), 0), '만원') 최소연봉,
    CONCAT(FORMAT(MAX(SALARY), 0), '만원') 최대연봉
    FROM EMPLOYEE;
    
-- 5. COUNT(컬럼명)
-- 테이블의 모든 ROW COUNT를 출력 
-- NULL을 포함한 데이터의 COUNT를 계산하지 x
SELECT 
	COUNT(*) 총사원수,
	COUNT(SALARY) 연봉협상완료사원수
	FROM EMPLOYEE; -- 20명이지만 NULL값인 고소해씨는 찾지 못해 총 사원수와 차이가 있음
    
SELECT * 
	FROM EMPLOYEE
    WHERE SALARY IS NULL;
    
-- 총 사원수, 퇴직사원수, 현재사원수를 조회
-- 인원수 뒤에 '명'단위 추가
-- 단순 CONCAT을 사용해도 실행은 되지만 다른 플랫폼을 이용하는 경우호환되지 않기 때문에...
-- 결과값을 문자로 변환하여 문자인 명을 붙여준다. 
SELECT
	CONCAT(CAST(COUNT(*) AS CHAR), '명') 총사원수,
    CONCAT(CAST(COUNT(RETIRE_DATE) AS CHAR), '명') 퇴직사원수,
    CONCAT(CAST(COUNT(*)-COUNT(RETIRE_DATE) AS CHAR), '명') 현재사원수
    FROM EMPLOYEE;
    
-- 사원테이블에서 정보시스템 부서의 사원수를 조회 
SELECT COUNT(*)
	FROM EMPLOYEE
	WHERE DEPT_ID = 'SYS';
    
-- 2015년도에 입사한 사원수를 조회
-- 2015년도 입사자 총연봉
SELECT COUNT(*) '2015년도 입사자(명)',
		SUM(SALARY) 총연봉,
        AVG(SALARY) 평균연봉,
        MIN(SALARY) 최소연봉,
        MAX(SALARY) 최고연봉
	FROM EMPLOYEE
    WHERE LEFT(HIRE_DATE, 4) = '2015';

-- 가장 최근 입사자와 오래된 입사자의 입사일 조회
SELECT 
	MIN(HIRE_DATE) 최근입사일,
	MAX(HIRE_DATE) 최초입사일
	FROM EMPLOYEE;
    
-- HRD 부서 기준 가장 최근 입사자와 오래된 입사자의 입사일 조회
SELECT 
	MIN(HIRE_DATE) 최근입사일,
	MAX(HIRE_DATE) 최초입사일
	FROM EMPLOYEE
    WHERE DEPT_ID = 'HRD';
    
-- 마케팅 부서 기준 가장 낮은 연봉과 높은 연봉을조회
SELECT 
	MIN(SALARY) 최저연봉, 
	MAX(SALARY) 최고연봉
	FROM EMPLOYEE
	WHERE DEPT_ID='MKT';
    
-- 6. GROUP BY ~ 적용: ~~별 그룹함수를 적용해야 하는 경우
-- GROUP BY는 그룹함수가 없을 때 실행되지 않고 오류를 출력한다. *을 하더라도 COUNT(*)여야 출력.
-- GROUP BY에 사용된 일반 컬럼은 그룹함수와 함께 조회 가능
-- 사원테이블에서 부서별 사원수를 조회
SELECT COUNT(*) 부서별사원수
	FROM EMPLOYEE
	GROUP BY DEPT_ID;

SELECT DEPT_ID, COUNT(*) 부서별사원수
	FROM EMPLOYEE
	GROUP BY DEPT_ID; 
    -- 같이 그룹에 묶인 DEPT_ID는 조회가 되는 반면, SALARY를 출력시키면 필드에 없다고 오류가 발생한다. 다른 그룹함수는 작동함.
    
-- 입사년도별 총연봉, 평균연봉, 최저연봉, 최고연봉, 입사사원 수를 조회  
SELECT 
	CONCAT(LEFT(HIRE_DATE, 4), '년도') 입사년도, 
	CONCAT(FORMAT(SUM(IFNULL(SALARY,0)),0),'만원') 총연봉,
	CONCAT(FORMAT(AVG(SALARY),0),'만원') 평균연봉,
	CONCAT(FORMAT(MIN(SALARY), 0), '만원') 최저연봉,
    CONCAT(FORMAT(MAX(SALARY), 0), '만원') 최고연봉,
    CONCAT(COUNT(*), '명') 사원수
	FROM EMPLOYEE
    GROUP BY CONCAT(LEFT(HIRE_DATE, 4), '년도') ;
    -- GROUP BY와 똑같이 SELECT되어야 값이 출력되기 때문에 똑같이 입력해줘야함.
    
-- 부서별 별 총연봉, 평균연봉, 최저연봉, 최고연봉, 입사사원 수를 조회  
SELECT 
	DEPT_ID 부서아이디, 
	CONCAT(FORMAT(SUM(IFNULL(SALARY, 0)),0),'만원') 총연봉,
	CONCAT(FORMAT(AVG(IFNULL(SALARY, 0)),0),'만원') 평균연봉,
	CONCAT(FORMAT(MIN(IFNULL(SALARY, 0)), 0), '만원') 최저연봉,
    CONCAT(FORMAT(MAX(IFNULL(SALARY, 0)), 0), '만원') 최고연봉,
    CONCAT(COUNT(*), '명') 사원수
	FROM EMPLOYEE
    GROUP BY DEPT_ID ;
    
-- 7. HAVING 절: 
-- GROUP BY를 통해 그룹핑한 결과에 조건절을 추가하는 구문 
/*
SELECT 
	FROM EMPLOYEE
    GROUP BY
    HAVING ;
*/

-- 부서별 평균 연봉을 조회
-- NULL 값이 포함된 경우 0으로 변환
-- 소수점 자리는 절삭
-- 부서 아이디 함께 출력
-- 부서 평균 연봉이 6000 이상인 부서만 출력<-- 이럴 때 HAVING을 쓴다
-- 평균연봉 기준 오름차순으로 정렬 
SELECT DEPT_ID,
	TRUNCATE(AVG(IFNULL(SALARY, 0)), 0) 평균연봉 -- 오라클에서는 IFNULL이 NVL(컬럼명, 값)
	FROM EMPLOYEE
    GROUP BY DEPT_ID
    HAVING 평균연봉 >= 6000
    ORDER BY 평균연봉;
    -- HAVING 절에서는 별칭 컬럼명을 조건으로 사용 가능함.
    -- HAVING은 그룹바이에서 모든 필터링이 끝난 뒤 적용되기 때문에 별칭으로도 조회가 가능하다. 
    -- ORDER BY는 항상 마지막에 주어지기 때문에 그룹> 해빙 이후로는 적용된 별칭으로 사용 가능하다.
    
-- 입사년도기준 총연봉, 평균연봉을 조회
-- 총연봉이 5000이상인 사원들만 출력
-- NULL값을 포함한 경우 0으로 초기화

SELECT 
	CONCAT(LEFT(HIRE_DATE, 4), '년도') 입사년도,
	CONCAT(TRUNCATE(SUM(IFNULL(SALARY, 0)), 0), '만원') 총연봉,
    CONCAT(TRUNCATE(AVG(IFNULL(SALARY, 0)), 0), '만원') 평균연봉
	FROM EMPLOYEE
    GROUP BY CONCAT(LEFT(HIRE_DATE, 4), '년도')
    HAVING SUM(SALARY) >= 5000;
    
-- 부서별 남녀사원의 사원수를 조회
SELECT 
	DEPT_ID 부서ID, 
	GENDER 젠더,
    COUNT(*)
	FROM  EMPLOYEE
    GROUP BY DEPT_ID, GENDER;
-- GROUP BY는 2개 이상의 조건 설정이 가능 !

-- 8. ROLLUP 함수: REPORTING을 위한 함수 
/*
	형식 : 
		SELECT [컬럼리스트] FROM [테이블명]
			WHERE [조건절]
            GROUP BY [크룹핑 컬럼] WHITH ROLLUP;
*/
-- 부서별 총 연봉을조회, 연봉이 정해지지 않은 부서는 포함하지 않음.
SELECT IF(GROUPING(DEPT_ID),'부서 총합계', IFNULL(DEPT_ID, '-')) 부서ID,
-- '-'로 입력하면 앞에입력된 문자열을 그대로 가지고 온다.  
	CONCAT(FORMAT(SUM(SALARY),0), '만원') 총연봉
	FROM EMPLOYEE
    WHERE SALARY IS NOT NULL
	GROUP BY DEPT_ID WITH ROLLUP;
    
-- 입사 년도별 평균 연봉 조회
-- 연봉이 정해지지 않은 부서는포함x
-- 평균 연봉이 6000이상 되는 입사년도만 출력 
-- 3자리 구분, 만원단위 추가
-- 리포팅 함수 사용, 연도별 총합계 컬럼명추가

SELECT
	IF(GROUPING(YEAR), 
		'연도별평균연봉', IFNULL(YEAR, '-')) 연도별,
		CONCAT(TRUNCATE(AVG(IFNULL(SALARY, 0)), 0), '만원') 평균연봉
		FROM (SELECT LEFT (HIRE_DATE, 4) YEAR, 
						SALARY 
				FROM EMPLOYEE) T
		WHERE SALARY IS NOT NULL
		GROUP BY YEAR WITH ROLLUP;
		-- 함수를 바로 넣는게 아니라 가상의 테이블 생성 후 그걸 기반으로 확인하여야 함. 서브쿼리.

SHOW TABLES;
-- 사원들의 휴가사용 내역 조회 
SELECT * FROM VACATION;

-- 사원 아이디별 휴가사용 횟수 조회
-- 휴가 사용일 내림차순 정렬 
SELECT EMP_ID 사원아이디,
	COUNT(*) 휴가상신횟수,
    SUM(DURATION) 총휴가사용일
	FROM VACATION
    GROUP BY EMP_ID
    ORDER BY 총휴가사용일 DESC;
    
-- 2016~2017년도 사이에 사원아이디별 휴가사용 횟수 조회
-- 총휴가사용일 기준으로 내림차순 정렬
SELECT * FROM VACATION;

SELECT 
	IF(GROUPING (EMP_ID),'총 휴가일수', IFNULL(EMP_ID,'-')) 사원아이디,
	COUNT(*) 상신횟수,
    SUM(DURATION)총휴가사용일 
	FROM VACATION
    WHERE LEFT(BEGIN_DATE, 4) BETWEEN 2016 AND 2017
	GROUP BY EMP_ID WITH ROLLUP
	ORDER BY 총휴가사용일;
    
/***************************************************************
	DDL : 테이블 생성, 수정, 삭제
    명령어: CREAT, ALTER, DROP, TRUNCATE - TRUNCATE()와는 다르다!
***************************************************************/
-- 1. 테이블 생성 : CREATE
/*
형식: CREAT TABLE [생성할 테이블 명](
		컬럼명	테이터타입(크기)[제약사항],
		...
	)
    테이블명과 컬럼명은 각각 중복된 이름으로는 생성할 수 없음 주의
*/
SHOW DATABASES;
USE HRDB2019;
SELECT DATABASE();
SHOW TABLES;

-- TEST 테이블 생성 및 삭제(DELETE) / 제거(DROP)
CREATE TABLE TEST(
	ID CHAR(4)	NOT NULL -- 4글자까지 들어갈 수 있고 NULL도 들어갈 수 없음
);
-- 오류일 경우 오류터미널이 생성 됨(하단에 오류창 뜨는 거)... 정상 작동 됐으면 특별한 반응이 없음
SHOW TABLES;

DESC TEST;
SELECT * FROM TEST;
DROP TABLE TEST;
SHOW TABLES;

-- DATA TYPE(데이터 타입): 숫자, 문자, 날짜(시간)
-- (1) 숫자 데이터 타입 
-- 1) 정수: SMAILLINT(2), INT(4), BIGINT(8) 각 바이트만큼 자릿수로 넣을 수 있음 주로 INT사용
-- 2) 실수: FLOAT(4), DOUBLE(8)
-- 3) 문자: CHAR(크기: 고정형) 고정형은 숫자만큼으로 제한 가능, VARCHAR(크기: 가변형) 가변형은 맥시멈을 설정해두는 것  
-- 4) 텍스트 : TEXT 긴 문장을저장하는 타입
-- 5) BLOB 타입 : BLOB
-- (큰 바이너리 타입이 데이터 저장... 2기가까지 저장 할 수 있지만 다른 데이터가 못 들어갈 수 있기 때문에 현재엔 잘 활용하지 않음)
-- 6) 날짜 : DATE - 년, 월, 일 DATETIME - 년, 월, 월, 시, 분, 초
-- 			데이터타입에 맞는 날짜 함수 호출 필요 ! ! 오라클에서는 데이터타임이 실행되지 않을 수 있음 

DESC EMPLOYEE;
SELECT * FROM EMPLOYEE;

-- EMP 테이블 생성
-- 컬럼리스트: EMP_ID 고정형(4) EMP_NAME 가변형(10), HIRE_DATE 날짜/시간, SALARY 정수5
	CREATE TABLE EMP (
		EMP_ID	CHAR(4),
        EMP_NAME	VARCHAR(10),
        HIRE_DATE DATETIME,
        SALARY CHAR(5)
    );
    
    SHOW TABLES;
    DESC EMP;
    
    DESC DEPARTMENT;
    -- DEPT 테이블 생성 : DEPT_ID 고정형 (3), DEPT_NAME 가변형(10), LOC가변형(20)
	CREATE TABLE DEPT(
		DEPT_ID		CHAR(3),
        DEPT_NAME	VARCHAR(10),
        LOC			VARCHAR(20)
    );
    DESC DEPT;
    
    -- EMP, DEPT 테이ㅡㄹ의 모든 데이터 조회
    SELECT* FROM EMP;
    SELECT * FROM DEPT;
    
-- 2. 테이블 생성(복제) : CREATE TABLE ~ AS ~SELECT
-- 물리적으로 메모리 생성(과도하게 사용할 경우 CPU에 부담이 큼. 테스트 끝나면 삭제 권장)
-- 기본키, 참조키 등의 제약사항은 복제가 불가능, 복제 후 ALTER TABLE 명령으로 제약사항 추가 
/*
형식: CREAT TABLE [생성(복제)할 테이블 명]
	AS
    SELECT [컬럼리스트]
		FROM [테이블명]
        WHERE [조건절] 
*/

-- 정보시스템 부서의 사원들만 별도로테이블 복제
-- EMPLOYEE_SYS

	CREATE TABLE EMPLOYEE_SYS
    AS
    SELECT *
		FROM EMPLOYEE
        WHERE DEPT_ID = 'SYS';
	SHOW TABLES;
    
    SELECT * FROM EMPLOYEE_SYS;
--  emp_id		char(5)		NO
--  emp_name	varchar(4)	NO	
--  eng_name	varchar(20)	YES	
    
    DESC EMPLOYEE_SYS;
    DESC EMPLOYEE;
--  emp_id		char(5)		NO	PRI <<! KEY는 원본에만 있다는 걸 확인 가능 
--  emp_name	varchar(4)	NO	
--  eng_name	varchar(20)	YES	

-- 퇴직한 사원들을 복제하여 EMPLOYEE_RERIRE 테이블로 관리
    CREATE TABLE EMPLOYEE_RERIRE
    AS
    SELECT * 
		FROM EMPLOYEE
        WHERE RETIRE_DATE IS NOT NULL;
	
    SHOW TABLES;
    
-- 2015,2017년 입사자들을 복제하여 별도로 관리 
-- 테이블명: EMPLOYEE_2015_2017 
    CREATE TABLE EMPLOYEE_2015_2017 
    AS
    SELECT * 
		FROM EMPLOYEE
        WHERE LEFT(HIRE_DATE, '4') IN('2015', '2017');
        
    SHOW TABLES;

/***************************************
	테이블 제거 : DROP TABLE
    형식 : DROP TABLE [제거할 테이블명]
    명령 즉시 메모리에서 바로 테이블 삭제하므로 주의
	!! 복구 불가능 !!
    터미널에서도 바로 삭제되고 있는 걸 확인 가능
    TIP) 터미널창 비우기 명령어 - SYSTEM CLS;
****************************************/
SHOW TABLES;
-- employee_2015_2017 테이블 제거

DROP TABLE employee_2015_2017;
SHOW TABLES;

-- employee_rerire 제거
DROP TABLE employee_rerire;
SHOW TABLES;

-- 
CREATE TABLE EMPLOYEE_WORKING
AS
SELECT * 
	FROM EMPLOYEE
	WHERE RETIRE_DATE IS NULL;
    
SHOW TABLES;
SELECT* FROM EMPLOYEE_WORKING;

SELECT 
	COUNT(*)
    FROM EMPLOYEE_WORKING;
    
/*******************************************************
	테이블 데이터 제거 : TRUNCATE TABLE
    형식 : TRUNCATE TABLE [제거할 데이터를 가진 테이블명]
    명령 즉시 메모리에서 바로 테이블 데이터를 삭제하므로 주의
	!! 복구 불가능 !!
*******************************************************/

SHOW TABLES;
SELECT* FROM EMPLOYEE_WORKING; -- 데이터 있는지 확인
TRUNCATE TABLE EMPLOYEE_WORKING; -- 제거할 데이터가 있는 테이블 선정 후 제거
SELECT* FROM EMPLOYEE_WORKING; -- 다 비어있는 걸 확인할 수 있음 

/*****************************************************************
	테이블 구조 변경 : ALTER TABLE
    형식 : ALTER TABLE [변경할 테이블명]
    1) 컬럼 추가 : ADD COLUMN [NEW 컬럼명 데이터타입(크기) 제약사항]
    2) 컬럼 변경 : MODIFY COLUMN [변경할 컬럼명 데이터타입(크기) 제약사항]
    3) 컬럼 삭제 : DROP COLUMN [삭제할 컬럼명]
    -- 데이터가 없는 경우 위 3가지를 원활히 진행할 수 있다. 
    -- 반대로 데이터가 있는 경우 제약사항 발생. 
    -- 특히 크기가 4개짜리를 2개로 변경한다고 할 때 불가능하다.
		데이터 베이스에서는 데이터 유실을 방지하고자 하기 때문에 줄이는 것이 불가능.
    -- 작은 크기를 크게 늘리는 것은 가능 
*****************************************************************/
SHOW TABLES;
SELECT * FROM EMPLOYEE_WORKING;
DESC EMPLOYEE_WORKING;
-- BONUS 컬럼을 추가, 데이터타입 정수형 4자리 
ALTER TABLE EMPLOYEE_WORKING
	ADD COLUMN BONUS INT(4);
DESC EMPLOYEE_WORKING;

-- EMPLOYEE_WORKING 테이블에 DNAME(부서명) 추가, 데이터타입 가변형 (10), 널값 허용
ALTER TABLE EMPLOYEE_WORKING
	ADD COLUMN DNAME VARCHAR(10);
DESC EMPLOYEE_WORKING;    

-- EMPLOYEE_WORKING 이메일 주소 컬럼 크기를 30으로 수정(MODIFY COLUMN)
ALTER TABLE EMPLOYEE_WORKING
	MODIFY COLUMN EMAIL VARCHAR(30);
DESC EMPLOYEE_WORKING;

-- EMPLOYEE_WORKING SALARY 컬럼을 실수타입(DOUBLE)로 수정
ALTER TABLE EMPLOYEE_WORKING
	MODIFY COLUMN SALARY DOUBLE;
DESC EMPLOYEE_WORKING;

-- EMPLOYEE_SYS 테이블의 이메일 주소 컬럼 크기를 가변형 10 크기로 수정
SELECT * FROM EMPLOYEE_SYS;
ALTER TABLE EMPLOYEE_SYS
	MODIFY COLUMN EMAIL VARCHAR(10); 
    -- 실행 불가능. 10을 넘는 데이터가 1건 있다고 출력된다. 유실 위험으로 에러 발생
DESC EMPLOYEE_SYS;
SELECT COUNT(*) FROM EMPLOYEE_SYS;

-- EMPLOYEE_WORKING 테이블의 BONUS 컬럼 삭제
ALTER TABLE EMPLOYEE_WORKING 
	DROP COLUMN BONUS;
DESC EMPLOYEE_WORKING;

-- EMPLOYEE_WORKING 테이블의 EMAIL, DNAME 컬럼 삭제
ALTER TABLE EMPLOYEE_WORKING 
	DROP COLUMN EMAIL, DNAME; -- 한 번에 하나만 삭제된다. 2개를 삭제하려니 오류 !

ALTER TABLE EMPLOYEE_WORKING 
	DROP COLUMN EMAIL;
    
ALTER TABLE EMPLOYEE_WORKING 
	DROP COLUMN DNAME;
    
-- EMPLOYEE_WORKING 테이블 제거
DROP TABLE EMPLOYEE_WORKING;
SHOW TABLES;

-- EMPLOYEE 테이블에서 HRD 부서에 속한 사원들의 사원아이디, 사원명, 입사일, 연봉, 보너스(연봉 10%)
-- 정보를 별칭을 사용하여 조회한 후 EMPLOYEE_HRD 이름으로 복제 
CREATE TABLE EMPLOYEE_HRD
AS
SELECT 
	EMP_ID 아이디,
	EMP_NAME 성명,
	HIRE_DATE 입사일,
	SALARY 연봉,
	FORMAT(SALARY*0.1, 0) 보너스
	FROM EMPLOYEE
	WHERE DEPT_ID = 'HRD';
SHOW TABLES;
SELECT * FROM EMPLOYEE_HRD;
DESC EMPLOYEE_HRD;
-- 별칭으로 조회 후 복제하면 별칭으로 복제되는 걸 확인 할 수 있다. 필드 역시 별칭으로 고정되어있음.  
/*****************************************************************
	DML : INSERT(C), SELECT(R), UPDATE(U), DELETE(D)
*****************************************************************/
-- 1. INSERT : 데이터 추가
-- 형식: INSERT INTO [테이블명](컬럼리스트)
-- 		VALUES(데이터리스트....);
-- 넣고자 하는 컬럼리스트와 데이터리스트는 1:1로 이어지게 값을 넣어줘야한다.
-- EMP_ID, SALARY 순서로 줬는데 1000, S001로 주면 아이디가 1000, 연봉이 S001이 된다.

SHOW TABLES;
DESC EMP;
SELECT * FROM EMP;
-- S001, 홍길동, 현재날짜, 1000데이터 추가
INSERT INTO EMP(EMP_ID, EMP_NAME,HIRE_DATE, SALARY)
			VALUES('S001','홍길동',CURDATE(), 1000);
SELECT * FROM EMP;

-- S002, 홍길순, 현재날짜(NOW OR SYSDATE), 2000데이터 추가
INSERT INTO EMP(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
			VALUES('S002','홍길순',SYSDATE(), 2000);
SELECT * FROM EMP;

-- S003, 김철수, 현재날짜(NOW OR SYSDATE), 3000데이터 추가
-- 컬럼리스트 생략시에는 생성시 컬럼의 순서대로 INSERT 실행됨 
INSERT INTO EMP
	VALUES ('S003', '김철수', NOW(), 3000);
    SELECT * FROM EMP;

-- S004, 이영희, 현재날짜(NOW OR SYSDATE), 연봉협상 전 데이터 추가
DESC EMP;
INSERT INTO EMP(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES ('S004', '이영희', NOW(), NULL);
SELECT * FROM EMP;


-- EMPLOYEE 테이블의 정보시스템 부서의 사원들 정보 중
-- 사원 아이디, 사원명, 입사일, 부서아이디, 연봉 보제하여 EMPLOYEE_SYS 테이블 생성
-- 2016년 이전에 입사한 사원들
DROP TABLE EMPLOYEE_SYS;
CREATE TABLE EMPLOYEE_SYS
AS
SELECT EMP_ID, EMP_NAME, HIRE_DATE, DEPT_ID, SALARY
FROM EMPLOYEE
WHERE DEPT_ID = 'SYS' AND LEFT(HIRE_DATE, 4) < 2016;

SELECT * FROM EMPLOYEE_SYS;
SELECT * FROM EMPLOYEE WHERE DEPT_ID = 'SYS';

-- 서브쿼리를 이용한 데이터 추가 
-- EMPLOYEE_SYS 테이블에 2016년 이후에 입사한 정보시스템 부서 사원 추가
INSERT INTO EMPLOYEE_SYS(EMP_ID, EMP_NAME, HIRE_DATE, DEPT_ID, SALARY)
SELECT EMP_ID, EMP_NAME, HIRE_DATE, DEPT_ID, SALARY
FROM EMPLOYEE
WHERE DEPT_ID='SYS' AND LEFT(HIRE_DATE, 4) >=2016;
SELECT * FROM EMPLOYEE_SYS;

-- DEPT 테이블 구조 확인 및 데이터 추가
SHOW TABLES;
DESC DEPT;
-- SYS 정보시스템 서울 
-- MKT 마케팅 뉴욕
-- HRD 인적자원관리 부산
-- ACC, 회계, 정해지지 않음
INSERT INTO DEPT(DEPT_ID, DEPT_NAME, LOC)
	VALUES ('SYS', '정보시스템', '서울'),('MKT','마케팅','뉴욕'),('HRD','인적자원관리','부산'),('ACC','회계',NULL);

SELECT * FROM DEPT;
INSERT INTO DEPT VALUES ('영업', NULL, 'SALES');
SELECT * FROM DEPT;

-- 에러발생!! ~ 컬럼리스트와 매칭 카운트가 다를 때. 
INSERT INTO DEPT(DEPT_NAME, LOC) VALUES ('영업', NULL, 'SALES');
-- 에러발생!! ~ 컬럼리스트의 크기 제한이 3글자인데 ID가 5글자!
INSERT INTO DEPT(DEPT_NAME, LOC, DEPT_ID) VALUES ('영업', NULL, 'SALES'); 
-- 정상
INSERT INTO DEPT(DEPT_NAME, LOC, DEPT_ID) VALUES ('영업', NULL, 'SAL'); 
SELECT * FROM DEPT;
DESC DEPT;

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	CONSTRAINT(제약사항) : 데이터 무결성의 원칙을 적용하기 위한 규칙 - 외우기
	- UNIQUE: 유니크(중복) 제약 사항
    - NOT NULL: NULL 값을 허용하지 않는 제약
	- PRIMARY KEY(기본키): UNIQUE + NOT NULL 제약을 지정
    - FOREIGN KEY(참조키): 타 테이블을 참조하기위한 키
    - DEFAULT: 디폴트로 저장되는 데이터 정의하는 제약
    
    - AUTO_INCREMENT : 자동번호 생성기 (오라클에서는 SEQUENCE)
    
    단독으로 사용할 수 없다. 
    
    사용 형식 
		- CREAT TABLE + 제약사항
        - ALTER TABLE + 제약사항
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
-- DB의 스키마 구조를 통해 각 테이블의 제약사항 확인
-- INFORMATION_SCHEMA.TABLE_CONSTRAINTS
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
		WHERE TABLE_NAME= 'EMPLOYEE';
DESC EMPLOYEE;
SHOW TABLES;
DESC EMP;

-- EMP_CONST 테이블 생성
-- 기본키 제약 : EMP_ID 
-- 유니크 제약 : EMP_NAME
-- NOT NULL 제약 : SALARY
CREATE TABLE EMP_CONST(
	EMP_ID	CHAR(4)	PRIMARY KEY,
    EMP_NAME	VARCHAR(10)	UNIQUE,
    HIRE_DATR	DATETIME,
    SALARY	INT	NOT NULL
);
SHOW TABLES;
DESC EMP_CONST;
SELECT * 
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME = 'EMP_CONST';
    
-- S001, 홍길동, 현재날짜, 1000 데이터 추가
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATR, SALARY)
VALUES ('S001','홍길동', NOW(), 1000);
SELECT * FROM EMP_CONST;

-- S001, 김철수, 현재날짜, 1000 데이터 추가
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATR, SALARY)
VALUES ('S001','김철수', NOW(), 1000);
-- Error Code: 1062. Duplicate entry 'S001' for key 'emp_const.PRIMARY' 발생 
-- PRIMARY키로 설정되어있는 컬럼은 입력폼에서 아이디 중복체크 기능을 통해확인함 !! 
SELECT * FROM EMP_CONST;

-- S002로 변경 후 실행
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATR, SALARY)
VALUES ('S002','김철수', NOW(), 1000);
SELECT * FROM EMP_CONST;

-- NULL값인 아이디 생성 
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATR, SALARY)
VALUES (NULL,'김철수', NOW(), 1000);
-- Error Code: 1048. Column 'EMP_ID' cannot be null 발생!!
-- SOLUTION : NULL 또는 중복된 값을 배제하여 진행
-- Error Code: 1062. Duplicate entry '김철수' for key 'emp_const.EMP_NAME'
-- SOLUTION : 이미 저장된 '김철수' 대신 유니크한 이름으로 진행
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATR, SALARY)
VALUES ('S003','이영희', NOW(), 1000);
SELECT * FROM EMP_CONST;

-- EMP_NAME 컬럼에 널 값을 추가
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATR, SALARY)
VALUES ('S004',NULL, NOW(), 1000);

-- EMP_NAME 컬럼에 널 값을 추가+
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATR, SALARY)
VALUES ('S005',NULL, NOW(), 1000);
SELECT * FROM EMP_CONST;
-- 유니크 제약일 때 NULL값은 중복처리 되지 않는다.(오라클에서는 제한된다는듯)

-- NULL금지인 SLASRY에 NULL값 넣어보기
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATR, SALARY)
VALUES ('S006','스미스', NOW(), NULL);
-- Error Code: 1048. Column 'SALARY' cannot be null 오류 발생. 
-- 오류코드나 오류사항을 확인하고 디버깅할 수있도록 한다. (프로젝트에서도 꼭 포함하기)
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATR, SALARY)
VALUES ('S006','스미스', NOW(), 3000);
SELECT * FROM EMP_CONST;

SELECT * 
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME = 'EMP_CONST';
    
-- EMP_CONST2 테이블 생성
-- EMP_ID : PRIMARY KEY
-- EMP_NAME : UNIQUE
SHOW TABLES;
CREATE TABLE EMP_CONST2(
	EMP_ID		CHAR(4),
    EMP_NAME	VARCHAR(10),
	CONSTRAINT PK_EMP_ID	PRIMARY KEY(EMP_ID),
    -- PRIMARY KEY 제약사항은 여러 칼럼에 줄 수 있지만! 지정 선언은 1번만 할 수있다. 중복일 경우 Error Code: 1068 발생
    CONSTRAINT UK_EMP_NAME	UNIQUE (EMP_NAME)
);
DESC EMP_CONST2;
SELECT *
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME= 'EMP_CONST2';
    
-- 제약사항 테스트를 위한 테이블생성 : CONST_TEST
-- UID 컬럼: CHAR 4 기본키 제약
-- NAME 컬럼: VARCHAR 10 NULL 비허용
-- AGE 컬럼: INT NULL 허용
-- ADDR 컬럼: VARCHAR 30 NULL 허용

show databases;  
use hrdb2019;
select database();
show tables;

CREATE TABLE CONST_TEST(
	UID CHAR(4)	PRIMARY  KEY,
    NAME VARCHAR(10) NOT NULL,
    AGE INT,
    ADDR VARCHAR(30)
);

SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
		WHERE TABLE_NAME= 'CONST_TEST';

DESC CONST_TEST;

-- DEPT_ID 컬럼추가 : CHAR(3) 디폴트 'HRD', NULL 비허용
ALTER TABLE CONST_TEST 
	ADD COLUMN DEPT_ID	CHAR(3) DEFAULT('HRD');
    
DESC CONST_TEST;
    
-- S001, 홍길동, 20, 서울시, SYS
INSERT INTO CONST_TEST(UID, NAME, AGE, ADDR, DEPT_ID)
	VALUES('S001','홍길동', 20, '서울시', 'SYS');
SELECT * FROM CONST_TEST;

-- S002, 김철수, 20, 서울시, HRD
INSERT INTO  CONST_TEST(UID, NAME, AGE, ADDR)
	VALUES('S002', '김철수', 20, '서울시');
SELECT * FROM CONST_TEST;

-- SALARY 컬럼: INT, 3000이상인 숫자만 등록할 수 있도록 CHECK
ALTER TABLE CONST_TEST
	ADD COLUMN SALARY	INT	CHECK(SALARY >= 3000);
DESC CONST_TEST;
SELECT * FROM CONST_TEST;

-- S003, 이영희, 30, 부산시, HRD, 연봉 3000
INSERT INTO CONST_TEST(UID, NAME, AGE, ADDR, SALARY)
	VALUES('S003', '이영희', 30, '부산시', 3000);
SELECT * FROM CONST_TEST;

-- Error Code: 3819. Check constraint 'const_test_chk_1' is violated.
-- 3000이상만 입력할 수으니 체크 오류가뜬다!
INSERT INTO CONST_TEST(UID, NAME, AGE, ADDR, SALARY)
	VALUES('S003', '이영희', 30, '부산시', 2000);

-- S004, 이영희, 30, 부산시, HRD, 연봉 4000
INSERT INTO CONST_TEST(UID, NAME, AGE, ADDR, SALARY)
	VALUES('S004', '이영희', 30, '부산시', 4000);
SELECT * FROM CONST_TEST;
    
-- 상품 테이블 생성 : PRODUCT_TEST
-- 컬럼 : PID INT 기본키 설정PTIMARY KEY, PNAME VARCHAR(30), NULL 비허용, PRICE INT NULL허용 
-- 		COMPANY VARCHAR 20 NULL 허용 
-- 		AUTO_INCREMENT를 기본키에 사용하기 

CREATE TABLE PRODUCT_TEST (
	PID 	INT 	PRIMARY KEY		AUTO_INCREMENT,
    PNAME 	VARCHAR(30)	NOT NULL,
    PRICE INT,
    COMPANY VARCHAR(20)
    );
SHOW TABLES;
DESC PRODUCT_TEST;
-- 키보드, 100, 삼성
INSERT INTO PRODUCT_TEST(PNAME, PRICE, COMPANY)
	VALUES('키보드',100,'삼성');
INSERT INTO PRODUCT_TEST(PNAME, PRICE, COMPANY)
	VALUES('키보드',200,'삼성');
INSERT INTO PRODUCT_TEST(PNAME, PRICE, COMPANY)
	VALUES('모니터',1200,'엘지');
-- PID가 자동으로 생성되는 걸 볼 수있다.
SELECT * FROM PRODUCT_TEST;

/*****************************************************************
	DML : INSERT(C), SELECT(R), UPDATE(U), DELETE(D)
*****************************************************************/
-- 2. UPDATE : 데이터 수정
/*
 형식: UPDATE [테이블명] 
		SET[컬럼명='업데이트 데이터'... ... ]
		WHERE [조건절];
        *WHERE가 들어가지 않으면 모든 테이블에 반영되니 주의!!!!*
*/
SELECT * FROM CONST_TEST;

-- 홍길동 연봉추가 (업데이트) : NULL - > 3500
UPDATE CONST_TEST
	SET SALARY = 3500
    WHERE UID = 'S001'; -- 조건을 설정하지 않으면 모두 바뀌니 주의! 
SELECT * FROM CONST_TEST;

-- 김철수 연봉 5000으로 업데이트
UPDATE CONST_TEST
	SET SALARY = 5000
    WHERE UID = 'S002';
    
SHOW TABLES;
-- EMPLOYEE 테이블을 복제하여 CP_EMPLOYEE 테이블을 생성
-- EMP_ID 컬럼에 기본키 제약 추가
	CREATE TABLE CP_EMPLOYEE
    AS
    SELECT *
		FROM EMPLOYEE;
SELECT * FROM CP_EMPLOYEE;
DESC CP_EMPLOYEE;
DESC EMPLOYEE;
-- KEY값(제약사항)은 복제되지 않았다는 걸 알 수 있음. 복제한 값엔 따로 주어야 함
ALTER TABLE CP_EMPLOYEE
	ADD CONSTRAINT PK_EMP_ID PRIMARY KEY(EMP_ID);
    -- PK는 PRIMARY KEY 단축키.. 임의 지정이기 때문에 규칙이 있다면 따르면 됨. 
    -- 제약사항 이름이 지정되는 것.
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
		WHERE TABLE_NAME= 'CP_EMPLOYEE';
        
/***************************************************
-- PHONE, EMAIL 컬럼에 UNIQUE 제약추가
***************************************************/
ALTER TABLE CP_EMPLOYEE
	ADD CONSTRAINT UK_PHONE UNIQUE(PHONE);
    
ALTER TABLE CP_EMPLOYEE
	ADD CONSTRAINT UK_EMAIL UNIQUE(EMAIL);
    
-- CP_EMPLOYEE 테이블의 PHONE에 추가된 제약사항 삭제
DESC EMPLOYEE; -- 일단 있는지 확인
-- CONSTRAINT_NAME을 알아야 삭제할 수 있기 때문에 사전 조회를 통해 확인한다.
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
		WHERE TABLE_NAME= 'CP_EMPLOYEE';
-- ADD로 주었으니 DROP으로 삭제!
-- PHONE 자체를 삭제하는 것이 아닌 제약사항을 지우는 것이므로 컬럼이름 필수 확인
ALTER TABLE CP_EMPLOYEE
	DROP CONSTRAINT UK_PHONE;
    
SELECT * FROM  CP_EMPLOYEE;
-- 부서 아이디가 SYS인 부서 아이디를 --> '정보'로 변환
UPDATE CP_EMPLOYEE
	SET DEPT_ID = '정보'
    WHERE DEPT_ID = 'SYS';
    
-- 2016년도 입사한 사원들의 입사일 --> 현재날짜로 수정
UPDATE CP_EMPLOYEE
	SET HIRE_DATE = LEFT(CURDATE(), 10)
    WHERE LEFT(HIRE_DATE, 4) = '2016';
    
/*
	Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. 
    업데이트 방지 모드로 설정되어 있음.... SAFE UPDATE MODE 설정 변경 작업이 필요하다. 
*/    
-- 업데이트 방지 모드를 변경하고 부서 아이디가 SYS인 부서 아이디를 --> '정보'로 변환
SET SQL_SAFE_UPDATES = 0; -- 해제: 0, 설정: 1
UPDATE CP_EMPLOYEE
	SET DEPT_ID = '정보'
    WHERE DEPT_ID = 'SYS';
    
-- 업데이트 방지 모드를 변경하고 2016년도 입사한 사원들의 입사일 --> 현재날짜로 수정
SET SQL_SAFE_UPDATES = 0; 
UPDATE CP_EMPLOYEE
	SET HIRE_DATE = CURDATE()
    -- DATE 타입이기 때문에 LEFT(CURDATE(), 10) 이렇게 주지 않아도 10자리만 들어간다.. (시분초 자동 생략) NOW, SYSDATE로 들어가도 마찬가지.
    WHERE LEFT(HIRE_DATE, 4) = '2016';
    
    SELECT COUNT(*) 
		FROM  CP_EMPLOYEE
        WHERE LEFT(HIRE_DATE, 4) = '2025';
        
-- 강우동 사원의 영어이름 'KANG', 퇴사일을 현재 날짜로, 부서는 SYS로 수정
SELECT * FROM  CP_EMPLOYEE WHERE EMP_NAME = '강우동';
-- 일단 수정 전 정보 확인

UPDATE CP_EMPLOYEE
SET 
	ENG_NAME = 'KANG', 
    RETIRE_DATE = NOW(), 
    DEPT_ID='SYS'
WHERE EMP_NAME = '강우동';

SELECT * FROM  CP_EMPLOYEE WHERE EMP_NAME = '강우동';
-- 수정 후 정보 확인!

-- 트랙잭션 처리방식이 auto commit이 아닌 경우
-- 작업완료 : commit, 작업취소 : rollback

COMMIT; 

/*****************************************************************
	DML : INSERT(C), SELECT(R), UPDATE(U), DELETE(D)
*****************************************************************/
-- 3. DELETE : 데이터 삭제
/*
 
 형식: 	DELETE FROM [테이블명] 
		WHERE [조건절];
        *트랙잭션 관리법에 따라 삭제된 데이터를 복원할 수 있음. AUTO COMMIT 상태에서는 불가능*
*/

COMMIT;
-- 여기서부터 트랙잭션이 시작된다는 뜻 / 현재까지 진행한 모든 작업을 DB에 반영한다. 

SELECT * FROM CP_EMPLOYEE;
-- 김삼순사원,s0004  삭제
DELETE FROM CP_EMPLOYEE WHERE EMP_ID= 'S0004';
SELECT * FROM CP_EMPLOYEE WHERE EMP_ID= 'S0004';

ROLLBACK;
-- 임시저장소에서만 삭제된 정보(커밋하기 전에 삭제된 데이터)를 복구한다.
/****!!프로그램 개발을 통해 실시간 접속시에는 AUTO COMMIT 실행됨!!****/
SELECT * FROM CP_EMPLOYEE WHERE EMP_ID= 'S0004';


-- 연봉이 7000이상인 모든 사원 삭제
    SELECT COUNT(*) 
		FROM  CP_EMPLOYEE
        WHERE SALARY >= 7000;
DELETE FROM CP_EMPLOYEE 
	WHERE SALARY >= 7000;

-- CP_EMPLOYEE 테이블에서 정보시스템 부서 직원들 모두 삭제
SET SQL_SAFE_UPDATES = 0; 
SELECT * FROM CP_EMPLOYEE;
SELECT COUNT(*) 
	FROM CP_EMPLOYEE
	WHERE DEPT_ID = '정보';
DELETE FROM CP_EMPLOYEE WHERE DEPT_ID = '정보';


-- CP_EMPLOYEE 테이블에서 2017년 이후 입사자들을 모두 삭제(터미널로 삭제해보기)
/*
	    mysql> SELECT COUNT(*)
    -> FROM CP_EMPLOYEE
    -> WHERE LEFT(HIRE_DATE, 4) >= '2017';
		+----------+
		| COUNT(*) |
		+----------+
		|        7 |
		+----------+
		1 row in set (0.00 sec)
        조건에 충족하는 값이 7개 있는 걸 확인 가능 !
        *****************************************
		DELETE FROM CP_EMPLOYEE
		-> WHERE LEFT(HIRE_DATE, 4) >= '2017';
		Query OK, 7 rows affected (0.05 sec)
    
    워크벤치로만 했을 때 알 수 없던 정보들을 터미널로 볼 수 있다.
    워크벤치로 작업해도 실제 실행은 터미널에서 진행되는 것인데, CRUD를 실행하게 되면 결과가 숫자로 도출되는 걸 알 수 있다. 
    이 숫자값으로 쿼리 실행 결과를 체크할 수 있어야 함.
    
    mysql> SELECT COUNT(*)
    -> FROM CP_EMPLOYEE
    -> WHERE LEFT(HIRE_DATE, 4) >= '2017';
		+----------+
		| COUNT(*) |
		+----------+
		|        0 |
		+----------+
		1 row in set (0.00 sec)
*/

SHOW TABLES;
DROP TABLE CONST_TEST;
DROP TABLE DEPT;
DROP TABLE EMP;
DROP TABLE EMP_CONST;
DROP TABLE EMP_CONST2;
DROP TABLE EMPLOYEE_HRD;
DROP TABLE EMPLOYEE_SYS;
DROP TABLE PRODUCT_TEST;