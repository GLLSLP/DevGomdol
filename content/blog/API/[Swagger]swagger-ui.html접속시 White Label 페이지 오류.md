---
title: "[Swagger]swagger-ui.html접속시 White Label 페이지 오류"
date: 2022-04-13 14:01:00
category: 'API'
draft: false
---

swagger-ui.html을 접속했는데 White Label 페이지가 떴다.

최근에 SpringBoot랑 Swagger 버전 호환 문제를 겪어서 혹시나 했는데 역시나였다..

### 해결법

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
