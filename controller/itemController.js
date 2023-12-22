const Item = require('../model/itemModel');
const Folder = require('../model/folderModel');

const uploadItem = async (req, res) => {
  try {
    const { folderId } = req.params;
    const { filename } = req.body;

    const folder = await Folder.findById(folderId);
    if (!folder) {
      return res.status(404).json({ message: 'Folder not found' });
    }

    const newItem = new Item({ filename, folder: folderId });
    await newItem.save();

    folder.items.push(newItem);
    await folder.save();

    res.status(201).json({ message: 'Item uploaded successfully', item: newItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getItemsInFolder = async (req, res) => {
  try {
    const { folderId } = req.params;
    const folder = await Folder.findById(folderId).populate('items');
    if (!folder) {
      return res.status(404).json({ message: 'Folder not found' });
    }
    res.json({ items: folder.items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadItem, getItemsInFolder };
