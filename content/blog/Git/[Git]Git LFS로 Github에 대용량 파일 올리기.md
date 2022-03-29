---
title: '[Git]Git LFS로 Github에 대용량 파일 올리기'
date: 2022-03-29 15:39:00
category: 'Git'
draft: false
---

Github에 100Mb가 넘어가는 파일을 푸시하려고 하면 에러메세지가 뜬다.

큰 파일을 푸시하려면 git LFS라는 Extension을 사용해야한다.



### 사용방법

git bash를 이용할때와 소스트리를 이용할때 두가지 모두 작성했다.



#### 1. GIT LFS 설치

- git bash일때

```
git lfs install
```

- Source Tree일때

저장소->Git LFS->저장소 초기화에 들어가서 'Start Using Git LFS' 클릭

![](C:\Github\Fixed\content\blog\Git\images\220329_02.png)



#### 2. LFS로 관리할 파일 지정

- git bash일때

아래 명령어로 파일들을 지정한 다음

```
// 확장자 명으로 지정하기
git lfs track "*.확장자명"

// 특정 파일 지정하기
git lfs track "images/sample.jpg"
```

.gitattribures 파일을 추가해준다.

```
git add .gitattributes
```



- Source Tree일때

'추가'버튼을 눌러서 추적할 확장자명을 추가하고나서 '파일추적'버튼을 누르면 .gitattributes파일이 생성된다.

![](C:\Github\Fixed\content\blog\Git\images\220329_03.PNG)