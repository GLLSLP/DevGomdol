---
title: "[Spring]JWT사용시 Postman으로 로그인 테스트하는법"
date: 2022-06-28 14:26:00
category: 'JAVA & Spring'
draft: false
---

JWT로 회원가입, 로그인 기능을 만들고있는데 포스트맨으로 로그인을 테스트 하려니까 401 Unauthorized 에러가 떴다.

![220628_01.PNG](.\images\220628_01.PNG)





## 해결법

Headers에 JWT토큰을 담아서 보내야한다!

Key부분에 'Authorization'을, Value부분에 'Bearer 토큰값'이렇게 입력하면 된다

![220628_02.PNG](.\images\220628_02.PNG)
