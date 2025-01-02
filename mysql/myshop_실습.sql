show databases;
use myshop2019;
select database();
show tables;

/*
	실습 데이터베이스 연결 : myshop2019
	실습 내용 - 기본적인 데이터 조회 
*/
-- Q01) customer 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
SELECT * FROM CUSTOMER;
-- Q02) employee 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
SELECT * FROM EMPLOYEE;
-- Q03) product 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
SELECT * FROM PRODUCT;
-- Q04) order_header 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
SELECT * FROM ORDER_HEADER;
-- Q05) order_detail 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
SELECT * FROM ORDER_DETAIL;
-- Q06) 모든 고객의 아이디, 이름, 지역, 성별, 이메일, 전화번호를 조회하세요.
SELECT CUSTOMER_ID, CUSTOMER_NAME, CITY, GENDER, EMAIL, PHONE FROM CUSTOMER; 
-- Q07) 모든 직원의 이름, 사원번호, 성별, 입사일, 전화번호를 조회하세요.
SELECT EMPLOYEE_NAME, EMPLOYEE_ID, GENDER, HIRE_DATE, PHONE FROM EMPLOYEE;
-- Q08) 이름이 '홍길동'인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, POINT FROM CUSTOMER;
-- Q09) 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, POINT FROM CUSTOMER WHERE GENDER = 'F';
-- Q10) '울산' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, POINT FROM CUSTOMER WHERE CITY= '울산';
-- Q11) 포인트가 500,000 이상인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, POINT FROM CUSTOMER WHERE POINT >= 500000;
-- Q12) 이름에 공백이 들어간 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT  CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, POINT FROM CUSTOMER WHERE CUSTOMER_NAME = '';
SELECT  CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, POINT FROM CUSTOMER WHERE CUSTOMER_NAME = '% %';
-- Q13) 전화번호가 010으로 시작하지 않는 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, POINT 
	FROM CUSTOMER
	WHERE LEFT(PHONE, 3) > 010;
-- Q14) 포인트가 500,000 이상 '서울' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, FORMAT(POINT, 0) POINT
	FROM CUSTOMER
    WHERE CITY='서울' AND POINT >500000;
-- Q15) 포인트가 500,000 이상인 '서울' 이외 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, FORMAT(POINT, 0) POINT
	FROM CUSTOMER
    WHERE CITY NOT IN('서울') 
    AND POINT >500000;
-- Q16) 포인트가 400,000 이상인 '서울' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, FORMAT(POINT, 0) POINT
	FROM CUSTOMER
    WHERE CITY = '서울' AND GENDER='M' AND POINT >500000;
-- Q17) '강릉' 또는 '원주' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, FORMAT(POINT, 0) POINT
	FROM CUSTOMER
    WHERE CITY='강릉' OR CITY ='원주';
-- Q18) '서울' 또는 '부산' 또는 '제주' 또는 '인천' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, FORMAT(POINT, 0) POINT
	FROM CUSTOMER
    WHERE CITY='서울' OR CITY ='부산' OR CITY = '제주' OR CITY= '인천';
-- Q19) 포인트가 400,000 이상, 500,000 이하인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, FORMAT(POINT, 0) POINT
	FROM CUSTOMER
    WHERE POINT BETWEEN 400000 AND 500000;
-- Q20) 1990년에 출생한 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, BIRTH_DATE,FORMAT(POINT, 0) POINT
	FROM CUSTOMER
    WHERE LEFT(BIRTH_DATE, 4) ='1990';
-- Q21) 1990년에 출생한 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, BIRTH_DATE,FORMAT(POINT, 0) POINT
	FROM CUSTOMER
    WHERE LEFT(BIRTH_DATE, 4) ='1990' AND GENDER = 'F';
-- Q22) 1990년에 출생한 '대구' 또는 '경주' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, CUSTOMER_ID, GENDER, CITY, PHONE, BIRTH_DATE,FORMAT(POINT, 0) POINT
	FROM CUSTOMER
    WHERE LEFT(BIRTH_DATE, 4) ='1990' AND CITY = '대구' AND GENDER = 'M';
