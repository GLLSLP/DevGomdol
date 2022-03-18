---
title: "[C#]Dictionary와 Hashtable의 차이점"
date: 2022-03-02 15:34:00
category: 'C#'
draft: false
---
# C# - Dictionary와 Hashtable의 차이점



Dictionary와 Hashtable은 둘다 key, value 쌍을 가진 컬렉션으로, 같은 기능을 가지고 있다.

근데 Dictionary만 사용하고, Hashtable은 사용하면 안된다.



> **이유** 

1. Hashtable은 Dictionary와의 호환을 위해 남아있긴 하지만 오래된 클래스이다. 

2. Dictionary와 호환이 된다 하더라도 완전히 되는게 아니다.

-> (예시) 존재하지 않는 키값을 가져오려고 할때, Hashtable은 null이 발생하고 Dictionary는 예외가 발생한다.



> **결론**

Hashtable은 지원을 끊기 전에 유예기간을 주기위해 남겨둔 클래스라서 이미 사용했다면 언젠간 바꾸는것이 좋고 새로운 프로그램에서는 사용하지 않아야 한다.



