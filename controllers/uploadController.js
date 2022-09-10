const { StatusCodes } = require("http-status-codes");
const path = require("path");

const uploadProductImage = async (req, res) => {
  let productImage = req.files.image;

  console.log(req.files);

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );

  await productImage.mv(imagePath);

  res.send("upload product image");
};

module.exports = { uploadProductImage };
