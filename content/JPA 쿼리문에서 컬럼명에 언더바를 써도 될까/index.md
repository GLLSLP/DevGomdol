---
emoji: ๐ง
title: ๐ฆJPA ์ฟผ๋ฆฌ๋ฌธ์์ ์ปฌ๋ผ๋ช์ ์ธ๋๋ฐ(_)๋ฅผ ์จ๋ ๋ ๊น๐
date: '2022-07-04 17:56:00'
author: ๊ณฐ๋
tags: JAVA SpringBoot
categories: JAVA SpringBoot
---

## ๐ฉโ๐ซJPA ์ฟผ๋ฆฌ๋ฌธ์์ ์ปฌ๋ผ๋ช์ ์ธ๋๋ฐ(_)์ธ์ ๋ฌธ์ 

์ปฌ๋ผ๋ช์ ์ธ๋๋ฐ(_)๊ฐ ์์ผ๋ฉด Repository์์ findBy~๋ก ๋ฉ์๋ ์ด๋ฆ์ ์ง์๋ ์ปฌ๋ผ์ ์ธ์ํ  ์ ์๋ค.๐ค

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

์ด๋ ๊ฒ ์ฐ๋ฉด ์๋๋ค๐





## โจํด๊ฒฐ์ฑ

 `@Column`์ ์ฌ์ฉํ๋ฉด ์ด ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ ์ ์๋ค!๐

@Column์์ name์ DB์ ์ค์  ์ปฌ๋ผ๋ช์ ์ง์ ํ๊ณ , ๋ณ์์ _๋ฅผ ๋นผ๊ณ  ์์ฑํ๋ฉด ๋๋ค!๐

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
