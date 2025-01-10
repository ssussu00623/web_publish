show databases;
use myshop2019;
select database();
show tables;

/*
	실습 데이터베이스 연결 : myshop2019
	실습 내용 - 기본적인 데이터 조회 
*/
-- Q01) customer 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q02) employee 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q03) product 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q04) order_header 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q05) order_detail 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q06) 모든 고객의 아이디, 이름, 지역, 성별, 이메일, 전화번호를 조회하세요.
-- Q07) 모든 직원의 이름, 사원번호, 성별, 입사일, 전화번호를 조회하세요.
-- Q08) 이름이 '홍길동'인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q09) 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q10) '울산' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.


-- Q11) 포인트가 500,000 이상인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q12) 이름에 공백이 들어간 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q13) 전화번호가 010으로 시작하지 않는 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q14) 포인트가 500,000 이상 '서울' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q15) 포인트가 500,000 이상인 '서울' 이외 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q16) 포인트가 400,000 이상인 '서울' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q17) '강릉' 또는 '원주' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q18) '서울' 또는 '부산' 또는 '제주' 또는 '인천' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q19) 포인트가 400,000 이상, 500,000 이하인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q20) 1990년에 출생한 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
-- Q21) 1990년에 출생한 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
-- Q22) 1990년에 출생한 '대구' 또는 '경주' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
-- Q23) 1990년에 출생한 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
--      단, 홍길동(gildong) 형태로 이름과 아이디를 묶어서 조회하세요.
-- Q24) 근무중인 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
-- Q25) 근무중인 남자 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
-- Q26) 퇴사한 직원의 이름, 사원번호, 성별, 전화번호, 입사일, 퇴사일를 조회하세요.

-- Q28) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 고객아이디를 기준으로 오름차순 정렬해서 조회하세요.
    
-- Q29) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 전체금액을 기준으로 내림차순 정렬해서 조회하세요.

-- Q30) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 사원번호를 기준으로 오름차순, 같은 사원번호는 주문일시를 기준으로 내림차순 정렬해서 조회하세요.

/**
	그룹함수
**/
/** customer 테이블 사용 **/
-- Q01) 고객의 포인트 합을 조회하세요.

-- Q02) '서울' 지역 고객의 포인트 합을 조회하세요.

-- Q03) '서울' 지역 고객의 수를 조회하세요.

-- Q04) '서울' 지역 고객의 포인트 합과 평균을 조회하세요.
     
-- Q05) '서울' 지역 고객의 포인트 합, 평균, 최댓값, 최솟값을 조회하세요.

-- Q06) 남녀별 고객의 수를 조회하세요.

-- Q07) 지역별 고객의 수를 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.

 
-- Q08) 지역별 고객의 수를 조회하세요.
--      단, 고객의 수가 10명 이상인 행만 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
   
    
-- Q09) 남녀별 포인트 합을 조회하세요.
    
-- Q10) 지역별 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
    
-- Q11) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합이 1,000,000 이상인 행만 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.

      
-- Q12) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
   

-- Q13) 지역별 고객의 수, 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.


-- Q14) 지역별 포인트 합, 포인트 평균을 조회하세요.
--      단, 포인트가 NULL이 아닌 고객을 대상으로 하며, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.

-- Q15) '서울', '부산', '대구' 지역 고객의 지역별, 남녀별 포인트 합과 평균을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순, 같은 지역은 성별을 기준으로 오름차순 정렬해서 조회하세요.


/** order_header 테이블 사용 **/
    
-- Q16) 2019년 1월 주문에 대하여 고객아이디별 전체금액 합을 조회하세요.


-- Q17) 주문연도별 전체금액 합계를 조회하세요.

-- Q18) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합을 조회하세요.

-- Q19) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합과 평균을 조회하세요.

-- Q20) 주문연도별, 주문월별 전체금액 합과 평균을 조회하고, rollup 함수를 이용하여 소계와 총계를 출력해주세요.


