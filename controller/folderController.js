const Folder = require("../model/folderModel");

const createFolder = async (req, res) => {
  try {
    const { name } = req.body;
    const newFolder = new Folder({ name });
    await newFolder.save();
    res
      .status(201)
      .json({ message: "Folder created successfully", folder: newFolder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateFolder = async (req, res) => {
  try {
    const { folderId } = req.params;
    const { name } = req.body;
    const updatedFolder = await Folder.findByIdAndUpdate(
      folderId,
      { name },
      { new: true }
    );
    res.json({
      message: "Folder name updated successfully",
      folder: updatedFolder,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createFolder, updateFolder };
