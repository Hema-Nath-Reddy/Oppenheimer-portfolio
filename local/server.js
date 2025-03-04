const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5003;

function calculateLovePercentage(name1, name2) {
  const lovePercentage = Math.floor(Math.random() * 100);
  return `${name1} and ${name2} have a love percentage of ${lovePercentage}%`;
}

const name1 = "dylan";
const name2 = "nityanand";

const loveResult = calculateLovePercentage(name1, name2);
console.log(loveResult);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
}); 
