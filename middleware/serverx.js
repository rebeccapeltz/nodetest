"uses strict";

const express = require('express');

const app = new express();

var GetDataRouter = express.Router();

GetDataRouter.get("/", (req, res) => {
  res.set("json");
  res.json({
    msg: "nodata"
  });
});

app.use(GetDataRouter);
app.listen(3000, () => {
  console.log("server up on 3000");
})
