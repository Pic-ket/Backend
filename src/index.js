import express from "express";
import cors from "cors";
import https from "https";
import http from "http";
import dotenv from "dotenv";
import logger from "morgan";
import controller from "./controller/board-controller.js";
import fs from "fs";
dotenv.config();

const app = express();

const port = process.env.PORT || 8080;
app.use(cors());

// const server = https.createServer(app);
// morgan : 로그를 좀 더 예쁘게 찍어주는 라이브러리
// combined모드가 좀 더 많은 로그 남김
if (process.env.NODE_ENV === "production") {
  app.use(logger("combined"));
} else {
  app.use(logger("dev"));
}

app.use(express.static("public"));
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

app.use("/", controller);

app.get((req, res) => {
  res.status(404).send("not found");
});

// 서버 실행 코드
// app.listen(port, () => {
//     console.log(`server is listening at ${process.env.HOST}`);
// // });
var options = {
  key: fs.readFileSync("./private.key", "utf8"),
  cert: fs.readFileSync("./certificate.crt", "utf8"),
  ca: fs.readFileSync("./ca_bundle.crt", "utf8"),
};
// var httpServer = http.createServer(app);
var httpsServer = https.createServer(app, options);

// httpServer.listen(8080, () => {
//   console.log(`server is listening at 8080`);
// });
httpsServer.listen(port, () => {
  console.log(`server is listening at 8080`);
});
