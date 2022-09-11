require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const fileUpload = require("express-fileupload");

// Database
const connectDB = require("./db/connect");

//PRODUCT ROUTER
const productRouter = require("./routes/productRoutes");

// Error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const { uploadProductImage } = require("./controllers/uploadController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("<h1>File Upload Starter</h1>");
});

app.use(fileUpload());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/uploads", uploadProductImage);

// MIDDLEWARE
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// PORT
const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
