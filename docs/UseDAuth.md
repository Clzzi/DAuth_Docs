---
id: UseDAuth
title: DAuth서비스 이용방법
sidebar_position: 6
---


# <a>DAuth서비스 이용방법</a>
### 1. 로그인 하기
![login](/img/DAuth/DAuthLogin.png)

### 2. 자신의 서비스 등록하기
![register](/img/DAuth/RegisterService.png)

### 3. 자신의 서비스 확인하기
![check](/img/DAuth/CheckService.png)


# 

## <a>AccessToken 발급 받는 방법</a>
>**http://dauth.b1nd.com/login?clientId=(클라이언트ID)&redirectUrl=(리다이렉트URL)**으로 연결한다

### 자신의 서비스 이름과 맞는지 확인한다
![checkMyService](/img/DAuth/CheckMyService.png)

### 서버로 로그인시 (redirectURL)?code={코드}로 redirect된다
![serverLogin](/img/DAuth/serverLogin.png)

### 받은 코드로 http://dauth.b1nd.com/api/token 에 POST로 보낸다
![postman](/img/DAuth/postman.png)