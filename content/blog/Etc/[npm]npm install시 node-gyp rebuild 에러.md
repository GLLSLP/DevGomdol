---
title: '[npm]npm install시 node-gyp rebuild 에러'
date: 2022-05-12 17:41:00
category: '기타'
draft: false
---

어느날 갑자기 npm관련 명령어를 치면 이런 에러가 떴다.

```log
npm ERR! code 1
npm ERR! path C:\Users\khj\sleact\back\node_modules\bcrypt
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c node-gyp rebuild      
npm ERR! gyp info it worked if it ends with ok
npm ERR! gyp info using node-gyp@7.1.2
npm ERR! gyp info using node@14.15.4 | win32 | x64
.
.
.
```

### 해결법

npm버전을 16.x.x에서 14.15.0으로 변경하면 된다

일단 아래의 명령어를 그대로 치면 되는데..

```
node -v // 노드 현재버전 확인
nvm install 14.15.0 // 변경할 버전을 설치
nvm use 14.15.0 // 설치한 버전으로 변경
node -v // 변경된 노드 버전 확인
```

나같은경우 nvm use 14.15.0를 입력하면 이런 에러가 떴다.

```
exit status 1: �׼����� �źεǾ����ϴ�.
exit status 5: 어쩌구~
```



해결하기위해선  1. nodejs가 설치된 경로에 공백이 없어야 하고 2. nvm use 14.15.0을 입력할때 PowerShell을 관리자 권한으로 실행해서 입력해야 한다.

나같은경우 nodejs를 설치할때 기본적인 경로(C:\Program Files\nodejs)에 설치했는데, Program Files에 있는 띄어쓰기가 문제가 되었다.

그래서 제어판으로 Node.js를 삭제한 후, 재설치할때 경로를 C:\nodejs로 지정해주었다.

![220512_01](.\images\220512_01.PNG)

다운그레이드가 잘 된다!

이후에  npm install을 해주면..

![](.\images\220512_02.PNG)

드디어 에러없이 잘 된다!

한동안 이유없이 골치썩혔던 문제라서 해결하고나니 기분이 좋다

