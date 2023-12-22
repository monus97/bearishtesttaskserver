const express = require("express");
const router = express.Router();
const { upload } = require("../imageUploadMiddleWare/image");
const imgController = require("../controller/imageController");
const folderController = require("../controller/folderController");
const itemController = require("../controller/itemController");

// upload images multiple or single 
router.post("/upload", upload.array("images", 5), imgController.uploadImage);

// Folder routes
router.post("/folders", folderController.createFolder);
router.put("/folders/:folderId", folderController.updateFolder);

// Item routes
router.post("/folders/:folderId/items", itemController.uploadItem);
router.get("/folders/:folderId/items", itemController.getItemsInFolder);

module.exports = router;
