const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  folder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Folder',
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
