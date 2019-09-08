"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadAvatar = exports.uploadVideo = exports.onlyPrivate = exports.onlyPublic = exports.localsMiddleware = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _multerS = _interopRequireDefault(require("multer-s3"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var s3 = new _awsSdk["default"].S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY
}); // S3 upload

var multerVideo = (0, _multer["default"])({
  // 저장소를 S3로 지정
  storage: (0, _multerS["default"])({
    s3: s3,
    acl: "public-read",
    // Access Control List
    bucket: "wetube-k8440009/video" // bucket : bucketName/storage

  })
});
var multerAvatar = (0, _multer["default"])({
  // 저장소를 S3로 지정
  storage: (0, _multerS["default"])({
    s3: s3,
    acl: "public-read",
    // Access Control List
    bucket: "wetube-k8440009/avatar" // bucket : bucketName/storage

  })
});

var localsMiddleware = function localsMiddleware(req, res, next) {
  res.locals.siteName = "WeTube";
  res.locals.routes = _routes["default"];
  res.locals.loggedUser = req.user || null;
  next(); // next 호출해야 router로 넘어감
}; // 로그 아웃 상태가 되면 join 허용


exports.localsMiddleware = localsMiddleware;

var onlyPublic = function onlyPublic(req, res, next) {
  if (req.user) {
    res.redirect(_routes["default"].home);
  } else {
    next();
  }
}; // 로그인 된 사용자 전용


exports.onlyPublic = onlyPublic;

var onlyPrivate = function onlyPrivate(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect(_routes["default"].home);
  }
};

exports.onlyPrivate = onlyPrivate;
var uploadVideo = multerVideo.single("videoFile");
exports.uploadVideo = uploadVideo;
var uploadAvatar = multerAvatar.single("avatar");
exports.uploadAvatar = uploadAvatar;