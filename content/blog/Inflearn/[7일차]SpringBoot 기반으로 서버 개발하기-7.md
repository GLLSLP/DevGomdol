---
title: '[7일차]SpringBoot 기반으로 서버 개발하기-7'
date: 2022-04-26 13:38:00
category: '강의'
draft: false
---

오늘 한 일

- Mybatis foreach 사용으로 배열 검색 기능 추가하기
- 페이징 공통 처리
- annotation과 interceptor를 사용해 회원 로그인 체크하기

## 고충 및 해결과정

### 잘 안되었던것

쿼리문을 실행시켰는데 이런 에러가 떴다

You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near ~

### 해결법

작은따옴표를 붙이면 안되는데 붙이거나 붙여야하는데 안붙이면 생기는 에러였다.

나같은 경우 테이블명과 컬럼명을 감싼 ' '를 빼니까 해결됐다.

```sql
//에러 남
ALTER TABLE 'T_BOARD'
CHANGE COLUMN 'BOARD_SEQ' 'BOARD_SEQ' INT(11) NOT NULL AUTO_INCREMENT COMMENT '게시물 번호' FIRST,
ADD COLUMN 'BOARD_TYPE' CHAR(5) NOT NULL COMMENT '게시판 종류' AFTER 'BOARD_SEQ';
//에러 안남
ALTER TABLE T_BOARD
CHANGE COLUMN BOARD_SEQ BOARD_SEQ INT(11) NOT NULL AUTO_INCREMENT COMMENT '게시물 번호' FIRST,
ADD COLUMN BOARD_TYPE CHAR(5) NOT NULL COMMENT '게시판 종류' AFTER BOARD_SEQ;
```

## 배운것/느낀점

이전에 게시판을 만들땐 게시판 종류에 따라 테이블을 분리했었는데 이번에는 BOARD라는 메인 테이블을 하나 두고 BOARD_TYPE라는 컬럼을 추가하는 방식을 써보게 되었다.

테이블이 너무많아지면 그만큼 controller, service, repositoy, xml 등 중복소스가 많아지며 확장성에 안좋다는걸 알게되었다.





![](.\images\220426_01.PNG)