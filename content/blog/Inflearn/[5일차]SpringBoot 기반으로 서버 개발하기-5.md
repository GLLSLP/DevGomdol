---
title: "[5일차]SpringBoot 기반으로 서버 개발하기-5"
date: 2022-04-19 17:41:00
category: '강의'
draft: false
---

## 오늘 한 일

- Logback에서 특정 메소드 오버라이드 안되는 문제 해결
- Mybatis+MariaDB로 대용량 데이터 빠르게 Insert하기



## 고충 및 해결과정

### 잘 안되었던것

에러 1. addInterceptors를 사용하려고 하면 'The method addInterceptors(InterceptorRegistry) of type WebConfiguration must override or implement a supertype method'가 뜸.

### 해결법

WebMvcConfigurer를 상속하지 않고 쓰면 저 에러가 뜨게 된다.

클래스 이름 뒤에 implements WebMvcConfigurer를 붙여주자ㅜ

```
@Configuration
public class WebConfiguration implements WebMvcConfigurer 
{
...
}
```





## 배운것/느낀점

대용량의 데이터를 한번에 삽입할 뿐만 아니라 내가 알던 방법보다 훨씬 더 빠르게 삽입하는 방법에 대해 알게되었다!(실습 기준 기존방법보다 17초 단축)

기존에 쓰던 방법은 for문을 돌면서 1건마다 save()를 호출했는데, 이때마다 DBConnection을 호출하게 되어서 느리다.

새로 알게된 방법은 Map에 List형식으로 데이터를 담아서 saveList()를 호출했는데, 딱 1번의 DBConnection을 호출하기 때문에 아주 빠르다!