-- Q23) 1990년에 출생한 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
--      단, 홍길동(gildong) 형태로 이름과 아이디를 묶어서 조회하세요.
SELECT 
	CONCAT(CUSTOMER_NAME, '(', CUSTOMER_ID, ')') AS '이름(아이디)', 
	GENDER, 
	CITY, 
	PHONE, 
	BIRTH_DATE,
	FORMAT(POINT, 0) 
	POINT
	FROM CUSTOMER
    WHERE LEFT(BIRTH_DATE, 4) ='1990'AND GENDER='M';
-- Q24) 근무중인 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
SELECT EMPLOYEE_ID, EMPLOYEE_NAME, GENDER, PHONE, HIRE_DATE
FROM EMPLOYEE;
-- Q25) 근무중인 남자 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
SELECT EMPLOYEE_ID, EMPLOYEE_NAME, GENDER, PHONE, HIRE_DATE, RETIRE_DATE
FROM EMPLOYEE
WHERE GENDER = 'M' AND RETIRE_DATE IS NULL;

-- Q26) 퇴사한 직원의 이름, 사원번호, 성별, 전화번호, 입사일, 퇴사일를 조회하세요.
SELECT EMPLOYEE_ID, EMPLOYEE_NAME, GENDER, PHONE, HIRE_DATE, RETIRE_DATE
FROM EMPLOYEE
WHERE RETIRE_DATE IS NOT NULL;

-- Q28) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 고객아이디를 기준으로 오름차순 정렬해서 조회하세요.
    SELECT CUSTOMER_ID, EMPLOYEE_ID, ORDER_DATE, CONCAT(FORMAT(SUB_TOTAL, 0), '원') SUB_TOTAL, DELIVERY_FEE, CONCAT(FORMAT(TOTAL_DUE, 0), '원') TOTAL_DUE
	FROM ORDER_HEADER
    WHERE ORDER_DATE BETWEEN '2019-01-01' AND '2019-01-07'
    ORDER BY CUSTOMER_ID DESC;
    
-- Q29) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 전체금액을 기준으로 내림차순 정렬해서 조회하세요.
	SELECT CUSTOMER_ID, EMPLOYEE_ID, ORDER_DATE, CONCAT(FORMAT(SUB_TOTAL, 0), '원') SUB_TOTAL, DELIVERY_FEE, CONCAT(FORMAT(TOTAL_DUE, 0), '원') TOTAL_DUE
    FROM ORDER_HEADER
    WHERE ORDER_DATE BETWEEN '2019-01-01' AND '2019-01-07'
    ORDER BY TOTAL_DUE DESC;

-- Q30) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 사원번호를 기준으로 오름차순, 같은 사원번호는 주문일시를 기준으로 내림차순 정렬해서 조회하세요.
	SELECT CUSTOMER_ID, EMPLOYEE_ID, ORDER_DATE, CONCAT(FORMAT(SUB_TOTAL, 0), '원') SUB_TOTAL, DELIVERY_FEE, CONCAT(FORMAT(TOTAL_DUE, 0), '원') TOTAL_DUE
    FROM ORDER_HEADER
    WHERE ORDER_DATE BETWEEN '2019-01-01' AND '2019-01-07'
    ORDER BY EMPLOYEE_ID DESC;

/**
	그룹함수
**/
use myshop2019;
select database();
show tables;
/** customer 테이블 사용 **/
-- Q01) 고객의 포인트 합을 조회하세요.
SELECT FORMAT(SUM(POINT), 0) 포인트총합
	FROM CUSTOMER;
-- Q02) '서울' 지역 고객의 포인트 합을 조회하세요.
SELECT
	IF(GROUPING(CITY), '도시별합계', IFNULL(CITY, '-')) 포인트총합,
    FORMAT(SUM(IFNULL(POINT, 0)), 0)'총 포인트'
	FROM CUSTOMER
    GROUP BY CITY WITH ROLLUP ;
