//2---Write a function that reads data from multiple sources (files, APIs) and merges them into a single JSON object.
import fs from "fs";

let data1 = fs.readFileSync("./data1.json", { encoding: "utf8" });
let data2 = fs.readFileSync("./data2.json", { encoding: "utf8" });
let data3 = fs.readFileSync("./data3.json", { encoding: "utf8" });

// console.log(data1,data2,data3);

const data = [...JSON.parse(data1), ...JSON.parse(data2), ...JSON.parse(data3)];
console.log(JSON.stringify(data, null, 1));
