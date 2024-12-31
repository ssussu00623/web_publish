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