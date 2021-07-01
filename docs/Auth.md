---
id: Auth
title: Auth
sidebar_position: 2
---

# <a>Auth</a>

### ```POST``` 로그인
```bash
http://dauth.b1nd.com/api/auth/login
```

**```Request```**   
> **Body Parameters : **
```json
{
  "id" : string - "id (REQUIRED)"
  "pw" : string - "pw (REQUIRED)"
  "clientId" : string - "발급받은 clientid (REQUIRED)"
  "redirectUrl" : string - "등록된 redirectUrl (REQUIRED)"
}
```

##
**```Response```**
> ```json title="200 : OK"
> {
>   "status": 200,
>   "message": "로그인 성공",
>   "data": {
>     "location": "{redirectUrl}?code=string" 
>   }
> }
> ```

>```json title="400 : Bad Request"
> {
>   "status": 400,
>   "message": "검증 오류"
> }
> ```

>```json title="401 : Unauthorized"
> {
>   "status": 401,
>   "message": "알맞지 않은 id 혹은 비밀번호 입니다"
> }
> ```

>```json title="403 : Forbidden"
> {
>   "status": 403,
>   "message": "회원가입 승인 대기중인 상태 입니다. 승인 후 로그인이 가능합니다"
> }
> ```

>```json title="500 : Internal Server Error"
> {
>   "status": 500,
>   "message": "DAuth 서버 오류"
> }
> ```
