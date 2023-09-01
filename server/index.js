require("dotenv").config();
const express = require("express");
const models = require("./models/models");
const sequelize = require("./db");
const cors = require("cors");
const routes = require("./routes/index");
const errorMiddleware = require("./middleware/ErrorHandlerMiddleware");
const fileUpload = require("express-fileupload");
const path = require("path");

const PORT = process.env.PORT || 3333;
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use("/api", routes);
app.use(express.static(path.resolve(__dirname, "static")));

app.use(errorMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => console.log(`Server started on port:${PORT}`));
  } catch (error) {
    console.log("error:", error);
  }
};

start();