/**
	테이블 조인
*/
-- Q01) 전체금액이 8,500,000 이상인 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 전체금액을 조회하세요.
-- ORDER_HEADER 테이블 : ORDER_ID, CUSTOMER_ID, EMPLOYEE_ID, ORDER_DATE, TOTAL_DUE
SELECT COUNT(*) FROM ORDER_HEADER; -- 903
SELECT COUNT(*) FROM ORDER_HEADER WHERE TOTAL_DUE >=8500000; -- 7
SELECT ORDER_ID, 
		CUSTOMER_ID, 
		EMPLOYEE_ID, 
		ORDER_DATE, 
		TOTAL_DUE
FROM ORDER_HEADER
WHERE TOTAL_DUE >=8500000
ORDER BY TOTAL_DUE DESC;

-- Q02) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름도 같이 조회되게 수정하세요.
SELECT ORDER_ID, 
		OH.CUSTOMER_ID, 
        CUSTOMER_NAME,
		EMPLOYEE_ID, 
		ORDER_DATE, 
		TOTAL_DUE
FROM ORDER_HEADER OH, CUSTOMER C
WHERE OH.CUSTOMER_ID = C.CUSTOMER_ID
	AND TOTAL_DUE >=8500000
ORDER BY TOTAL_DUE DESC;
-- Q03) Q01 쿼리를 복사해 붙여 넣은 후 직원이름도 같이 조회되게 수정하세요.
SELECT ORDER_ID, 
		OH.CUSTOMER_ID, 
        CUSTOMER_NAME,
		OH.EMPLOYEE_ID, 
        E.EMPLOYEE_NAME,
		ORDER_DATE, 
		TOTAL_DUE
FROM ORDER_HEADER OH, CUSTOMER C, EMPLOYEE E
WHERE OH.CUSTOMER_ID = C.CUSTOMER_ID
	AND OH.EMPLOYEE_ID= E.EMPLOYEE_ID
	AND TOTAL_DUE >=8500000
ORDER BY TOTAL_DUE DESC;
-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.
SELECT ORDER_ID, 
		OH.CUSTOMER_ID, 
        CUSTOMER_NAME,
		OH.EMPLOYEE_ID, 
        E.EMPLOYEE_NAME,
		ORDER_DATE, 
		TOTAL_DUE
FROM ORDER_HEADER OH, CUSTOMER C, EMPLOYEE E
WHERE OH.CUSTOMER_ID = C.CUSTOMER_ID
	AND OH.EMPLOYEE_ID= E.EMPLOYEE_ID
	AND TOTAL_DUE >=8500000
ORDER BY TOTAL_DUE DESC;
-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.SELECT ORDER_ID, 
SELECT ORDER_ID, 
		OH.CUSTOMER_ID, 
        CUSTOMER_NAME,
		OH.EMPLOYEE_ID, 
        E.EMPLOYEE_NAME,
		ORDER_DATE, 
		TOTAL_DUE
FROM ORDER_HEADER OH, CUSTOMER C, EMPLOYEE E
WHERE OH.CUSTOMER_ID = C.CUSTOMER_ID
	AND OH.EMPLOYEE_ID= E.EMPLOYEE_ID
	AND TOTAL_DUE >=8500000
    AND CITY = '서울'
ORDER BY TOTAL_DUE DESC;

-- ANSI SQL VER
SELECT ORDER_ID, 
		OH.CUSTOMER_ID, 
        CUSTOMER_NAME,
		OH.EMPLOYEE_ID, 
        E.EMPLOYEE_NAME,
		ORDER_DATE, 
		TOTAL_DUE
FROM ORDER_HEADER OH INNER JOIN CUSTOMER C ON OH.CUSTOMER_ID = C.CUSTOMER_ID
					INNER JOIN EMPLOYEE E ON OH.EMPLOYEE_ID= E.EMPLOYEE_ID
	WHERE TOTAL_DUE >=8500000
    AND CITY = '서울'
ORDER BY TOTAL_DUE DESC;
-- Q06) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 '남자' 고객만 조회되게 수정하세요.
SELECT ORDER_ID, 
		OH.CUSTOMER_ID, 
        CUSTOMER_NAME,
        C.CITY,
        C.GENDER,
		OH.EMPLOYEE_ID, 
        E.EMPLOYEE_NAME,
		ORDER_DATE, 
		TOTAL_DUE
