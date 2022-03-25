---
title: '에러 Method Create in type Microsoft.EntityFrameworkCore.SqlServer.Query.Internal.SqlServerSqlTranslatingExpressionVisitorFactory from assembly 해결법'
date: 2022-03-04 15:46:00
category: 'C# & Blazor'
draft: false
---

NuGet패키지 버전이 맞지 않을때 생기는 오류이다.

나같은 경우 아래 패키지들중에 5.x.x버전과 3.x.x버전이 섞여있을때 에러가 발생해서 모두 5.0.7로 맞춰줬더니 해결되었다.

