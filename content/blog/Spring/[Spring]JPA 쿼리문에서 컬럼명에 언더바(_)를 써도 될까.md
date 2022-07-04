---
title: "[Spring]JPA 쿼리문에서 컬럼명에 언더바(_)를 써도 될까"
date: 2022-07-04 17:56:00
category: 'JAVA & Spring'
draft: false
---

난감~

PosgreSQL의 특유의 '컬럼명에 대문자를 쓰지 말것'을 피해서 컬럼명에 언더바(_)를 사용했는데, JPA에서 문제가 되었다



## 결론

쓰면안된다!





근데 PostgreSQL과 JPA를 같이쓰는 경우에는 컬럼명을 어떻게 써야하는걸까??

phone_number ->JPA 에러남

phoneNumber -> PostgreSQL 에러남

phonenumber ->현재쓰고있는데 가독성 구림;



흠..
