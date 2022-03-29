---
title: '[Git]오류 This repository is over its data quota 해결법'
date: 2022-03-29 15:41:00
category: 'Git'
draft: false
---

용량이 큰 프로젝트를 깃헙에 올리려고 git lfs를 설치했는데, 커밋까지 잘 하고나서 푸시를 하려니까 이런 오류가 뜨면서 안됐다.

```
This repository is over its data quota. Account responsible for LFS bandwidth should purchase more data packs to restore access.
error: failed to push some refs to '{repo url}'
```



### 원인

git lfs는 대용량 파일을 관리해줘서 편리하지만 무제한으로 사용할수 없다.

한달에 1G까지만 무료이고 그 이상은 결제를 해야한다!

깃헙 계정의 Settings->Billing and plans에 들어가면 이 달의 잔여용량을 볼수 있다..

![](.\images\220329_01.PNG)



### 해결법

방법 1. Add more data를 클릭해서 결제를 한다(월 5달러에 50GB제공)

방법 2. git lfs로 관리할 파일을 적절히 선택해 1기가가 넘지 않도록 한다(나머지 파일은 gitignore에 추가하기)