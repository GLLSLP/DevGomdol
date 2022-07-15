---
emoji: 🎠
title: 👨‍🏫JPA 쿼리문에서 LIKE 여러개 하는법🤔
date: '2022-07-04 17:25:00'
author: 곰덜
tags: JAVA SpringBoot
categories: JAVA SpringBoot
---

## 👨‍🏫JPA 쿼리문에서 LIKE는 어떻게 하는지🤔

JPA Like 처리는 아래와같이 4가지가 있다.👇

1. 단순 LIKE : LIKE

2. 키워드+'%' : StartingWith

3. '%'+키워드 : EndingWith

4. '%'+키워드+'%' : Containing

즉, 많이들 쓰는 '%어쩌구%'는 LIKE가 아니라 Containing인것이다!🙃

그래서 특정 글자가 포함된 이메일을 찾고싶으면 이렇게 쓰면 된다.💁

```java
List<User> findByEmailContaining(String email);
```

## 🎲LIKE 두개이상 넣기

`Containing`과 `AND(혹은 OR)`를 사용하면 된다!😙

예를들어 Name에 '곰'글자가 들어가고 Address에 '숲'글자가 들어가는 User데이터를 찾고싶으면 아래처럼 쓰면 된다.👇

> List<User> findBy`Name``Containing``And``Address``Containing`('곰', '숲');

각 컬럼별로 Containing까지만 쓴다음 And(혹은 OR)로 이어주고, 마지막에 ()안에 값들을 순서대로 넣어주면 된다!🌳🐻💖🌲

```toc

```
