const { StatusCodes } = require("http-status-codes");

const uploadProductImage = (req, res) => {
  console.log(req);
  res.send("upload product image");
};

module.exports = { uploadProductImage };
