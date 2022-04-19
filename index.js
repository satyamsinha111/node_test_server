const express = require("express");
const app = express();
const PORT = 80 | process.env.PORT;
app.get("/", (req, res) => {
  res.send("Helloworld to devops");
});

app.listen(PORT, () => {
  console.log("Listning to server at " + PORT);
});
