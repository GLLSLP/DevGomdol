---
title: '[MariaDB] SQL 에러들 + 해결방법'
date: 2022-04-26 13:38:00
category: 'DB'
draft: false
---

에러들을 모아봤다



- You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near ~
  
  -> ' '에 관련된 문제였다. 테이블명과 컬럼명을 감싼 ' '를 빼니까 해결됐다.
  
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
  
  