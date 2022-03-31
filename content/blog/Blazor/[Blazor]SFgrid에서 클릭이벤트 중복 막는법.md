---
title: '[Blazor]SFgrid에서 클릭이벤트 중복 막는법'
date: 2022-03-31 16:27:00
category: 'C# & Blazor'
draft: false
---

아래 표에서 체크박스만 클릭하고 싶었는데 레코드를 클릭했을때 발생하는 이벤트도 함께 발생했다.

![](.\images\220331_01.PNG)



이벤트 중복 발생을 막으려면 해당 표의 RecordClickHandler안에 if문을 추가하면 된다.

```cs
public void RecordClickHandler(RecordClickEventArgs<Models.Exam> args)
{
    if (args.CellIndex == 0)
        return;
    //이 아래론 레코드 클릭 이벤트..
}      
```

여기서 CellIndex란 n번째 열을 말한다.

0에서부터 시작하기 때문에 내 표에선 체크박스일때 0, 번호일때 1, 제목일때 2... 값을 갖게된다. 