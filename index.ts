import * as fs from "fs";
import axios from "axios";
async function getJs() {
  const res = await axios("http://y.gtimg.cn/music/h5/player/player.js");
  fs.writeFileSync("player.js", res.data);
}
async function getJs2() {
  const res = await axios("https://y.gtimg.cn/music/h5/client/jsbridge.js");
  fs.writeFileSync("jsbridge.js", res.data);
}
getJs();
getJs2();
