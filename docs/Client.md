---
id: Client
title: Client
sidebar_position: 1
---

### ```POST``` Client 이름 확인
```bash
http://dauth.b1nd.com/api/client/name
```

**```Request```**   
> **Body Parameters : **
```json
{
  "clientName" : string - "client 이름 (REQUIRED)"
}
```

##
**```Response```**
> ```json title="200 : OK"
> {
>   "status" : 200,
>   "message" : "사용 가능한 이름입니다"
> }
> ```

>```json title="400 : Bad Request"
> {
>   "status" : 400,
>   "message" : "이미 등록되어 있는 클라이언트 입니다"
> }
> ```

>```json title="500 : Internal Server Error"
> {
>   "status" : 500,
>   "message" : "DAuth 서버 오류"
> }
> ```

- - -

### ```POST``` Client 가입
```bash
http://dauth.b1nd.com/api/client/register
```

**```Request```**   
> **Body Parameters : **
> ```json
> {
>  "dodamId" : string - "도담도담 id (REQUIRED)"
>  "clientName" : string - "client 이름 (REQUIRED)"
>  "clientUrl" : string - "client의 dodamUrl (REQUIRED)"
>  "redirectUrl" : string - "redirect될 url (REQUIRED)"
> }
> ```

##
**```Response```**
> ```json title="200 : OK"
> {
>   "status" : 201,
>   "message" : "회원가입 성공",
>   "data" : {
>     "dodamId": "string",
>     "clientName": "string",
>     "clientUrl": "string",
>     "redirectUrl": "string",
>     "clientId": "string",
>     "clientSecret": "string"
>   }
> }
> ```

>```json title="403 : Forbidden"
> {
>   "status" : 403,
>   "message" : "이미 등록되어 있는 클라이언트 입니다"
> }
> ```

>```json title="500 : Internal Server Error"
> {
>   "status" : 500,
>   "message" : "DAuth 서버 오류"
> }
> ```

- - -

### ```GET``` 모든 Client 조회
```bash
http://dauth.b1nd.com/api/client
```

**```Response```**
> ```json title="200 : OK"
> {
>   "status" : 200,
>   "message" : "모든 클라이언트 조회 완료",
>   "data" : [
>     {
>       "clientName": "string",
>       "clientUrl": "string"  
>     }
>   ]
> }
> ```

>```json title="500 : Internal Server Error"
> {
>   "status" : 500,
>   "message" : "DAuth 서버 오류"
> }
> ```

##

