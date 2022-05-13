---
title: '[Gatsby]에러 ERROR #98123  WEBPACK 해결하기'
date: 2022-05-13 17:53:00
category: 'Git'
draft: false
---

gatsby develop하는데 'ERROR #98123 WEBPACK'이라는 에러가 잔뜩 나왔다.

자세히 읽어보니 마지막에 이런 줄이 있었다.

```git
Node Sass version 6.0.0 is incompatible with ^4.0.0
```

Node Sass버전을 4.0.0으로 낮추면 되는건가보다!하고 

```javascript
npm install node-sass@4.12
```

이렇게 했는데 먹히지 않았다;;

node-sass -v를 해보니까 아무것도 안나와서 글로벌로 설치해 주었다

```git
npm install -g node-sass
```

다시 node-sass -v를 하니까 버전을 확인할수 있었다!

그리고나서 다시 npm install node-sass@4.12를 했는데 또 안먹혔다;

알고보니 Node Sass는 Node.js의 버전과 호환되는걸 설치해야 하는거였다..



나는 Node.js 16버전을 쓰고있었는데 Node Sass 4.x.x버전을 이용하기위해선 Node.js를 14버전으로 낮춰야 했다.

그래서 낮춰줬다!

PowerShell을 관리자 권한으로 켠다음 이 명령어를 입력해준다.

```cmd
cd 작업디렉토리
nvm install 14.17.0
nvm use 14.17.0
```

그리고 나서 node -v로 14버전으로 변경된걸 확인해주면 된다!

다시 gatsby develop을 했는데 이번엔 이런에러가 떴다..

```git
ERROR #98123  WEBPACK
.
.
This usually happens because your environment has changed since running `npm
install`.
Run `npm rebuild node-sass` to download the binding for your current
environment.
```

하라는대로 npm rebuild node-sass하고 다시 gatsby develop하니까 이 에러가 뜬다..

```git
Node Sass version 6.0.0 is incompatible with ^4.0.0
```

왜..
