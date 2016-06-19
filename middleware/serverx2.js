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
  //middleware to get data out of body, parse json
  //add data to model and req
SetDataRouter.use((res, req, next) => {
  var jsonData = '';
  res.on('data', (data) => {
    jsonData += data.toString();
  });
  res.on('end', () => {
    try {
      var parsed = JSON.parse(jsonData);
      req.body = parsed;
      model.data = parsed;
      next();
    } catch (e) {
      e.statusCode = 400;
      e.errorMessage = "Can't parse input";
      next(e);
    }
  })
});


GetDataRouter.get("/", (req, res) => {
  res.set("json");
  res.json(model.nodata);
});

SetDataRouter.post("/", (req, res) => {
  res.set("json");

  res.json("post succesful");
});

app.use("/api", GetDataRouter);
app.use("/api", SetDataRouter);

//handle mw errors
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err.errorMessage)
});

//fall through paths
app.use((req, res) => {
  res.status(404).send("Page not found");
})

app.listen(3000, () => {
  console.log("server up on 3000");
})
