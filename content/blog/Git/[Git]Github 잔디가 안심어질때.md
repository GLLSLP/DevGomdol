---
title: '[Git]Github 잔디가 안심어질때'
date: 2022-04-05 17:34:00
category: 'Git'
draft: false
---

### 원인

: Git config에 등록된 이메일과 Github이메일이 달라서 그렇다.

​

Git cmd에서 **git config --list**를 입력하면 저 부분이 Github 이메일과 다른걸 확인할 수 있다.

![](C:\Github\Fixed\content\blog\Git\images\220405_01.png)

참고로 Github 이메일주소는 Settings -> Emails에서 확인할 수 있다.

![](C:\Github\Fixed\content\blog\Git\images\220405_02.png)



### 해결법

```git
git config --global user.email 깃헙이메일주소
```

이 명령어를 치고 다시 커밋후 푸시해보면 잔디가 잘 심어진다.