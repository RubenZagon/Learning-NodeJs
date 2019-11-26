require('dotenv').config();

const app = require("./app")
require("./database")

// APP START
async function main() {
  await app.listen(app.get("port"));
  console.log(`Ready on port ${app.get("port")}!`);
}

main();
