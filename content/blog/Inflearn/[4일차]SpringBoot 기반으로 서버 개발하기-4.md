---
title: "[4일차]SpringBoot 기반으로 서버 개발하기-4"
date: 2022-04-18 17:34:00
category: '강의'
draft: false
---

## 오늘 한 일

- 다국어 메세지 안되는 문제 아직 해결 못함 ㅜ
- Interceptor 사용하기
- Logback 사용하기



## 고충 및 해결과정

### 잘 안되었던것 1

에러 1. 다국어 메세지가 한글로 안뜸

### 해결법 1

메세지 일부는 한글로 나오게 했는데, 일부 메세지가 아직도 영어로 뜨는 이유를 못찾았다.

근데 강좌에서 제공하는 코드를 그대로 PULL받아 돌려봤는데 거기서도 한글로 뜨지 않았다..

따로 해결방법을 찾아야 할것 같다.



### 잘 안되었던것 2

에러 2.  'The type HandlerInterceptorAdapter is deprecated'가 떴다.

강의에선 스프링을 나보다 낮은버전(Spring 5.3 미만)을 써서 HandlerInterceptorAdapter를 사용해도 문제가 없었는데, 현재는 사용할수 없게되었다.



#### 해결법 2

HandlerInterceptorAdapter 를 사용하는 대신 HandlerInterceptor를 implements 해서 사용하는 방식으로 바꾼다.

- 변겅전

```java
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class BaseHandlerInterceptor extends HandlerInterceptorAdapter {
    ...
}
```

- 변경후

```java
import org.springframework.web.servlet.HandlerInterceptor;

public class BaseHandlerInterceptor implements HandlerInterceptor {
    ...
}
```



## 배운것/느낀점

분명 몇번이나 확인하면서 똑같이 따라했는데 안될때가 있다. 알고보니 강좌에선 사용할 수 있는건데 나는 사용할수 없는거라던가 하는 경우가 종종 있었다. 이미 있는 코드를 무작정 따라하지 말고 어떤 기능을 하는지 검색해가면서 따라하다보면 최근에는 어떻게 써야하는지 알 수 있어서 좋은것 같다. 그리고 제공되는 코드도 간혹 누락이 있기도 하니까 똑같이 했는데도 안된다 싶으면 강좌에서 제공하는 코드를 한번 그대로 돌려보자...
