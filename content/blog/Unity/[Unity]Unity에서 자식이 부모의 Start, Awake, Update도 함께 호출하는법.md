---
title: '[Unity]Unity에서 자식이 부모의 Start, Awake, Update도 함께 호출하는법'
date: 2022-04-10 23:48:00
category: 'Unity'
draft: false
---

부모에 protected virtual를 붙여 가상함수로 만들고, 
자식은 base.Start()나 base.Awake()나 base.Update()로 호출한다.

밑에처럼 하면 자식의 Start가 호출될때 부모의 Start도 같이 호출된다.


- 부모
```
public class Parent : MonoBehaviour
{
    protected virtual void Start()
    {
        print("Start : Parent");
    }
}
```

- 자식
```
public class Child : Parent
{
    void Start()
    {
        print("Start : Child");
    }
}
```