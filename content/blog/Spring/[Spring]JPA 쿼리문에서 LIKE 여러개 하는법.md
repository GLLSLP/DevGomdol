---
title: "[Spring]JPA 쿼리문에서 LIKE 여러개 하는법"
date: 2022-07-04 17:25:00
category: 'JAVA & Spring'
draft: false
---

JPA로 쿼리문을 쓰는게 너무 편해서 쓰고있는데, 여러개 컬럼에 %LIKE% 조건을 걸고싶다.



JPA Like 처리는 아래와같이 4가지가 있다.

1. 단순 LIKE : LIKE

2. 키워드+'%' : StartingWith

3. '%'+키워드 : EndingWith

4. '%'+키워드+'%' : Containing



즉, 많이들 쓰는 '%어쩌구%'는 LIKE가 아니라 Containing인것이다!

그래서 특정 글자가 포함된 이메일을 찾고싶으면 이렇게 쓰면 된다.

```java
List<User> findByEmailContaining(String email);
```





## JPA에서 LIKE 두개이상 넣기

내가 원하는건 email컬럼에 '%email%'를, phone컬럼에 '%phone%' 처리를 하고싶은데, 이럴땐 AND (혹은 OR)을 사용하면 된다.

```java
List<User> findByEmailContainingAndPhonenumberContaining(String email, String phone_number);
```

각 컬럼별로 Containing까지만 쓴다음 And(혹은 OR)로 이어주고, 마지막에 ()안에 값들을 순서대로 넣어주면 된다! 
