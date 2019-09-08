import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY
});
// S3 upload
const multerVideo = multer({
  // 저장소를 S3로 지정
  storage: multerS3({
    s3,
    acl: "public-read", // Access Control List
    bucket: "wetube-k8440009/video" // bucket : bucketName/storage
  })
});
const multerAvatar = multer({
  // 저장소를 S3로 지정
  storage: multerS3({
    s3,
    acl: "public-read", // Access Control List
    bucket: "wetube-k8440009/avatar" // bucket : bucketName/storage
  })
});

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next(); // next 호출해야 router로 넘어감
};
// 로그 아웃 상태가 되면 join 허용
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};
// 로그인 된 사용자 전용
export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");
