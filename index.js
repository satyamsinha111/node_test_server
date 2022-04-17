const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Helloworld to devops");
});

app.listen(3000 | process.env.PORT, () => {
  console.log("Listning to server");
});
