---
title: "[1일차]SpringBoot 기반으로 서버 개발하기-1"
date: 2022-04-13 17:27:00
category: '강의'
draft: false
---

##### 

#### 오늘 한 일

- Spring Boot 설치

- Mybatis 설정

- MariaDB 연동

- Lombok 설치

- Api 구현

- Swagger 설치

- 게시판 API 문서화
  
  

#### 잘 안되었던것

Lombok을 설치하는 과정에서 lombok.jar를 이클립스 설치 경로에 넣었더니 이런 에러가 뜨면서 이클립스가 실행되지 않게 되었다.

<img src="file:///C:/Github/Fixed/content/blog/Inflearn/images/220413_01.PNG" title="" alt="" width="484">

찾아보니 버전이 맞지 않아서 생기는 문제로 나왔다.

eclipse.ini에서 Dosgi.requiredJavaVersion이 11로 되어있는 부분을 모두 1.8로 수정해주면 해결된다고 나왔는데, 나에겐 먹히지 않았다..



#### 해결법

이클립스를 가장 최신버전(2022년 03월)을 사용하지 않고 이전버전(2021년 12월)을 사용했더니 오류가 나타나지 않았다.



#### 배운것/느낀점

Lombok이라는걸 처음 알게되고 설치해봤는데 반복적으로 작성해야하는 getter, setter, toString같은 메서드 작성코드를 줄여주는 라이브러리라는걸 알게되었다.

반복 작성할때마다 번거롭다고 생각했었는데 Lombok을 사용하니까 코드의 가독성이 높아지는것 같았다.

근데 편리성을 제공하는 라이브러리인만큼 API설명과 내부동작을 어느정도 숙지하지 않으면 에러가 발생할 수 있다니 조금더 공부를 해봐야겠다.

예시) Lombok의 어노테이션에서 @Data나 @ToString으로 자동생성되는 toString()메서드는 순환참조 또는 무한재귀호출로 StackOverflowError가 발생할 수 있다. 
