---
id: UseDAuthMobile
title: DAuth서비스 이용방법 - Moblie
sidebar_position: 2
---


# <a>DAuth서비스 이용방법</a>
:::info
 요구사항: 도담도담 안드로이드 최신 버전
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
	implementation 'com.github.mdev-dgsw:dauth_android_v1:1.2'
}
```

### 2. 사용방식
onCreate 메서드에서 **settingForDodam**을 호출하여 **ActivityResultLauncher**를 생성한다.    
이 때, **settingForDodam**은 항상 **Activity**의 **onCreate()** 혹은 **onStart()** 내부에서 호출하여야 한다.
```js
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    val register = settingForDodam(clientId, clientSecret, redirectUrl) 
    // 발급받은 clienId, clientSecret, redirectUrl을 각각 대입
}
```


이어서 다음 코드를 추가한다.     
**loginForDodam**의 파라미터들은 ```ActivityResultLauncher<Intent>, (TokenResponse) -> Unit, (Throwable) -> Unit```이다.    
첫 번째 파라미터에는 위에서 생성한 **ActivityResultLauncher** 객체를 넣어주면 되며, 두 번째, 세 번째 파라미터에는 각각 성공, 실패 처리를 해주면 된다

```javascript
findViewById<Button>(R.id.btn).setOnClickListener {
    loginForDodam(register, {
        // 성공처리
        Toast.makeText(this, it.token, Toast.LENGTH_SHORT).show()
    }, {
        // 실패처리
        Toast.makeText(this, it.message, Toast.LENGTH_SHORT).show()
    })
}
```
성공 시 람다 형식은 **TokenResponse! → Unit**이며,   
TokenResponse는 **token: String**과 **refreshToken: String**을 프로퍼티로 가진 데이터 클래스이다.

### Token사용 방법
```javascript
fun getUser(token: String) {
        compositeDisposable.add(
            getUserInfo(token).observeOn(AndroidSchedulers.mainThread())
                .subscribeOn(Schedulers.io())
                .subscribe({
                    name = it.data.name
                    accessLevel = it.data.accessLevel
                    email = it.data.email
                    grade = it.data.grade
//                  ...
                }, {
                    it.printStackTrace()
                })
        )
    }
```

### 3. 실행결과
# ![DAuth Service Mobile GIF](https://user-images.githubusercontent.com/62810965/125271507-cc9caa80-e345-11eb-929d-e49b966c61d2.gif)

