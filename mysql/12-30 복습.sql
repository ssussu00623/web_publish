  -- 사원아이디, 사원명, 입사일, 연봉을 조회
  -- 사원아이디 기준 오름차순 정렬 

SELECT *
	FROM EMPLOYEE
    ORDER BY EMP_ID DESC;
    
-- 사원아이디 기준 오름차순, 입사일 기준 내림차순
SELECT *
	FROM EMPLOYEE
    ORDER BY EMP_ID DESC, HIRE_DATE ASC;

    
-- 급여를 기준으로 오름차순 정렬 후 조회
SELECT *
	FROM EMPLOYEE
    ORDER BY SALARY DESC; 
    
-- ENG_NAME이 정해지지 않은 사원들은 최근 입사한 순서대로 조회 
SELECT *
	FROM EMPLOYEE
    WHERE ENG_NAME IS NULL
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
    WHERE SALARY >= 5000;
    
-- 입사일이 '2016년 1월 1일' 이전에 입사한 사원들 조회
-- DATE 타입은 표현은 문자처럼(내가 명령할 때는 STRING. 인식은 NUM)
-- 처리 방식은 숫자처럼! 꼭 기억하기
SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE <= '2016-01-01';

-- 입사일이 2015년 1월 1일 이후이고, 급여가 6000이상인 사원들을조회
-- AND (~이고) : 두 개의 조건이 모두 만족한 데이터만 조회
SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE <= '2015-01-01' AND SALARY >= 6000;

    
-- 입사일이 2015년 1월 1일 이후이거나, 급여가 6000이상인 사원들을조회
-- OR (~또는) : 두 개의 조건 중 하나만 만족해도 데이터 조회
SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE >= '2015-01-01' OR SALARY >= 6000;
    
-- 입사일이 2015년 1월 1일 부터 2017년 12월 31일사이에입사한 사원들을모두 조회 
-- 특정한 구간이 필요한 경우 컬럼이 하나일 때는 오류로 나타난다. 
SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE >= '2015-01-01' AND HIRE_DATE <='2017-12-31';
    
-- 연봉 구간이 5000이상 7000미만인 사원들을 모두 조회
SELECT *
	FROM EMPLOYEE
    WHERE SALARY >=5000 AND SALARY < 7000;
    
/*
	BETWEEN ~ AND : 특정 구간 조회시 사용
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
            WHERE 컬럼명 BETWEEN [시작구간] AND [종료구간];
*/
-- 2016년 입사자들을 조회 (2016-01-01~2016-12-31) 
SELECT *
	FROM EMPLOYEE 
    WHERE HIRE_DATE BETWEEN '2016-01-01' AND '2016-12-31';
    
-- 사원 아이디가 'S0001','S0010','S0020'인 사원의 모든 정보를 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_ID ='S0001' OR EMP_ID ='S0010' OR EMP_ID ='S0020';
    
-- 부서 아이디가 MKT, GEN, HRD인 부서에 속한 모든 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE DEPT_ID = 'MKT' OR DEPT_ID = 'GEN' OR DEPT_ID = 'HRD';
    
/*
	IN 연산자 : 한 컬럼에 추가되는 QR 연산식을 대체하는 IN 연산자
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
            WHERE 컬럼명 IN(조건1, 조건2, 조건3 ...);
*/
-- 사원 아이디가 'S0001','S0010','S0020'인 사원의 모든 정보를 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_ID IN('S0001', 'S0010','S0020');
    
-- 부서 아이디가 MKT, GEN, HRD인 부서에 속한 모든 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE DEPT_Id IN ('MKT', 'GEN', 'HRD');
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
WHERE ENG_NAME LIKE 'F%';

-- '한'씨 성을 가진 모든 사원들을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_NAME  LIKE '한%';
	
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
WHERE EMP_NAME LIKE '%삼%';
/***************************************************
	내장함수(Built-in) : 숫자, 문자, 날짜 함수
    - 함수 테스트를 위한 테이블 DUAL
    - SELECT [함수 실행] FROM DUAL;
***************************************************/
-- 1. 숫자 함수: abs(), rand(), truc()...
--  (1) ABS 함수 : 절대값 표현 함수 
SELECT 100, -100,  ABS(100)
FROM DUAL;
--  (2) FLOOR함수 : 소수점을 버리는(삭제) 함수 
-- 		TRUNC(TRUNCATE) : 소수점을 삭제하는 함수 - TRUNCATE(데이터, 자릿수) // 기왕이면 이걸 외우는 걸 추천.
-- 		구버전에서는 TRUNC도 가능하지만 최신 버전은 TRUNCATE만 가능하다. 
SELECT 123.456,
FLOOR(123.456)
FROM DUAL;

-- (3) RAND 함수 : 임의의 수를 생성. 같은 곳 안에 있어도 호출되는 만큼의 임의의 수를 호출한다.
SELECT 
RAND()
FROM DUAL;

-- 정수 값만 출력하는 쿼리를 생성해보기 
SELECT 
FLOOR(RAND()),
TRUNCATE(RAND()*100,0) 
FROM DUAL; 


-- (4) MOD 함수 : 모둘러 연산을 실행하는 함수 -MOD(숫자데이터, 나누는 숫자)
-- 값을 나누고 나머지 값이 출력되기 때문에 짝수는 0, 홀수는 1이 출력된다.
SELECT 
MOD(100, 2) 짝수, MOD(101, 2)홀수
FROM DUAL;

-- 1~3자리의 정수를 생성하고, 생선한 정수를 2로 나누는 모듈러 함수를 실행하는 쿼리를 완성해주세요.
SELECT MOD(TRUNCATE(RAND()*1000, 0), 2) 함수 
FROM DUAL;

