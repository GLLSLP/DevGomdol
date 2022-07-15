---
emoji: 🧚
title: 🦄JPA 쿼리문에서 컬럼명에 언더바(_)를 써도 될까😗
date: '2022-07-04 17:56:00'
author: 곰덜
tags: JAVA SpringBoot
categories: JAVA SpringBoot
---

## 👩‍🏫JPA 쿼리문에서 컬럼명에 언더바(_)인식 문제

컬럼명에 언더바(_)가 있으면 Repository에서 findBy~로 메소드 이름을 지을때 컬럼을 인식할 수 없다.🤔

``` java
@Entity
@Table(name = "users")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User extends Common implements Serializable {

    @Id
    private String my_email;
    private String my_pw;
}
```

이렇게 쓰면 안된다🙅





## ✨해결책

 `@Column`을 사용하면 이 문제를 해결할수 있다!🙋

@Column안의 name엔 DB의 실제 컬럼명을 지정하고, 변수엔 _를 빼고 작성하면 된다!🌈

``` java
@Entity
@Table(name = "users")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User extends Common implements Serializable {

    @Id
    @Column(name="my_email")
    private String email;
    @Column(name="my_pw")
    private String pw;
}
```





```toc

```
