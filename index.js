require("./database/database");
const express = require("express");
const booksRoute = require("./routes/book");

const app = express();
const cors = require("cors");
const PORT = 5000;

const data = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(data));
app.use("/", booksRoute);
app.use("/profile", express.static("upload/images"));

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
