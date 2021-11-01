---
id: RefreshToken API
title: 리프레쉬 토큰
sidebar_position: 2
---


# <a>API Docs</a>
> **access-token을 다시 발급받기 위한 API   
> 기본 엔드 포인트 ```http://dauth.b1nd.com/api```**

## 리프레쉬 토큰
### POST : 토큰 다시 발급받기

**요청 URL**
```bash
http://dauth.b1nd.com/api/token/refresh
```

**요청 Body**   
```json
  {
    "refreshToken" : "string",
    "clientId" : "string",
  }
```

###

**응답 Body** 
```json
{
  "access_token": "string",
  "token_type": "string",
  "expries_in": "string",
}
```

#####

**오류 코드** 
```json
{
  400 : 
    "잘못된 토큰입니다"
  401 : 
    "위조된 토큰입니다"
  404 : 
    "찾을 수 없는 회원입니다"
  410 : 
    "토큰이 만료 되었습니다"
  500 : 
    "Open API 서버 오류"
}
```

