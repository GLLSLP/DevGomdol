---
title: '[Git]오류 Your site's DNS settings are using a custom subdomain 해결'
date: 2022-03-28 16:17:00
category: 'Git'
draft: false
---

CNAME을 추가하고나서 배포를 하는데, 이런 에러가 뜨면서 커스텀 도메인과 연결이 되지 않았다.

![](.\images\220328_01.PNG)

# 해결법

DNS연결 방식엔 A레코드 방식와 CNAME방식이 있다.

개츠비 블로그를 도메인과 연결하는 내용을 다루는 포스트에는 대부분 A레코드 방식을 추가하는것에서 끝나는데, 아래 사진처럼 CNAME을 추가하거나 수정하면 된다.

![](.\images\220328_02.PNG)

이렇게 하고나면 에러는 여전히 표시되지만 도메인과 잘 연결된다







<참고>

[Github) We recommend you change this to a CNAME record pointing at [YOUR USERNAME].github.io - hi098123](https://hi098123.tistory.com/210)
