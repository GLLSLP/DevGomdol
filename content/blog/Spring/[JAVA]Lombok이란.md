---
title: "[JAVA] Lombok이란? 그리고 사용법"
date: 2022-04-13 14:01:00
category: 'JAVA & Spring'
draft: false
---

![](C:\Github\Fixed\content\blog\Spring\images\220413_01.PNG) 

### 롬복(Lombok)이란?

Java 라이브러리 중 하나로, 기계적으로 작성해야하는 getter, setter, toString같은 메소드 작성 코드를 줄여주는 코드 다이어트 라이브러리이다.

### 

### 사용법

[Lombok](https://projectlombok.org/download) 에 들어가서 lombok.jar파일을 다운받는다.

그다음 아래 사진처럼 Eclipse가 설치된 폴더에 들어가서 lombok.jar를 붙여넣기한다.

![](.\images\220413_02.PNG)



이후 eclipse.ini파일을 메모장으로 열어서 맨 밑에 아래 내용을 추가한다.

```ini
-javaagent:lombok.jar
```



그다음 이클립스를 Restart해준다.


