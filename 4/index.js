import fs from 'fs'

console.time("start");
const filepath = "./large-file.json";
const readablestream = fs.createReadStream(filepath);

readablestream.on("data", (chunk) => {
  console.log(chunk.toString());
});

// setTimeout(() => {
//     readablestream.pause()
//     console.log("paused");

// }, 1000);

// setTimeout(()=>{
//     console.log('continue...');
//     readablestream.resume()
// },5000)

readablestream.on("end", () => {
  console.log("enddd");
});

console.timeEnd("start");
