---
title: '[C#]List 사용법'
date: 2022-04-11 15:12:00
category: 'C# & Blazor'
draft: false
---

##### 리스트 선언

```cs
List<Test> list = new List<Test>();
```



##### 자주쓰는 프로퍼티와 함수

```cs
list.add(값); //추가
list.remove(값);//삭제 (중복이 있을땐 첫번째 요소만 삭제)
list.clear(); //전부 삭제
list.sort(); //오름차순 정렬
list.reverse(); //내림차순 정렬
list.contain(값); //주어진 값이 있으면 true 반환
```



##### 두 개의 리스트를 합치기

```cs
A_list.AddRange(B_list);
```



##### 리스트 중복 제거

```cs
list = list.Distinct().ToList();
```



##### 배열을 리스트로

```cs
List<int> list = arr.ToList();
```



##### 리스트를 배열로

```cs
int[] arr = testList.ToArr();
```