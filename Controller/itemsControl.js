const items = require("../Model/ItemModel");

//add item
exports.addItem = async (req, res) => {
  const { name, description } = req.body;

  try {
    const existingItem = await items.findOne({ name });
    if (existingItem) {
      res.status(400).json(`${existingItem.name} already exists!`);
    } else {
      const newItem = new items({
        name,
        description,
      });
      await newItem.save();
      res.status(200).json(newItem);
    }
  } catch (err) {
    res.status(401).json(`Item Add Api Failed ${err}`);
  }
};

//get all items
exports.getAllItems = async (req, res) => {
  try {
    const allItems = await items.find();
    if (allItems) {
      res.status(200).json(allItems);
    } else {
      res.status(400).json("No items available!");
    }
  } catch (err) {
    res.status(401).json(`Items get Api Failed ${err}`);
  }
};

//view item
exports.viewItem = async (req, res) => {
  const _id = req.params;
  try {
    const clickedItem = await items.findOne({ _id });
    if (clickedItem) {
      res.status(200).json(clickedItem);
    } else {
      res.status(400).json("No items found!");
    }
  } catch (err) {
    res.status(401).json(`View Item Api Failed ${err}`);
  }
};

//edit item
exports.editItem = async (req, res) => {
  const { name, description } = req.body;
  const { _id } = req.params;

  try {
    const updatedItem = await items.findByIdAndUpdate(
      { _id },
      { name, description },
      { new: true }
    );
    await updatedItem.save();
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(401).json(`Item Edit Api Failed ${err}`);
  }
};

//delete item
exports.deleteItem = async (req, res) => {
  const { _id } = req.params;

  try {
    const item = await items.deleteOne({ _id });
    if (item) {
      res.status(200).json("Item deleted!");
    }
  } catch (err) {
    res.status(401).json(`Item Delete Api Failed ${err}`);
  }
};
