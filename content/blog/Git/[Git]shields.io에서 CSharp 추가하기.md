---
title: "[Git]shields.io에서 C# 추가하기"
date: 2022-05-07 02:22:00
category: 'Git'
draft: false
---

리드미에 이렇게 뱃지를 만들어서 추가하고있었는데 C#만 유독 안먹혔다

![](.\images\220507_01.PNG)

### 해결법

'#'문자는 %23으로 대체하고, 공백은 %20으로 대체해야한다.

그래서 표시될 글자가 들어갈 부분엔 C%23이라고 쓰고, 뱃지 이름인 'C Sharp'가 들어갈 부분엔 C%20Sharp라고 써야한다.

결론은 그냥 아래처럼 쓰면 된다!

```md
![C Sharp](http://img.shields.io/badge/-C%23-239120?style=flat-square&logo=C%20Sharp&logoColor=ffffff)
```

![](.\images\220507_02.PNG)

C#도 잘 추가됐다!