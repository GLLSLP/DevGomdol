---
title: '[8일차]SpringBoot 기반으로 서버 개발하기-8'
date: 2022-04-27 17:38:00
category: '강의'
draft: false
---

오늘 한 일

- annotation과 interceptor를 사용해 회원 로그인 체크하기 에러 해결
- @PostConstruct 어노테이션을 활용하기

## 고충 및 해결과정

### 잘 안되었던것

공통로그인 체크가 필요한 부분에선 loginCheck를 true로 바꿔줘야 하는데, 그 부분이 강의에서 빠져있어서 조금 헤맸다...

### 해결법

RequestConfig라는 어노테이션을 이렇게 만들었을때,

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface RequestConfig {
	boolean loginCheck() default false;
}

```

로그인 체크가 필요한(loginCheck를 true로 만들) 메소드 위에 이렇게 작성해준다.

```java
@RequestConfig(loginCheck = true)
```

### 배운것/느낀점

백엔드 서버개발을 할 때 파일업로드, restapi 인증정보, 각종 설정값들이 많은데 @Value 어노테이션으로도 사용할 수 있지만, GlobalConfig 클래스롤 만들어서 한곳에서 관리를 해서 사용하니 확장성이 좋았던것 같다.