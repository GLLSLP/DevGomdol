---
title: '[Git]stash란'
date: 2022-02-21 20:34:00
category: 'Git'
draft: false
---

하던 작업을 임시로 저장 해두고 싶을 때 사용하는 명령어   

작업 도중 잠시 다른 브랜치로 변경해야할때, 아직 완성되지 않은 일을 commit하기에는 껄끄럽다.   

git stash는 아직 마무리하지 않은 작업을 잠시 스택에 저장하는 명령어이다.   

이를통해 마무리 하지 않은 일을 commit하지 않고도 다시 꺼내와 작업할 수 있다.   



- stash 명령어 모음

가장 많이쓰이는 두가지   

git stash (= git stash save) : 하던 작업을 임시저장하기   

git stash pop 또는 git stash apply : 저장되어있는 작업 중 가장 최근 stash를 가져온다. (이후 pop은 리스트에서 삭제하고, apply는 남겨둠)   



- 그 외 알아두면 좋은 명령어들

git stash list : stash리스트가 보여지며, 0번째가 가장 최신이다.   

git stash drop : 가장 최신 stash를 삭제한다.   

git stash drop stash@{0} : 0번째 stash를 삭제한다.   

git stash clear : stash를 모두 삭제한다.   



- 사용 흐름

A브랜치에서 작업중이었는데, B브랜치에 문제가 있어 잠시 다녀와야할때.   

: A브랜치에서 git stash -> B브랜치로 체크아웃 후 문제해결 -> A브랜치로 체크아웃 후 git stash pop(또는 git stash apply)   