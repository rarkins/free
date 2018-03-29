const fs = require("fs");
const parse = require("csv-parse/lib/sync");

const list = fs.readFileSync("list.csv", "utf8");
const listParsed = parse(list);
listParsed.shift(); // header row

let seen = [];
listParsed.forEach(row => {
  const [username, expiry] = row;
  if (seen.includes(username)) {
    console.error(`Duplicate username: ${username}`);
    process.exit(1);
  }
  seen.push(username);
});
