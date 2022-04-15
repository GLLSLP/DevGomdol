---
title: "[3일차]SpringBoot 기반으로 서버 개발하기-3"
date: 2022-04-15 17:34:00
category: '강의'
draft: false
---

## 오늘 한 일

- swagger-ui.html접속시 white label error 해결
- 공통 Response Class, enum 사용하기
- Controller Advice사용하기
- 예외처리 다국어 활용
- 다국어 메세지 에러 해결중



## 고충 및 해결과정

### 잘 안되었던것 1

에러 1.  swagger-ui.html 접속 안됨

swagger-ui.html을 접속했는데 White Label 페이지가 떴다.

최근에 SpringBoot랑 Swagger 버전 호환 문제를 겪어서 혹시나 했는데 역시나였다..

### 해결법 1

pom.xml에서 (SpringBoot 2.4.2 버전 기준으로) Swagger 버전을 최신 버전이 아닌 2.9.2버전으로 변경한다.

```xml
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.4.2</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.example</groupId>
    <artifactId>example-spring</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>example-spring</name>
    <description>Demo project for Spring Boot</description>
    <properties>
        <java.version>1.8</java.version>
        <swagger.version>2.9.2</swagger.version> <!-- 여기 수정 -->
    </properties>
```

### 잘 안되었던것 2

메세지 공통 처리 부분에서 message_ko.properties에 작성한 한글 메세지가 안뜬다. 

#### 해결법 2

아직 해결하지 못함ㅜ



## 배운것/느낀점

예전에 프로젝트를 할때 swagger를 팀원이 쓰는것만 보고 내가 직접 써본적은 없었는데, 직접 써보니까 되어있는걸 그냥 갖다쓸때보다 조금더 프로젝트 구조를 알것같은 느낌이 들었다.
