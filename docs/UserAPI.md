---
id: User API
title: 유저
sidebar_position: 2
---


# <a>API Docs</a>
> **access-token을 이용하여 사용할 수 있는 API요청 리스트   
> 기본 엔드 포인트 ```http://open.dodam.b1nd.com/api```**

## 유저
### GET : 유저 정보 가져오기

**요청 URL**
```bash
http://open.dodam.b1nd.com/api/user
```

**요청 Header**   
> Authorization : 로그인 후 발급받은 토큰

```json
  {
    "Authorization" : "Bearer " + token
  }
```

###

**응답 Body** 
```json
{
  "status": 200,
  "message": "유저 조회 성공",
  "data": {
    "uniqueId": "고유 ID (string)",
    "grade": "학년 (int)",
    "room": "반 (int)",
    "number": "번호 (int)",
    "name": "이름 (string)",
    "profileImage": "프로필 사진 (string(url))",
    "accessLevel": "회원 분류 (1: 학생, 2: 선생님, 3: 관리자)",
    "email": "이메일 (string)"
  }
}
```

#####

**오류 코드** 
```json
{
  400 : 
    "토큰이 전송되지 않았습니다"
  401 : 
    "위조된 토큰입니다"
  403 : 
    "유저를 찾을 수 없습니다"
  410 : 
    "토큰이 만료 되었습니다"
  500 : 
    "Open API 서버 오류"
}
```

