---
emoji: 🥗
title: Windows 특정 포트 번호 끄는 방법🐠
date: '2022-03-25 16:37:00'
author: 곰덜
tags: ETC
categories: ETC
---

npm start를 계속 하다보면 8000번 포트가 이미 사용중이라고 뜰때가 있다.

이럴땐 cmd창을 켜서 아래 명령어를 입력하면 된다~!!



## 🍘방법

##### 🥂1. 해당 포트번호의 PID번호를 찾기

``` git
netstat -ano | find "LISTENING" | find "포트번호"

```

이 명령어를 치면

>  TCP       127.0.0.1:8000        0.0.0.0:0        LISTENING     숫자

이렇게 출력이 되는데, 숫자 부분이 PID번호이다!



##### 🎿2.해당 포트의 PID번호로 taskkill

``` git
taskkill /F /PID PID번호
```



##### 🥁3.포트번호 끄기 성공!






```toc

```