FROM ORDER_HEADER OH, CUSTOMER C, EMPLOYEE E
WHERE OH.CUSTOMER_ID = C.CUSTOMER_ID
	AND OH.EMPLOYEE_ID= E.EMPLOYEE_ID
	AND TOTAL_DUE >=8500000
    AND CITY = '서울'
    AND C.GENDER = 'M'
ORDER BY TOTAL_DUE DESC;
-- Q07) 주문수량이 30개 이상인 주문의 주문번호, 상품코드, 주문수량, 단가, 지불금액을 조회하세요.
-- 테이블 컬럼명 변경 (rename)
SELECT *
	FROM ORDER_DETAIL;
    ALTER TABLE ORDER_DETAIL
		RENAME COLUMN drder_detail_id TO order_detail_id;
-- ORACLE VER
DESC ORDER_DETAIL;
SELECT R.ORDER_ID, PRODUCT_ID, ORDER_QTY, UNIT_PRICE, LINE_TOTAL, TOTAL_DUE
	FROM ORDER_DETAIL R, ORDER_HEADER OH
    WHERE R.ORDER_ID  = OH.ORDER_ID;
-- ANSI SQL VER
SELECT R.ORDER_ID, PRODUCT_ID, ORDER_QTY, UNIT_PRICE, LINE_TOTAL, TOTAL_DUE
	FROM ORDER_DETAIL R INNER JOIN ORDER_HEADER OH
    ON R.ORDER_ID = OH.ORDER_ID;

-- Q08) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 상품이름도 같이 조회되도록 수정하세요.
-- ORACLE VER
SELECT  OD.ORDER_ID, 
		OD.PRODUCT_ID, 
        P.PRODUCT_NAME, 
        OD.ORDER_QTY, 
        OD.UNIT_PRICE, 
        OD.LINE_TOTAL, 
        OH.TOTAL_DUE 
FROM ORDER_DETAIL OD, ORDER_HEADER OH, PRODUCT P
    WHERE OD.ORDER_ID  = OH.ORDER_ID
		AND OD.PRODUCT_ID = P.PRODUCT_ID;
-- ANSI SQL VER
SELECT  OD.ORDER_ID, 
		OD.PRODUCT_ID, 
        P.PRODUCT_NAME, 
        OD.ORDER_QTY, 
        OD.UNIT_PRICE, 
        OD.LINE_TOTAL, 
        OH.TOTAL_DUE 
	FROM ORDER_DETAIL OD INNER JOIN ORDER_HEADER OH ON OD.ORDER_ID = OH.ORDER_ID
						INNER JOIN PRODUCT P ON OD.PRODUCT_ID = P.PRODUCT_ID;
                        
-- Q09) 상품코드, 상품이름, 소분류아이디를 조회하세요.
DESC PRODUCT;
SELECT PRODUCT_ID, 
		PRODUCT_NAME, 
		SUB_CATEGORY_ID 
FROM PRODUCT;
-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 소분류이름, 대분류아이디가 조회되게 수정하세요.
-- ORACLE VER
SELECT PRODUCT_ID, 
		PRODUCT_NAME, 
		P.SUB_CATEGORY_ID,
        SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID
FROM PRODUCT P, SUB_CATEGORY SC, CATEGORY CA
	WHERE P.SUB_CATEGORY_ID =SC.SUB_CATEGORY_ID;
-- ANSI SQL VER
SELECT PRODUCT_ID, 
		PRODUCT_NAME, 
		P.SUB_CATEGORY_ID,
        SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID
FROM PRODUCT P INNER JOIN  SUB_CATEGORY SC ON P.SUB_CATEGORY_ID =SC.SUB_CATEGORY_ID;

-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 대분류 이름을 추가하여 조회되게 수정하세요.
-- ORACLE VER
SELECT PRODUCT_ID, 
		PRODUCT_NAME, 
		P.SUB_CATEGORY_ID,
        SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID,
        C.CATEGORY_NAME
FROM PRODUCT P, SUB_CATEGORY SC, CATEGORY C
	WHERE P.SUB_CATEGORY_ID =SC.SUB_CATEGORY_ID
    AND SC.CATEGORY_ID= C.CATEGORY_ID;