-- Q03) '서울' 지역 고객의 수를 조회하세요.
SELECT 
	COUNT(*)
	FROM CUSTOMER
    WHERE CITY = '서울';
-- Q04) '서울' 지역 고객의 포인트 합과 평균을 조회하세요.
     SELECT 
     FORMAT(SUM(IFNULL(POINT,0)),0) 총합,
     FORMAT(AVG(IFNULL(POINT,0)),0) 평균
     FROM CUSTOMER
     WHERE CITY='서울';
-- Q05) '서울' 지역 고객의 포인트 합, 평균, 최댓값, 최솟값을 조회하세요.
	SELECT 
	FORMAT(SUM(IFNULL(POINT, 0)),0) 포인트총계,
    FORMAT(AVG(IFNULL(POINT, 0)),0) 포인트평균,
    FORMAT(MAX(IFNULL(POINT, 0)),0) 최고포인트,
    FORMAT(MIN(IFNULL(POINT, 0)),0) 최저포인트
    FROM CUSTOMER
    WHERE CITY = '서울';

-- Q06) 남녀별 고객의 수를 조회하세요.
	SELECT GENDER, COUNT(*) '총 고객 수'
    FROM CUSTOMER
    GROUP BY GENDER;
-- Q07) 지역별 고객의 수를 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
	SELECT CITY, COUNT(*)
    FROM CUSTOMER
    GROUP BY CITY
    ORDER BY CITY ASC;
 
-- Q08) 지역별 고객의 수를 조회하세요.
--      단, 고객의 수가 10명 이상인 행만 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
   SELECT CITY, COUNT(*) 고객수
   FROM CUSTOMER
   GROUP BY CITY
   HAVING 고객수>= 10
   ORDER BY CITY ASC;
   
    
-- Q09) 남녀별 포인트 합을 조회하세요.
    SELECT GENDER, FORMAT(SUM(IFNULL(POINT, 0)),0) 포인트총계
    FROM CUSTOMER
    GROUP BY GENDER;
-- Q10) 지역별 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
    SELECT CITY, FORMAT(SUM(IFNULL(POINT, 0)),0) 포인트총계
    FROM CUSTOMER
    GROUP BY CITY
    ORDER BY CITY ASC;
-- Q11) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합이 1,000,000 이상인 행만 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
	SELECT CITY, FORMAT(SUM(IFNULL(POINT,0)),0) 포인트총계
    FROM CUSTOMER
    GROUP BY CITY
    HAVING 포인트총계> 100
    ORDER BY 포인트총계 DESC;
      
-- Q12) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
   SELECT CITY, SUM(IFNULL(POINT,0)) 포인트 
   FROM CUSTOMER
   GROUP BY CITY
   ORDER BY 포인트 DESC;

-- Q13) 지역별 고객의 수, 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
	SELECT  CITY, COUNT(*) 고객수, SUM(IFNULL(POINT,0)) 포인트   
        FROM CUSTOMER
        GROUP BY CITY
        ORDER BY CITY asc;

-- Q14) 지역별 포인트 합, 포인트 평균을 조회하세요.
--      단, 포인트가 NULL이 아닌 고객을 대상으로 하며, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
	SELECT 
		CITY 지역, 
        SUM(POINT) 합포인트,
        AVG(POINT) 평포인트
        FROM CUSTOMER
        WHERE POINT IS NOT NULL
        GROUP BY CITY
        ORDER BY 지역 ASC;

-- Q15) '서울', '부산', '대구' 지역 고객의 지역별, 남녀별 포인트 합과 평균을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순, 같은 지역은 성별을 기준으로 오름차순 정렬해서 조회하세요.
	SELECT 
		GENDER,
        FORMAT(SUM(IFNULL(POINT, 0)),0) 합포인트
        FROM CUSTOMER
        WHERE CITY = '서울' AND '부산' AND '대구'
        GROUP BY GENDER        
        ;

