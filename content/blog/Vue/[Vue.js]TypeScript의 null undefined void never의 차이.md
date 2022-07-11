---
title: "[Vue.js]TypeScript의 null, undefined, void, never의 차이"
date: 2022-05-30 17:19:00
category: 'Vue.js'
draft: false
---

## null과 undefined

두가지 모두 값의 부재를 표현하지만 의미가 조금 다르다.

- undefined : 아직 값을 변수에 할당하지 않음

- null : 값이 없음





## void와 never

- void : return 문을 포함하지 않는 함수 (예시: console.log())

- never : 절대 반환하지 않는 함수 (예시: 예외를 던지거나 영원히 실행)

```ts
//void를 반환하는 함수
function a(){
    let a = 2+2
    let b = a*a
}

//never를 반환하는 함수 1
function b(){
    throw TypeError('I always error')
}


//never를 반환하는 함수 2
function c(){
    while (true){
    doSomething()
    }
}
```
