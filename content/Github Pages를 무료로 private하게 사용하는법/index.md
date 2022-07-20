---
emoji: 🧼
title: Gatsby 블로그를 무료로 private하게 배포하는법🍸
date: '2022-07-19 10:52:00'
author: 곰덜
tags: Git
categories: Git featured
---

## 🥑개요

Github Pages는 무료 정적 웹페이지 호스팅 서비스로, Gatsby나 Jekyll을 이용하면 쉽게 웹사이트를 만들 수 있다!🥳

일반 사용자는 저장소가  `public`상태여야만 배포 할 수 있고, `private`로 배포하려면 Github Pro(월 $7)를 결제해야한다..😦💸

**Github Pages의 특성상, 레포지토리 이름만 알면 그 사이트에** `사용자이름.github.io/레포지토리명`**으로 접속할 수 있기 때문에 해당 Github에 들어오는 사람 모두에게 사이트 주소가 공개되는 것이다.**

그래서 이를 막기위한 방법을 생각하게 되었다!🥰

지금부터 Gatsby 블로그를 👻몰래👻 배포해보자~!! 🤺



## 🍰방법?

*Gatsby를 기준으로 작성했습니다. Jekyll을 사용하시는 분들은 참고만 해주세요* 



#### 1. 기존의 Gatsby 배포 방식

Gatsby로 사이트를 만들면 `main`과  `gh-pages` 이렇게 두개의 브랜치가 필요하게 된다.

`main`브랜치엔 우리가 작성한 내용이 올라가고 `gh-pages`는 빌드된 내용들이 올라가는 것이다.

Github Pages는 `gh-pages`의 내용을 호스팅한다!



#### 2. 기존의 배포방식을 개선하기

Github Pages가 `gh-pages`의 내용을 호스팅한다는건, `main`브랜치는 private이어도 된다는 뜻이다!

그래서 **저장소를 두개 만든다음 private 저장소엔** `main`**브랜치만 저장하고, public 저장소엔** `gh-pages`**브랜치만 저장해도 된다.**

이렇게하면 읽기 좋게 쓰여진 Markdown 파일을 다른사람들이 바로 읽지 못하게 한다는 장점이 있지만, 배포를 담당하는 저장소 이름이 여전히 노출되기때문에 `사용자이름.github.io/레포지토리명`으로 접속할 수 있음엔 변함이 없다.

이제 3번으로 넘어가자



#### 3. Github 계정 두개를 활용하기

그래서 Github계정을 두 개 활용하기로 했다

평상시에 활발히 사용하는 **주 계정**과 배포용 **부 계정**을 만들었다.

**주 계정**엔 private로  `main`소스를 올리고, **부 계정**의 `gh-pages`가 public으로 업데이트되게 했다.

이렇게하면 **부 계정**의 아이디를 알리지 않는 이상 아무도 모르게 사이트를 만들 수 있고, **주 계정**에는 글을 올릴때마다 잔디가 심어지게 된다!🌱🌱🌱🌱🌱



## 💖시작하기

#### 1. SSH KEY 발급 및 등록

한 컴퓨터에서 두개 이상의 Github 계정을 사용할땐 `SSH KEY`를 발급받아 등록해야만 Clone, Pull, Push와 같은 작업을 정상적으로 할 수 있다!

본계정을 이미 클론받아서 사용하고있다면, 부계정만 SSH KEY를 만들면 된다.



#### 2. gatsby-config.js 수정

`pathPrefix`를 추가해주어야 한다.

아래처럼 추가해주면 된다!

```js
module.exports = {
  pathPrefix: '/배포용저장소명',
}
```

#### 

#### 3. package.json 수정

gatsby build 뒤에 `--prefix-paths`를 추가하고, gh-pages 뒤에 `-r 배포용레포지토리주소 -b main`을 추가한다.

여기서 레포지토리 주소는 꼭 **SSH주소**여야한다!

나같은 경우 이렇게 작성했다.

```js
"deploy": "gatsby clean && gatsby build --prefix-paths && gh-pages -d public -r 저장소SSH주소 -b main",
```

```toc

```
