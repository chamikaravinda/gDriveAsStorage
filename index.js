var express = require("express");
const port = process.env.PORT || 3000;
var routes = require("./routes");
var app = express(); // the main app

app.use("/gdrive", routes);

app.listen(port, () => {
  console.log("Server is listning on port 3000");
});
