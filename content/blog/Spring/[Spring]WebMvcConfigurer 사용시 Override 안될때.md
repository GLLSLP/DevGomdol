---
title: "[Spring]WebMvcConfigurer 사용시 Override 안될때"
date: 2022-06-16 15:05:00
category: 'JAVA & Spring'
draft: false
---



WebMvcConfigurer를 상속받아 addViewControllers를 오버라이드 하려는데, @Override 어노테이변 부분에서 상위 클래스에서 찾을 수 없다는 에러가 떴다. 왜일까~~~~~~~~

```java
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
@EnableWebMvc
public class WebMVCConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // /에 해당하는 url mapping을 /common/test로 forward한다.
        registry.addViewController( "/" ).setViewName( "forward:/index" );
        // 우선순위를 가장 높게 잡는다.
        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
    }
}

```



## 해결법

import부분에 아래 코드를 추가해주면 된다

```java
import org.springframework.web.servlet.config.annotation.*;
```


