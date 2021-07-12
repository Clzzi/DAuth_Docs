---
id: UseDAuthMobile
title: DAuth서비스 이용방법 - Moblie
sidebar_position: 2
---


# <a>DAuth서비스 이용방법</a>
:::info
 요구사항: RxJava2, 도담도담 안드로이드 최신 버전
:::

### 1. 프로젝트 설정
먼저 Root Gradle을 다음과 같이 변경한다
```javascript
allprojects {
    repositories {
        ...
        maven { url 'https://jitpack.io' } // Add This
    }
}
```
그리고 다음의 dependencies를 추가한다
```javascript
dependencies {
	implementation 'com.github.mdev-dgsw:dauth_android_v1:1.1'
  
	// ReactiveX
	implementation "io.reactivex.rxjava2:rxjava:2.2.19"
	implementation "io.reactivex.rxjava2:rxandroid:2.1.1"
}
```

### 2. 사용방식
onCreate 메서드에서 **settingForDodam**과 **CompositeDisposable** 객체를 만든다.   
이 때, settingForDodam은 **항상 onCreate() 혹은 onStart()에서 호출**하여야 한다.
```javascript
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    val register = settingForDodam(clientId, clientSecret, redirectUrl) 
    // 발급받은 clienId, clientSecret, redirectUrl을 각각 대입

    val compositeDisposable = CompositeDisposable()

}
```

이어서 다음 코드를 추가한다
```javascript
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    val register = settingForDodam(clientId, clientSecret, redirectUrl) 
    // 발급받은 clienId, clientSecret, redirectUrl을 각각 대입

    val compositeDisposable = CompositeDisposable()

}
```
성공 시 람다 형식은 **TokenResponse! → Unit**이며,   
TokenResponse는 **token: String**과 **refreshToken: String**을 프로퍼티로 가진 데이터 클래스이다.


### 3. 실행결과
# ![DAuth Service Mobile GIF](https://user-images.githubusercontent.com/62810965/125271507-cc9caa80-e345-11eb-929d-e49b966c61d2.gif)

