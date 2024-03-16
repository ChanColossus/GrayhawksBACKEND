const Entry = require("../models/Register");
const APIFeatures = require("../utils/apiFeatures");


exports.newEntry = async (req, res, next) => {
 
  const entry = await Entry.create(req.body);
  if (!entry)
    return res.status(400).json({
      success: false,
      message: "Entry not created",
    });

  res.status(201).json({
    success: true,
    entry,
  });
};
exports.getEntries = async (req, res, next) => {

  const entryCount = await Entry.countDocuments();
  const apiFeatures = new APIFeatures(Entry.find(), req.query)
    .search()
    .filter();

  // apiFeatures.pagination(resPerPage);
  const entries = await apiFeatures.query;
let filteredEntryCount = entries.length;
  res.status(200).json({
    success: true,
    filteredEntryCount,
    entryCount,
    entries,
    // resPerPage,
  });
};
