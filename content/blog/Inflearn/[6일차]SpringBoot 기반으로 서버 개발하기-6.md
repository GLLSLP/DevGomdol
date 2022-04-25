---
title: "[6일차]SpringBoot 기반으로 서버 개발하기-6"
date: 2022-04-25 17:50:00
category: '강의'
draft: false
---

## 오늘 한 일

- Mybatis와 enum class 활용
- Mybatis if 사용으로 게시물 검색 기능 추가하기
- Mybatis foreach 사용으로 배열 검색 기능 추가하기

## 고충 및 해결과정

### 잘 안되었던것

Mybatis에서 JAVA static method에 접근이 안되었다

### 해결법

"@패키지+클래스명@메소드명" 형식으로 @를 붙여줘야한다.

```xml
//예시
<where>
    <if test="@org.apache.commons.lang3.StringUtils@isNotEmpty(keyword)">
        AND B.TITLE LIKE CONCAT('%',#{keyword},'%')
    </if>
</where>
```



## 배운것/느낀점

1. Mybatis 도메인 클래스에 DB 컬럼 값이 코드일경우 enum으로 사용해서 개발하기
   
   - 장점
     
     - 불필요한 테이블 및 코드관리가 필요없어진다.
     
     - 리스트, 상세 조회시 코드에 대한 코드명을 TABLE 로  JOIN하거나 FUNCTION을 가져오는 불필요한 쿼리가 없어진다.
     
     - Front(JSP, Vue.js, React, Native APP), API등 에서 코드명 하드코딩이 없어진다. 
     
     - 위 3개는 즉 결과 나오는 속도가 더 빨라진다. (자동 성능 튜닝)
     
     - 코드, 코드명 추가/수정/삭제 시 운영서버에 배포만한다면 DB를 직접 건드리지않고 자동으로 적용된다.
     
     - int, String으로 선언한다면 코드에 대해 공백, 자리수, 유효한 값인지 체크 로직이 들어가야한다. enum은 안해도 된다.(Enum에 해당하지 않는 값이 들어온다면 Spring 에서 에러가 발생)
   
   - 단점
     
     - 사이트 관리자 및 고객사에서 오픈 이후 코드를 추가, 수정, 삭제가 불가능 하다.
     
     - 코드 추가/수정/삭제는 개발자가 직접 코드를 수정하고 운영서버에 배포하고 재기동을 해야 적용된다.
     
     - DBMS TOOL에서 직접 INSERT, UPDATE 등을 통하여 잘못된 ENUM 정의되지 않은 코드가 있는경우 오류가 발생한다.