-- 사원 테이블에서 사원 아이디, 사원명, 부서아이디, 입사일, 연봉, 인센티브(연봉20%)를 조회
-- 인센티브의 소수점은 생략하라. 
-- 5000미만의 사원들 정보만 출력
SELECT 
	EMP_ID, 
    EMP_NAME, 
    DEPT_ID, 
    HIRE_DATE, 
    IFNULL(SALARY,0) SALARY, 
    IFNULL(TRUNCATE(SALARY*0.2, 0), 0) 인센티브
    FROM EMPLOYEE
    WHERE SALARY <5000;

    -- NULL을 0으로 바꿔주었다 해도 SELECT는 가장 마지막에 보여주는 값이기 때문에 
    -- NULL값을 따로 지정해야 기존에 NULL값이었던게 호출 됨
    
    
-- 2. 문자 함수: CONCAT(), SUBSTRING()...
--  (1). CONCAT (문자열, 문자열....) : 문자열 결합
SELECT 
CONCAT('어우', '하기싫어') AS 박명수
FROM DUAL;

    
-- 사원 테이블의 사원명과 영어이름을 결합하여 새로운 컬럼을 생성하고 컬럼명은 TEST_NAME으로 조회 예시)홍길동/HONG
-- 영어 이름이 정해지지 않은 사원은 빈문자열로 치환해서 실행
SELECT 
	EMP_NAME, ENG_NAME,
    CONCAT(EMP_NAME, '/', IFNULL(ENG_NAME, '')) AS TEST_NAME
	FROM EMPLOYEE;
    
-- 사원 테이블의 사원아이디와 1~5자리 사이의 임의의 정수를 결합하여사원 번호라는 새로운 컬럼을 생성하고 조회
-- 사원 아이디, 사원번호, 사원명, 입사일, 급여, 퇴사일 컬럼리스트를 조회
-- 현재 근무중인 사원은 현재 날짜를 출력하도록 진행
SELECT 
	EMP_ID, 
	CONCAT(EMP_ID, '_', TRUNCATE(RAND()*100000,0)) EMP_NUM,
	EMP_NAME,
    HIRE_DATE,
    SALARY,
    IFNULL(RETIRE_DATE, CURDATE()) RETIRE_DATE
    FROM EMPLOYEE;

-- (2) SUBSTRING(문자열, 위치, 추출자릿수) : 문자열 추출 함수


    
-- 사원 테이블에서 사원 아이디, 사원명, 입사년도, 입사월, 입사일, 급여를 조회
SELECT 
	EMP_ID, 
    EMP_NAME, 
    SUBSTRING(HIRE_DATE, 1,4) YY, 
    SUBSTRING(HIRE_DATE, 6, 2) MM, 
    SUBSTRING(HIRE_DATE, 9, 2) DD,
    SALARY
    FROM EMPLOYEE;


-- 2015년도 입사한 모든 사원들을 조회
SELECT *
FROM EMPLOYEE
WHERE SUBSTRING(HIRE_DATE, 1, 4) = '2015';

-- 2018년도 정보시스템 부서에 입사한 모든 사원들을 조회해보세요
SELECT *
FROM EMPLOYEE
WHERE SUBSTRING(HIRE_DATE, 1, 4) = 2018;

-- (3) LEFT(문자열, 추출숫자), RIGHR(문자열, 추출숫자) 


    
-- 2015년도에 입사한 모든 사원들을 조회
SELECT *
FROM EMPLOYEE
WHERE LEFT(HIRE_DATE, 4) = 2015;

    
-- 사원들의 폰번호 마지막 4자리를 조회
-- 사원명, 부서아이디, 입사년도, 폰번호(뒷 4자리)
SELECT 
	EMP_NAME, 
    EMP_ID, 
    RIGHT(PHONE, 4) PHONE_LAST
    FROM EMPLOYEE;

    
-- (4) UPPER(대문자), LOWER(소문자)



-- 사원들의영어 이름과 이메일 주소를 모두 대문자로 조회
SELECT 
	UPPER(ENG_NAME),
    UPPER(EMAIL)
    FROM EMPLOYEE;


    
-- (5) TRIM():공백 제거
--  하지만 문자열 사이의 공백은 제거하지 않음
SELECT 
TRIM(' SSSSSS D       ')
FROM DUAL;
        
-- (6) FORMAT(문자열, 소수점자리): 문자열의 포맷 수정
-- 숫자를 3자리씩 콤마로 구분하여 출력하는 포맷 생성
SELECT
FORMAT(RAND()*10000000000,0)
FROM DUAL;
        
-- 사원테이블의 사원 아이디, 사원명,입사일, 연봉을 조회
-- 연봉협상 전인 사원은 0으로 변환 후 조회
-- 연봉은 3자리씩 콤마로 구분하여 출력
SELECT 
	EMP_ID, 
    EMP_NAME,
    HIRE_DATE,
    IFNULL(CONCAT(FORMAT(SALARY, 0), '만원'),0) AS 연봉
    FROM EMPLOYEE;

-- 사원아이디, 사원명, 부서아이디, 입사일, 연봉, 보너스(연봉의 0.05%)컬럼들을 조회
-- 연봉과 보너스 컬럼은 3자리 콤마로 구분하여 출력 후 '만원' 표시
-- 보너스 칼럼은 소수점 1자리까지 출력
SELECT 
	EMP_ID, 
    EMP_NAME
    DEPT_ID,
    IFNULL(CONCAT(FORMAT(SALARY,0), '만원'), 0),
    IFNULL(CONCAT(FORMAT(SALARY *0.05, 1), '만원'),0) AS BONUS
    FROM EMPLOYEE;
