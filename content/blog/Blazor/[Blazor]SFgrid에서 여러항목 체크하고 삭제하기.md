```yaml
title: '[Blazor]SFgrid에서 여러항목 체크하고 삭제하기'
date: 2022-03-30 14:32:00
category: 'C# & Blazor'
draft: false
```



체크박스를 사용하기 위해선 아래 코드처럼 SFGird에 AllowSelection="true"를 추가하고, GridSelectionSettings과 Type이 Checkbox인 GridColumn을 추가하면 된다.

```razor
<SfGrid @ref="nnewsService.NewsViewGrid" DataSource="@news" TValue="News" AllowSelection="true">
    <GridSelectionSettings CheckboxOnly="true" PersistSelection="true" Type="Syncfusion.Blazor.Grids.SelectionType.Multiple"></GridSelectionSettings>
    <GridColumns>
        <GridColumn Type="ColumnType.CheckBox" AllowFiltering="false" AllowSorting="false" Width="60"></GridColumn>
    </GridColumns>
</SfGrid>
```


