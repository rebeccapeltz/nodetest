"uses strict";

const express = require('express'); 

const app = new express();

const GetDataRouter = express.Router();
const SetDataRouter = express.Router();

//model: nodata:{msg:"nodata"}, data:{....}
const model = {
  nodata: {
    msg: "nodata"
  }
}

GetDataRouter.get("/", (req, res) => {
  res.set("json");
  res.json(model.nodata);
});

SetDataRouter.post("/", (req, res) => {
  res.set("json");

  res.json("post succesful");
});

app.use("/api",GetDataRouter);
app.use("/api",SetDataRouter);
app.listen(3000, () => {
  console.log("server up on 3000");
})