-- ANSI SQL VER
SELECT PRODUCT_ID, 
		PRODUCT_NAME, 
		P.SUB_CATEGORY_ID,
        SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID,
        C.CATEGORY_NAME
FROM PRODUCT P INNER JOIN SUB_CATEGORY SC ON P.SUB_CATEGORY_ID =SC.SUB_CATEGORY_ID
			   INNER JOIN CATEGORY C ON SC.CATEGORY_ID= C.CATEGORY_ID;
               
-- 대분류, 소분류 별 상품 갯수, 지불 금액 합계, 지불금액 평균
-- 인라인 뷰
SELECT CATEGORY_NAME 대분류,
		SUB_CATEGORY_NAME 소분류,
        COUNT(PRODUCT_ID) 갯수,
        CONCAT(FORMAT(SUM(UNIT_PRICE),0),'원') UNIT_SUM,
        CONCAT(FORMAT(AVG(UNIT_PRICE),0),'원') UNIT_AVG,
        CONCAT(FORMAT(SUM(TOTAL_DUE),0),'원') TOTAL_SUM,
        CONCAT(FORMAT(AVG(TOTAL_DUE),0),'원') TOTAL_AVG
FROM 	(SELECT 
		DISTINCT P.PRODUCT_ID, 
		P.PRODUCT_NAME, 
		P.SUB_CATEGORY_ID,
        SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID,
        C.CATEGORY_NAME,
        OD.UNIT_PRICE,
        OH.TOTAL_DUE
FROM PRODUCT P, SUB_CATEGORY SC, CATEGORY C, ORDER_DETAIL OD, ORDER_HEADER OH
		WHERE P.SUB_CATEGORY_ID =SC.SUB_CATEGORY_ID
		AND SC.CATEGORY_ID= C.CATEGORY_ID
        AND P.PRODUCT_ID = OD.PRODUCT_ID
        AND OD.ORDER_ID = OH.ORDER_ID) T1
GROUP BY CATEGORY_NAME, SUB_CATEGORY_NAME
ORDER BY CATEGORY_NAME ASC;
               
               
               
SELECT PRODUCT_ID, 
		PRODUCT_NAME, 
		P.SUB_CATEGORY_ID,
        SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID,
        C.CATEGORY_NAME
FROM PRODUCT P INNER JOIN SUB_CATEGORY SC ON P.SUB_CATEGORY_ID =SC.SUB_CATEGORY_ID
			   INNER JOIN CATEGORY C ON SC.CATEGORY_ID= C.CATEGORY_ID;
SELECT DISTINCT PRODUCT_ID, UNIT_PRICE FROM ORDER_DETAIL;

-- Q11) 다정한 사원이 2019년에 주문한 상품명을 모두 출력해주세요.
-- EMPLOYEE, ORDER_HEADER, ORDER_DETAIL, PRODUCT
SELECT E.EMPLOYEE_NAME, 
		H.ORDER_DATE, 
		P.PRODUCT_NAME,
        H.ORDER_ID,
        D.ORDER_DETAIL_ID
FROM PRODUCT P, EMPLOYEE E, ORDER_HEADER H, ORDER_DETAIL D
	WHERE P.PRODUCT_ID = D.PRODUCT_ID
		AND H.ORDER_ID = D.ORDER_ID
        AND E.EMPLOYEE_ID = H.EMPLOYEE_ID
        AND E.EMPLOYEE_NAME = '다정한'
        AND LEFT(H.ORDER_DATE, 4) = '2019';
-- 2019년도 1월에 주문 아이디별 다정한 사원의 주문 건수 조회 
SELECT 	LEFT(ORDER_DATE, 7) 주문연월,
		ORDER_ID, 
		COUNT(ORDER_ID)
FROM (SELECT E.EMPLOYEE_NAME, 
			H.ORDER_DATE, 
			P.PRODUCT_NAME,
			H.ORDER_ID,
			D.ORDER_DETAIL_ID
		FROM PRODUCT P, EMPLOYEE E, ORDER_HEADER H, ORDER_DETAIL D
		WHERE P.PRODUCT_ID = D.PRODUCT_ID
			AND H.ORDER_ID = D.ORDER_ID
			AND E.EMPLOYEE_ID = H.EMPLOYEE_ID
			AND E.EMPLOYEE_NAME = '다정한'
			AND LEFT(H.ORDER_DATE, 7) = '2019-01') T1
