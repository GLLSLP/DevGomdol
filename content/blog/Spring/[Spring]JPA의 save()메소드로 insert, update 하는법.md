---
title: "[Spring]JPA의 save()메소드로 insert, update 하는법"
date: 2022-06-30 23:00:00
category: 'JAVA & Spring'
draft: false 
---

### JpaRepository.save()란?

JpaRepository.save()가 어떤 함수인지 알아보자면~

```java
public S save(S entity) {
    if (entityInformation.isNew(entity)) {
        em.persist(entity);
        return entity;
    } else {
        return em.merge(entity);
    }
}
```

entity가 새로 만들어진거면 persist를, 아니면 merge를 호출한다.



persist는 select후에 update나 insert를 수행하고

merge는 insert만 수행한다.



persist같은경우 select를 먼저 하고 나서 DB에 있으면 update를, 없으면 insert를 한다.

만약 추가하려는 Entity가 새로운것이 확실하면 merge를 쓰는게 효율적이다.



결론 : JpaRepository.save()를 쓸거면 persist랑 merge를 신경안써도되지만 안쓸거면 두개를 구분해서 사용해야한다

하지만 나는 JpaRepository.save()를 쓸거라서 save()로 어떻게 insert와 update를 구분하는지 써보았다~



### save()로 insert와 update를 구분하는방법

save()와 insert를 구분하는건 아주 간단하다.

User를 예로 들었을때, User를 새로 만든후에 save()하면 insert가 되는거고, 

DB에 있는 기존의 User를 불러와서 값을수정한뒤 save()하면 update가 되는거다!

```java
//insert할때
User user = new User();
user.setId("id");
user.setPw("pw");
userRepository.save(user);

//update할때
User user = userRepository.findByEmail(email);
user.setPw("newPw");
userRepository.save(user);
```



이건 참고로 올리는 UserRepository

save()는 UserRepository가 JpaRepository를 상속받아서 쓰고있는거다!

```java
@Repository
public interface UserRepository extends JpaRepository <User, Long> {
    User findByEmail(String email);
}
```


