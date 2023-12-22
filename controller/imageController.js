const imageModel = require("../model/imageModel");

const uploadImage = async (req, res) => {
  try {
      const newImage = new imageModel({
        images: req.files.map(
          ({ filename }) => `/public/assets/images/${filename}`
        ),
      });

      await newImage.save();

      res.status(200).json({
        status: "success",
        message: "image successfully upladed",
        data: newImage,
      });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  uploadImage,
};
