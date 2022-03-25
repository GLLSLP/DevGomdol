---
title: '[Blazor]SFGrid 테이블에 onclick기능 추가하는법'
date: 2022-03-24 14:34:00
category: 'C# & Blazor'
draft: false

---

1. 아래처럼 OnRecordClick 을 넣어준다.

<SfGrid DataSource="@news" AllowPaging="true">
    <GridPageSettings PageCount="5"></GridPageSettings>
    <GridEvents OnRecordClick="RecordClickHandler" TValue="News"></GridEvents>
    <GridColumns>
        <GridColumn Field=@nameof(News.idx) HeaderText="번호" TextAlign="TextAlign.Right" Width="120"></GridColumn>
        <GridColumn Field=@nameof(News.title) HeaderText="제목" Width="150"></GridColumn>
        <GridColumn Field=@nameof(News.content) HeaderText="내용" Format="d" TextAlign="TextAlign.Right" Width="130"></GridColumn>
        <GridColumn Field=@nameof(News.date) HeaderText="날짜" Format="d" TextAlign="TextAlign.Right" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

<SfGrid DataSource="@news" AllowPaging="true">
    <GridPageSettings PageCount="5"></GridPageSettings>
    <GridEvents OnRecordClick="RecordClickHandler" TValue="News"></GridEvents>
    <GridColumns>
        <GridColumn Field=@nameof(News.idx) HeaderText="번호" TextAlign="TextAlign.Right" Width="120"></GridColumn>
        <GridColumn Field=@nameof(News.title) HeaderText="제목" Width="150"></GridColumn>
        <GridColumn Field=@nameof(News.content) HeaderText="내용" Format="d" TextAlign="TextAlign.Right" Width="130"></GridColumn>
        <GridColumn Field=@nameof(News.date) HeaderText="날짜" Format="d" TextAlign="TextAlign.Right" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

<SfGrid DataSource="@news" AllowPaging="true">
    <GridPageSettings PageCount="5"></GridPageSettings>
    <GridEvents OnRecordClick="RecordClickHandler" TValue="News"></GridEvents>
    <GridColumns>
        <GridColumn Field=@nameof(News.idx) HeaderText="번호" TextAlign="TextAlign.Right" Width="120"></GridColumn>
        <GridColumn Field=@nameof(News.title) HeaderText="제목" Width="150"></GridColumn>
        <GridColumn Field=@nameof(News.content) HeaderText="내용" Format="d" TextAlign="TextAlign.Right" Width="130"></GridColumn>
        <GridColumn Field=@nameof(News.date) HeaderText="날짜" Format="d" TextAlign="TextAlign.Right" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

<SfGrid DataSource="@news" AllowPaging="true">
    <GridPageSettings PageCount="5"></GridPageSettings>
    <GridEvents OnRecordClick="RecordClickHandler" TValue="News"></GridEvents>
    <GridColumns>
        <GridColumn Field=@nameof(News.idx) HeaderText="번호" TextAlign="TextAlign.Right" Width="120"></GridColumn>
        <GridColumn Field=@nameof(News.title) HeaderText="제목" Width="150"></GridColumn>
        <GridColumn Field=@nameof(News.content) HeaderText="내용" Format="d" TextAlign="TextAlign.Right" Width="130"></GridColumn>
        <GridColumn Field=@nameof(News.date) HeaderText="날짜" Format="d" TextAlign="TextAlign.Right" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

<SfGrid DataSource="@news" AllowPaging="true">
    <GridPageSettings PageCount="5"></GridPageSettings>
    <GridEvents OnRecordClick="RecordClickHandler" TValue="News"></GridEvents>
    <GridColumns>
        <GridColumn Field=@nameof(News.idx) HeaderText="번호" TextAlign="TextAlign.Right" Width="120"></GridColumn>
        <GridColumn Field=@nameof(News.title) HeaderText="제목" Width="150"></GridColumn>
        <GridColumn Field=@nameof(News.content) HeaderText="내용" Format="d" TextAlign="TextAlign.Right" Width="130"></GridColumn>
        <GridColumn Field=@nameof(News.date) HeaderText="날짜" Format="d" TextAlign="TextAlign.Right" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

<SfGrid DataSource="@news" AllowPaging="true">
    <GridPageSettings PageCount="5"></GridPageSettings>
    <GridEvents OnRecordClick="RecordClickHandler" TValue="News"></GridEvents>
    <GridColumns>
        <GridColumn Field=@nameof(News.idx) HeaderText="번호" TextAlign="TextAlign.Right" Width="120"></GridColumn>
        <GridColumn Field=@nameof(News.title) HeaderText="제목" Width="150"></GridColumn>
        <GridColumn Field=@nameof(News.content) HeaderText="내용" Format="d" TextAlign="TextAlign.Right" Width="130"></GridColumn>
        <GridColumn Field=@nameof(News.date) HeaderText="날짜" Format="d" TextAlign="TextAlign.Right" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

<SfGrid DataSource="@news" AllowPaging="true">
    <GridPageSettings PageCount="5"></GridPageSettings>
    <GridEvents OnRecordClick="RecordClickHandler" TValue="News"></GridEvents>
    <GridColumns>
        <GridColumn Field=@nameof(News.idx) HeaderText="번호" TextAlign="TextAlign.Right" Width="120"></GridColumn>
        <GridColumn Field=@nameof(News.title) HeaderText="제목" Width="150"></GridColumn>
        <GridColumn Field=@nameof(News.content) HeaderText="내용" Format="d" TextAlign="TextAlign.Right" Width="130"></GridColumn>
        <GridColumn Field=@nameof(News.date) HeaderText="날짜" Format="d" TextAlign="TextAlign.Right" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

```razor
<SfGrid DataSource="@news" AllowPaging="true">
    <GridPageSettings PageCount="5"></GridPageSettings>
    @*추가*@
    <GridEvents OnRecordClick="RecordClickHandler" TValue="News"></GridEvents>
    @*---*@
    <GridColumns>
        <GridColumn Field=@nameof(News.idx) HeaderText="번호" TextAlign="TextAlign.Right" Width="120"></GridColumn>
        <GridColumn Field=@nameof(News.title) HeaderText="제목" Width="150"></GridColumn>
        <GridColumn Field=@nameof(News.content) HeaderText="내용" Format="d" TextAlign="TextAlign.Right" Width="130"></GridColumn>
        <GridColumn Field=@nameof(News.date) HeaderText="날짜" Format="d" TextAlign="TextAlign.Right" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>
```

2. 코드란에 RecordClickHandler를 추가하고 클릭시 발생할 이벤트를 작성한다.

```razor
@code {
    List<News> news;
    protected override async Task OnInitializedAsync()
    {
        news = await Task.Run(() => nnewsService.GetAllNewsAsync());
    }

    //추가
    public void RecordClickHandler(RecordClickEventArgs<News> args)
    {
        // 여기에 클릭시 발생할 이벤트 작성
    }
}
```
