const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    images: [{
        type: String,
        required: true
      }]
});
imageSchema.set("timestamps", true);
module.exports = mongoose.model("image", imageSchema);
