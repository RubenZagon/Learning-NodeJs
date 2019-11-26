require('dotenv').config();

const app = require("./app")
require("./database")

// APP START
async function main() {
  await app.listen(3000);
  console.log("Ready on port 3000!");
}

main();