/** order_header 테이블 사용 **/
    show databases;
	use myshop2019;
	select database();
	show tables;
    SELECT * FROM order_header;
-- Q16) 2019년 1월 주문에 대하여 고객아이디별 전체금액 합을 조회하세요.
SELECT 
	CUSTOMER_ID, FORMAT(SUM(TOTAL_DUE),0) '2019-01 구매 총액'
    FROM ORDER_HEADER
    WHERE LEFT(ORDER_DATE, 7) = '2019-01'
    GROUP BY CUSTOMER_ID;
    

-- Q17) 주문연도별 전체금액 합계를 조회하세요.
	SELECT 
		LEFT(ORDER_DATE,4), 
        FORMAT(SUM(TOTAL_DUE),0) 총액
        FROM ORDER_HEADER
        GROUP BY LEFT(ORDER_DATE,4);

-- Q18) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합을 조회하세요.
	SELECT 
		LEFT(ORDER_DATE,7) 주문월, 
        FORMAT(SUM(TOTAL_DUE),0) 총액,
        FORMAT(AVG(TOTAL_DUE),0) 평균액
        FROM ORDER_HEADER
        WHERE LEFT(ORDER_DATE, '7') IN('2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06')
        GROUP BY LEFT(ORDER_DATE,7);
-- Q19) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합과 평균을 조회하세요.
	SELECT 
		LEFT(ORDER_DATE,4) 주문연도,
		LEFT(ORDER_DATE,7) 주문월, 
        FORMAT(SUM(TOTAL_DUE),0) 총액,
        FORMAT(AVG(TOTAL_DUE),0) 평균액
        FROM ORDER_HEADER
        WHERE LEFT(ORDER_DATE, '7') IN('2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06')
        GROUP BY LEFT(ORDER_DATE,7);
-- Q20) 주문연도별, 주문월별 전체금액 합과 평균을 조회하고, rollup 함수를 이용하여 소계와 총계를 출력해주세요.


/**
	테이블 조인
*/
-- Q01) 전체금액이 8,500,000 이상인 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 전체금액을 조회하세요.
-- Q02) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름도 같이 조회되게 수정하세요.
-- Q03) Q01 쿼리를 복사해 붙여 넣은 후 직원이름도 같이 조회되게 수정하세요.
-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.
-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.
-- Q06) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 '남자' 고객만 조회되게 수정하세요.
-- Q07) 주문수량이 30개 이상인 주문의 주문번호, 상품코드, 주문수량, 단가, 지불금액을 조회하세요.
-- Q08) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 상품이름도 같이 조회되도록 수정하세요.
-- Q09) 상품코드, 상품이름, 소분류아이디를 조회하세요.
-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 소분류이름, 대분류아이디가 조회되게 수정하세요.
-- Q11) 다정한 사원이 2019년에 주문한 상품명을 모두 출력해주세요.
-- Q12) 청소기를 구입한 고객아이디, 사원번호, 주문번호, 주문일시를 조회하세요.
    

/**
	서브쿼리
*/
-- Q13) 'mtkim', 'odoh', 'soyoukim', 'winterkim' 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.    
-- Q14) '전주' 지역 고객의 아이디를 조회하세요.    
-- Q15) 위 두 쿼리문을 조합해서 하위 쿼리를 사용해 '전주' 지역 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
-- Q16) 고객의 포인트 최댓값을 조회하세요.
-- Q17) 하위 쿼리를 사용해 가장 포인트가 많은 고객의 이름, 아이디, 등록일, 포인트를 조회하세요.
-- Q18) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하세요.
-- Q19) 하위 쿼리를 사용해 홍길동(gdhong) 고객과 같은 지역의 고객 이름, 아이디, 지역, 등록일, 포인트를 조회하세요.
--      단, 고객 이름을 기준으로 오름차순 정렬해서 조회하세요.
-- Q20) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하고, 행번호를 추가하여 출력하세요.

    