GROUP BY ORDER_ID;

-- 주문년도별, 주문 월별 다정한 사원의 주문 건수 조회 
-- 2019년도 만 ! 
SELECT 	LEFT(ORDER_DATE, 4) YEAR,
		SUBSTRING(ORDER_DATE, 6, 2) MONTH,
		COUNT(ORDER_ID) COUNT
FROM (SELECT E.EMPLOYEE_NAME, 
			H.ORDER_DATE, 
			P.PRODUCT_NAME,
			H.ORDER_ID,
			D.ORDER_DETAIL_ID
		FROM PRODUCT P, EMPLOYEE E, ORDER_HEADER H, ORDER_DETAIL D
		WHERE P.PRODUCT_ID = D.PRODUCT_ID
			AND H.ORDER_ID = D.ORDER_ID
			AND E.EMPLOYEE_ID = H.EMPLOYEE_ID
			AND E.EMPLOYEE_NAME = '다정한') T1
GROUP BY LEFT(ORDER_DATE, 4), SUBSTRING(ORDER_DATE, 6, 2)
HAVING YEAR = '2019';
-- Q12) 청소기를 구입한 고객아이디, 사원번호, 주문번호, 주문일시를 조회하세요.
SELECT ROW_NUMBER() OVER(ORDER BY OH.ORDER_DATE DESC) AS NO,
		OH.CUSTOMER_ID,
		OH.EMPLOYEE_ID,
        OH.ORDER_ID,
        OH.ORDER_DATE,
        P.PRODUCT_NAME
	FROM PRODUCT P, EMPLOYEE E, CUSTOMER C, ORDER_HEADER OH, ORDER_DETAIL OD
	WHERE OD.PRODUCT_ID = P.PRODUCT_ID
		AND OD.ORDER_ID = OH.ORDER_ID
        AND OH.CUSTOMER_ID = C.CUSTOMER_ID
        AND OH.EMPLOYEE_ID = E.EMPLOYEE_ID
        AND P.PRODUCT_NAME LIKE '%청소기%';
-- ORACLE VER
-- ANSI SQL VER  

/**
	서브쿼리
*/
-- Q13) 'mtkim', 'odoh', 'soyoukim', 'winterkim' 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.    
-- ORDER_HEADER 
SELECT ORDER_ID, 
		CUSTOMER_ID,
        ORDER_DATE,
        TOTAL_DUE
        FROM ORDER_HEADER 
        WHERE CUSTOMER_ID IN ('mtkim','soyoukim');
-- 김마트, 김소유 고객의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
-- 아이디는 모르고 이름만 알 때의 형식 
SELECT CUSTOMER_ID FROM CUSTOMER WHERE CUSTOMER_NAME IN ('김마트','김소유');
SELECT ORDER_ID, 
		CUSTOMER_ID,
        ORDER_DATE,
        TOTAL_DUE
        FROM ORDER_HEADER 
        WHERE CUSTOMER_ID IN (SELECT CUSTOMER_ID 
								FROM CUSTOMER WHERE CUSTOMER_NAME IN ('김마트','김소유'));
-- Q14) '전주' 지역 고객의 아이디, 고객명, 고객 생일을 조회하세요.    
SELECT CUSTOMER_ID, CUSTOMER_NAME, BIRTH_DATE 
FROM CUSTOMER
WHERE CITY = '전주';

-- 전주 지역 고객이 주문한 상품의 주문 번호
SELECT *
	FROM ORDER_HEADER 
    WHERE CUSTOMER_ID IN (SELECT CUSTOMER_ID 
					FROM CUSTOMER
					WHERE CITY = '전주'); -- INNER JOIN되는 것과 마찬가지
