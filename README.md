# WeTube

Cloning Youtube with Vanilla and NodeJS

- [ ] Home
- [x] Join
  1. 일반 회원 가입 [x]
  2. 깃 허브 회원 가입 [x]
  3. 다른 회원 가입
- [x] login
  1. 로그인 구현 [x]
  2. public, private 접근 [x]
- [x] Search
- [ ] User Detail
- [ ] Edit Profile
- [ ] Change Password
- [ ] Upload
- [ ] Video Detail
- [ ] Edit video

## MiddleWare

- Mongoose
- dotenv
- nodemon
- Passport : 가입, 로그인
  1. serialization : 어떤 filed가 쿠키에 포함될 것인지 알려주는 역할
  2. deserialize : 쿠키의 정보를 어떻게 사용자로 전환하는가?
     ※ 참고 : https://github.com/saintedlama/passport-local-mongoose
- express-session : session 정보
- connect-mongo : DB에 session 저장

## DB

- mongoDB

## Execute

- npm run dev:servers
- npm run dev:assets
