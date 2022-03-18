---
title: '[Git]레포지토리 미러링하기'
date: 2022-02-17 23:56:00
category: 'Git'
draft: false
---


```
git clone --mirror 기존원격레포주소
cd 기존원격레포이름.git
git remote set-url --push origin 새원격레포주소
git push --mirror

```
