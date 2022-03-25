---
title: '[C#]region이란'
date: 2022-03-10 11:55:00
category: 'C# & Blazor'
draft: false
---

region은 endregion와 한쌍으로 써야한다.

region과 endregion 사이에 있는 코드들을 펼쳤다 접었다 할 수 있게 되어 긴 코드 블록을 짧은 블록으로 만들 수 있다.

그래서 작업이 끝난 부분을 그룹으로 묶어 닫아두면 현재 작업에 집중할 수 있게 된다.

왼쪽 그림처럼 region 뒤에 그룹 이름을 적고 endregion으로 묶어두면 오른쪽 그림처럼 접을 수 있다.

![220310_01.png](.\images\220310_01.png)

![220310_02.png](.\images\220310_02.png)