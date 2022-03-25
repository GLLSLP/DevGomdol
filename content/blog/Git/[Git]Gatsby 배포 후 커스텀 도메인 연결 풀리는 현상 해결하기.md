---
title: 'Gatsby 배포 후 커스텀 도메인 연결 풀리는 현상 해결하기'
date: 2022-02-21 20:34:00
category: 'Git'
draft: false
---

npm run deploy를 하고나서 개인 도메인과 연결이 끊기게 되었다.

알고보니 Github에서 커스텀 도메인을 CNAME이라는 파일을 참조하여 설정하는데, Gatsby에서 빌드할때 이 CNAME 파일을 생성하지 않아 커밋할때 마다 파일이 삭제되어 커스텀 도메인 설정이 풀리게 된 것이다.

## 해결방법

1. 패키지 설치
   
   ```
   $ npm install gatsby-plugin-cname
   ```

2. gatsby-config.js 파일 수정
   
   ```
   module.exports = {
     siteMetadata: {
       siteUrl: "https://커스텀 도메인 주소",
     },
     plugins: [
     `gatsby-plugin-cname`,
     ],
   };
   ```

3. 결과확인
