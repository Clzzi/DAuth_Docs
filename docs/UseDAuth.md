---
id: UseDAuth
title: DAuth서비스 이용방법
sidebar_position: 6
---


# <a>DAuth서비스 이용방법</a>
### 1. 로그인 하기
로그인 폼에 ID, PW를 입력해 DAuth서비스에 로그인 한다.
![login](/img/DAuth/DAuthLogin.png)

### 2. 자신의 서비스 등록하기
빨간 박스에 있는 서비스 등록 폼에 정보를 입력하고 자신의 서비스를 등록한다.
![register](/img/DAuth/RegisterService.png)

### 3. 자신의 서비스 확인하기
나의 서비스 탭에서 자신이 등록한 서비스의 정보를 확인한다.
![check](/img/DAuth/CheckService.png)


# 

## <a>AccessToken 발급 받는 방법</a>
자신이 등록한 서비스의 **클라이언트ID** 및 **리다이렉트URL**을 이용하여 아래의 주소로 연결한다.
>**http://dauth.b1nd.com/login?clientId=(클라이언트ID)&redirectUrl=(리다이렉트URL)**

### 자신의 서비스 이름과 맞는지 확인한다
사진상의 빨간 박스에 자신이 등록한 서비스 이름이 뜬다. 맞다면 로그인 폼에 ID, PW를 넣고 로그인 한다.
![checkMyService](/img/DAuth/CheckMyService.png)

### 서버로 로그인 성공시 아래주소로 리다이렉트 된다
>**(redirectURL)?code={코드}**

![serverLogin](/img/DAuth/serverLogin.png)

### 리다이렉트된 주소로 받은 코드를 아래주소에 POST메서드로 보낸다
>**http://dauth.b1nd.com/api/token**

![postman](/img/DAuth/postman.png)