;
SELECT CUSTOMER_ID 
FROM CUSTOMER
WHERE CITY = '전주';
-- Q15) 위 두 쿼리문을 조합해서 하위 쿼리를 사용해 '전주' 지역 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
-- 만약 고객명을 함께 출력하고자 한다면, ORDER_HEADER & CUSTOMER 조인해야함 
SELECT ORDER_ID, CUSTOMER_ID, ORDER_DATE, TOTAL_DUE
	FROM ORDER_HEADER 
    WHERE CUSTOMER_ID IN (SELECT CUSTOMER_ID 
					FROM CUSTOMER
					WHERE CITY = '전주');
-- Q16) 고객의 포인트 최댓값을 조회하세요.
SELECT MAX(POINT) FROM CUSTOMER;
-- Q17) 하위 쿼리를 사용해 가장 포인트가 많은 고객의 이름, 아이디, 등록일, 포인트를 조회하세요.

SELECT CUSTOMER_NAME, CUSTOMER_ID, REGISTER_DATE, POINT
FROM CUSTOMER
WHERE POINT = (SELECT MAX(POINT) FROM CUSTOMER);


SELECT CUSTOMER_NAME, CUSTOMER_ID, REGISTER_DATE, POINT
FROM CUSTOMER
WHERE POINT = (SELECT MIN(POINT) FROM CUSTOMER);
-- Q18) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하세요.
SELECT CUSTOMER_NAME,
		CUSTOMER_ID, 
		REGISTER_DATE,
        POINT
FROM CUSTOMER
WHERE POINT > (SELECT POINT FROM CUSTOMER WHERE CUSTOMER_NAME='홍길동');
-- Q19) 하위 쿼리를 사용해 홍길동(gdhong) 고객과 같은 지역의 고객 이름, 아이디, 지역, 등록일, 포인트를 조회하세요.
--      단, 고객 이름을 기준으로 오름차순 정렬해서 조회하세요.
SELECT CUSTOMER_NAME,
		CUSTOMER_ID, 
		REGISTER_DATE,
        POINT,
        CITY
FROM CUSTOMER
WHERE CITY = (SELECT CITY FROM CUSTOMER WHERE CUSTOMER_NAME='홍길동')
ORDER BY CUSTOMER_NAME;
-- Q20) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하고, 행번호를 추가하여 출력하세요.
	
SELECT  ROW_NUMBER() OVER(ORDER BY CUSTOMER_NAME) AS NO,
		CUSTOMER_NAME,
		CUSTOMER_ID, 
		REGISTER_DATE,
        POINT
FROM CUSTOMER
WHERE POINT > (SELECT POINT FROM CUSTOMER WHERE CUSTOMER_NAME='홍길동');

-- 찾고자하는 쿼리 전체를 짜고... 하위 쿼리가 잘 작동하는지 확인하고 그 둘이 제대로 연동되는지 확인 후 행번호 출력 함수를 넣는 게 이상적인 순서~ 

-- 2016~ 2017년도까지 주문한 고객의 아이디, 고객명, 주문번호, 주문총금액 확인 
SHOW TABLES;
SELECT COUNT(*) FROM ORDER_HEADER; -- 903
SELECT COUNT(*) FROM ORDER_HEADER2016; -- 596
SELECT COUNT(*) FROM ORDER_HEADER2017; -- 561
DESC ORDER_HEADER;
DESC ORDER_HEADER2016;
DESC ORDER_HEADER2017;

-- UNION ALL
-- 각 ORDER-HEADER의 수가 함해져 2060이 된다.
SELECT T1.CUSTOMER_ID, C.CUSTOMER_NAME, T1.ORDER_ID, T1.TOTAL_DUE
FROM CUSTOMER C,
				(SELECT * FROM ORDER_HEADER
				UNION ALL
				SELECT * FROM ORDER_HEADER2016
				UNION ALL
				SELECT * FROM ORDER_HEADER2017) T1
WHERE C.CUSTOMER_ID = T1.CUSTOMER_ID;


-- 년도별 주문 건수
-- 년도는 YEAR로 바꾸고 건수는 COUNT 로 총판매 합계 SUM
-- 년도 뒤에는 '년도', COUNT '건', 합계엑 '만원'
SELECT  CONCAT(LEFT(ORDER_DATE,4), '년도') YEAR, 
		CONCAT(COUNT(ORDER_ID), '건') COUNT,
        CONCAT(FORMAT(SUM(TOTAL_DUE),0), '원') SUM -- 4. 필터실행
