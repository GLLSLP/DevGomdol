---
emoji: 🌊🦦
title: ESLint란? +사용법
date: '2022-05-06 17:50:00'
author: 곰덜
tags: Vue
categories: Vue
---

## 🧊ESLint란?

javascript나 typescript의 코드를 실행하지 않고도 오류를 발견해 알려주는 Node.js 패키지이다.



## ⛵설치방법

1. ESLint 설치

아래 명령어중 하나를 골라 설치하면 된다.

``` js
// 현재 폴더에 설치하고 싶을 때(package.json의 devDependencies에 추가됨)
npm i -d eslint

// 컴퓨터에 설치하고 싶을 때
npm i -gd eslint
```

설치된 ESLint의 버전을 확인하고싶으면 아래 명령어를 입력하면 된다.

``` js
// 현재 폴더에 설치되어있을 때
node_modules/.bin/eslint -v

// 컴퓨터에 설치되어있을 때
eslint -v
```



2. ESLint 설정파일 만들기 ( .eslintrc.json )

``` json
// 현재 폴더에 설치되어있을 때
node_modules/.bin/eslint --init


//컴퓨터에 설치되어있을 때
eslint --init


<실행시 선택지>
1. How would you like to use ESLint? ( 어디에 ESLint를 사용하실 건가요? )

> To check syntax only ( 문법 오류만 체크 )
> To check syntax and find problems ( 문법 오류, 에러 체크 )
> To check syntax, find problems, and enforce code style ( 문법 오류, 에러 체크, 코드 예쁘게 정리 )


2. What type of modules does your project use? ( 어떤 타입의 모듈을 사용하실 건가요? )

> Javascript modules (import/export) ( 자바스크립트 모듈 형식 )
> CommonJS (require/exports) ( 바닐라 자바스크립트 형식 )
> None of these ( 설정안함 )


3. Which framework does your project use? ( 어떤 프레임워크를 사용하시나요? )

> React
> Vue.js
> None of these ( 설정안함 )


4. Does your project use Typescript? ( 타입스크립트를 사용하시나요? )

> No / Yes


5. Where does your code run? ( 코드가 어떤 환경에서 실행되나요? )

> Browser ( 브라우저 )
> Node ( Node.js )


6. What format do you want your config file to be in? ( 설정파일을 어떤 형식으로 만들까요? )

> Javascript
> YAML
> JSON


7. Would you like to install them now with npm? ( 지금바로 npm으로 설치할까요? )

> No / Yes
```



3. ESLint 적용

```
eslint 적용할파일
```

이 명령어를 쓰면 해당 파일에 오류가 없는지 검사해준다~!



```toc

```
