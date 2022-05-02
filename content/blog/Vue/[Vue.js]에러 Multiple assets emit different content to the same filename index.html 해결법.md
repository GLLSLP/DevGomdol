---
title: "[Vue.js]에러 Multiple assets emit different content to the same filename index.html 해결법"
date: 2022-05-02 17:50:00
category: 'Vue.js'
draft: false
---

yarn serve로 실행시켰더니 'Multiple assets emit different content to the same filename index.html'라는 에러가 떴다.

### 해결법

Vue 프로젝트 폴더 이름에 ()와 같은 특수문자가 들어있으면 안된다.

나같은 경우엔 중복 프로젝트가 있어서 폴더명 뒤에 (1)이 붙어있던게 원인이었다!
