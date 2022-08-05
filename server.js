const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin:
    "https://v5hdg0fow7.execute-api.ap-northeast-2.amazonaws.com/Dev/pockets/test",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get("/products/:id", cors(corsOptions), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for only example.com." });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
