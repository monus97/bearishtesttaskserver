const express = require("express");
const router = express.Router();
const { upload } = require("../imageUploadMiddleWare/image");
const imgController = require('../controller/imageController')

router.post("/upload", upload.array("images", 5),imgController.uploadImage);

module.exports = router;