FROM CUSTOMER C, -- 2. JOIN하고~
				(SELECT * FROM ORDER_HEADER
				UNION ALL
				SELECT * FROM ORDER_HEADER2016
				UNION ALL
				SELECT * FROM ORDER_HEADER2017) T1 -- 1. 서브쿼리가 가장먼저 실행.. 합치기부터
WHERE C.CUSTOMER_ID = T1.CUSTOMER_ID
GROUP BY YEAR  -- 3.그루핑하고~ 
ORDER BY YEAR ASC;

-- VIEW 이용하여 ORDER_HEADER_TOTAL (2016~2019)
SELECT *
FROM INFORMATION_SCHEMA.VIEWS
WHERE TABLE_SCHEMA = 'MYSHOP2019';

-- 뷰로 만들고싶은 쿼리
CREATE VIEW ORDER_HEADER_TOTAL
AS
SELECT * FROM ORDER_HEADER
UNION ALL
SELECT * FROM ORDER_HEADER2016
UNION ALL
SELECT * FROM ORDER_HEADER2017;

--
SELECT  CONCAT(LEFT(ORDER_DATE,4), '년도') YEAR, 
		CONCAT(COUNT(ORDER_ID), '건') COUNT,
        CONCAT(FORMAT(SUM(TOTAL_DUE),0), '원') SUM 
FROM CUSTOMER C, ORDER_HEADER_TOTAL T1
WHERE C.CUSTOMER_ID = T1.CUSTOMER_ID
GROUP BY YEAR  
ORDER BY YEAR ASC;

SELECT COUNT(*) FROM ORDER_DETAIL; -- 2425
SELECT COUNT(*) FROM ORDER_DETAIL2016; -- 1582
SELECT COUNT(*) FROM ORDER_DETAIL2017; -- 1479 
SELECT COUNT(*) FROM ORDER_DETAIL_TOTAL; -- 위 3개 값이 합해진 5486
-- VIEW 이용하여 ORDER_DETAIL_TOTAL (2016~2019)
CREATE VIEW ORDER_DETAIL_TOTAL
AS
SELECT * FROM ORDER_DETAIL
UNION ALL
SELECT  * FROM ORDER_DETAIL2016
UNION ALL
SELECT  * FROM ORDER_DETAIL2017;
-- VIEW 생성 확인
SELECT *
FROM INFORMATION_SCHEMA.VIEWS
WHERE TABLE_SCHEMA = 'MYSHOP2019';

SELECT 	LEFT(ORDER_DATE, 4) YEAR,
		SUBSTRING(ORDER_DATE, 6, 2) MONTH,
		COUNT(ORDER_ID) COUNT
FROM (SELECT E.EMPLOYEE_NAME, 
			H.ORDER_DATE, 
			P.PRODUCT_NAME,
			H.ORDER_ID,
			D.ORDER_DETAIL_ID
		FROM PRODUCT P, EMPLOYEE E, ORDER_HEADER_TOTAL H, ORDER_DETAIL_TOTAL D
		WHERE P.PRODUCT_ID = D.PRODUCT_ID
			AND H.ORDER_ID = D.ORDER_ID
			AND E.EMPLOYEE_ID = H.EMPLOYEE_ID) T1
GROUP BY LEFT(ORDER_DATE, 4), SUBSTRING(ORDER_DATE, 6, 2)
ORDER BY YEAR ASC;

-- 카테고리 활용
SELECT * FROM CATEGORY;
-- 대분류 '가전제품' 선택 후 소분류 값 가져오기
SELECT SUB_CATEGORY_NAME 
	FROM SUB_CATEGORY
    WHERE CATEGORY_ID IN
			(SELECT CATEGORY_ID 
             FROM CATEGORY 
             WHERE CATEGORY_NAME = '가전제품');

-- 소분류에서 '대형'을 선택한 후 상품명 가져오기
SELECT PRODUCT_NAME
	FROM PRODUCT
    WHERE SUB_CATEGORY_ID IN (SELECT SUB_CATEGORY_ID
								FROM SUB_CATEGORY
                                WHERE SUB_CATEGORY_NAME = '대형');