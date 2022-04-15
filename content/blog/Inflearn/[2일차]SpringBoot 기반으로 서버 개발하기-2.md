---
title: "[2일차]SpringBoot 기반으로 서버 개발하기-2"
date: 2022-04-14 17:34:00
category: '강의'
draft: false
---

#### 오늘 한 일

- No serializer found 에러 해결(ㅜㅜ)
- Lombok 재설치
- Swagger 설치
- 게시판 API 문서화

오늘은 Whitelabel 에러창때문에 시간이 걸렸다.

#### 잘 안되었던것 1

에러 1.  jdbcUrl is required with d with driverClassName

```
Whitelabel Error Page
This application has no explicit mapping for /error, so you are seeing this as a fallback.

Thu Apr 14 15:08:07 KST 2022
There was an unexpected error (type=Internal Server Error, status=500).
nested exception is org.apache.ibatis.exceptions.PersistenceException: ### Error querying database. Cause: java.lang.IllegalArgumentException: jdbcUrl is required with driverClassName. ### The error may exist in file [C:\Inflearn\Spring-workspace\example-spring\target\classes\mybatis\sql\Board.xml] ### The error may involve com.example.demo.mvc.repository.BoardRepository.getList ### The error occurred while executing a query ### Cause: java.lang.IllegalArgumentException: jdbcUrl is required with driverClassName.
org.mybatis.spring.MyBatisSystemException: nested exception is org.apache.ibatis.exceptions.PersistenceException: 
### Error querying database.  Cause: java.lang.IllegalArgumentException: jdbcUrl is required with driverClassName.
### The error may exist in file [C:\Inflearn\Spring-workspace\example-spring\target\classes\mybatis\sql\Board.xml]
### The error may involve com.example.demo.mvc.repository.BoardRepository.getList
### The error occurred while executing a query
### Cause: java.lang.IllegalArgumentException: jdbcUrl is required with driverClassName.
```

#### 해결법 1

application.properties에서 spring.datasource.url을 spring.datasource.jdbc-url로 바꾸면 된다.

#### 잘 안되었던것 2

에러 2. No serializer found ~생략~ no properties discovered to create BeanSerializer

```
Whitelabel Error Page
This application has no explicit mapping for /error, so you are seeing this as a fallback.

Thu Apr 14 15:39:28 KST 2022
There was an unexpected error (type=Internal Server Error, status=500).
Type definition error: [simple type, class com.example.demo.mvc.domain.Board]; nested exception is com.fasterxml.jackson.databind.exc.InvalidDefinitionException: No serializer found for class com.example.demo.mvc.domain.Board and no properties discovered to create BeanSerializer (to avoid exception, disable SerializationFeature.FAIL_ON_EMPTY_BEANS) (through reference chain: java.util.ArrayList[0])
org.springframework.http.converter.HttpMessageConversionException: Type definition error: [simple type, class com.example.demo.mvc.domain.Board]; nested exception is com.fasterxml.jackson.databind.exc.InvalidDefinitionException: No serializer found for class com.example.demo.mvc.domain.Board and no properties discovered to create BeanSerializer (to avoid exception, disable SerializationFeature.FAIL_ON_EMPTY_BEANS) (through reference chain: java.util.ArrayList[0])
```

#### 해결법2

DTO클래스에서 필드 위에 @JsonProperty를 붙여준다.

- 변경 전

```java
@Data
public class Board {
    private int boardSeq;
    private String title;
    private String contents;
    private Date regDate;
}
```

- 변경 후

```java
@Data
public class Board {
    @JsonProperty
    private int boardSeq;
    @JsonProperty
    private String title;
    @JsonProperty
    private String contents;
    @JsonProperty
    private Date regDate;
}
```

#### 잘 안되었던것 3

swagger 연동을 하려는데 이런 오류가 떴다.

```
Failed to start bean 'documentationPluginsBootstrapper'
```

알고보니 나는 지금 Springboot을 최신버전을 쓰고 있는데, 호환되는 swagger버전이 하나도 없어서 나는 오류였다!

#### 해결법 3

SpringBoot 버전을 2.4.2로 낮춘다.

#### 배운것/느낀점

뭔가를 시작할때마다 버전이 안맞는 오류가 항상 생기는것 같다. 습관적으로 최신버전으로 설치하는편인데, 앞으로 어떤걸 설치할건지 미리 확인한다음 호환이 되지 않는 이슈가 있는지 미리 찾아보면 시간을 많이 절약할 수 있을것 같다.
