---
emoji: 🔮
title: JWT사용시 Postman으로 테스트하는법
date: '2022-06-28 14:26:00'
author: 곰덜
tags: 블로그 github-pages gatsby
categories: JAVA SpringBoot
---

## 🥝문제

JWT가 필요한 API를 포스트맨으로 테스트 할때 그냥 보내면 아래처럼 401 Unauthorized 에러가 뜨게 된다.🤔

![](220628_01.PNG)

## ⭐️해결법

**Headers에 JWT를 담아야 한다!**

KEY에 `Authorization` 를, VALUE에 `Bearer 토큰값`을 입력하면 된다. (Bearer 뒤에 꼭 한칸 띄어야함!)

![](220628_02.PNG)



```toc

```
