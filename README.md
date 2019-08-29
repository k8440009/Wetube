# WeTube

Cloning Youtube with Vanilla and NodeJS

- [ ] Home
- [x] Join
  1. 일반 회원 가입 [x]
  2. 깃 허브 회원 가입 [x]
  3. 페이스북 회원 가입 [x]
- [x] login
  1. 로그인 구현 [x]
  2. public, private 접근 [x]
- [x] Search
- [ ] User Detail
- [x] Edit Profile
  1. scss 추가 [x]
  2. 프로필 수정 [x]
  3. 비밀번호 수정 [x]
- [x] Upload
- [x] Video Detail
  1. scss 추가 [x]
  2. 올린 사람 추가 [x]
  3. 비디오 수정 추가 [x]
- [] Video Player
  1. scss 추가 [x]
  2. 실행/멈춤 [x]
  3. 음소거 [x]
  4. 풀 스크린 [x]
  5. 현재시간/전체시간 [x]
  6. 볼륨바 []

## MiddleWare

- Mongoose
- dotenv
- nodemon
- body-parser : body로부터 파라매터를 편리하게 추출
- multer : 파일 업로드
- Passport : 가입, 로그인

  1. serialization : 어떤 filed가 쿠키에 포함될 것인지 알려주는 역할
  2. deserialize : 쿠키의 정보를 어떻게 사용자로 전환하는가?
  3. passport 과정
     - 아이디 있는지 확인
     - gitHub 웹 사이트(auth) -> /auth/github.callback
     - githubLoginCallback(profile) => cb(null,user) / cb(error)
     - 쿠키 생성(user), 쿠기 저장, 쿠키를 브라우저에 보냄(savedCookie)
       ※ 참고 : https://github.com/saintedlama/passport-local-mongoose <br/>

- express-session : session 정보
- connect-mongo : DB에 session 저장
- localtunnel : http인 localhost -> https localhost로 보이게 만듬

## DB

- mongoDB

## Execute

- npm run dev:servers
- npm run dev:assets
