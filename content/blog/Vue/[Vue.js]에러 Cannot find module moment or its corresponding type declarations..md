---
title: "[Vue.js]에러 Cannot find module 'moment' or its corresponding type declarations."
date: 2022-06-08 16:35:00
category: 'Vue.js'
draft: false
---

이런 에러가 떴다. 오잉~~

![](.\images\220608_01.PNG)



구글링해보면 이렇게 moment를 설치하면 된다고 했다.

```npmignore
npm i react-moment --save
npm install --save moment react-moment
```

근데 요 명령어들은 이제 쓰지 않는것 같았다.



### 해결법

아래 명령어로 moment 라이브러리를 설치하면 된다~!

```npmignore
$ npm i moment
// 또는
$ yarn add moment
```
