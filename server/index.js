const app = require("./app");

const hostname = "188.225.32.243";
const port = "8080";

app.listen(port, hostname, () => {
  console.log(`App is running on http://${hostname}:${port}`);
});
