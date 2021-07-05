---
id: Token API
title: 토큰
sidebar_position: 1
---


# <a>API Docs</a>
> **access-token을 발급받기 위한 API   
> 기본 엔드 포인트 ```http://dauth.b1nd.com/api```**

## 토큰
### POST : 토큰 발급받기

**요청 URL**
```bash
http://dauth.b1nd.com/api/token
```

**요청 Body**   
```json
  {
    "code" : "string",
    "clientId" : "string",
    "clientSecret" : "string",
  }
```

###

**응답 Body** 
```json
{
  "status": 200,
  "message": "토큰 생성 완료",
  "data": {
    "token": "string",
    "refreshToken": "string",
  }
}
```

#####

**오류 코드** 
```json
{
  400 : 
    "검증 오류 (잘못된 형식입니다)"
  401 : 
    "잘못된 clientSecret입니다"
  403 : 
    "변조된 code입니다"
  410 : 
    "토큰이 만료 되었습니다"
  500 : 
    "Open API 서버 오류"
}
```

