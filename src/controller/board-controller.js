import express from "express";
import service from "../service/board-service.js";

const router = express.Router();

const params = {
  tokenId: "",
};

const header = {
  "Access-Control-Allow-Origin": "",
  "Access-Control-Allow-Credentials": true,
};

//AWS public IP
const host = [
  "https://3.144.88.207",
  "https://3.144.88.207:443",
  "http://3.144.88.207",
  "http://3.144.88.207:443",
  "",
];
console.log("isReached??");
// /를 가지고 있고,
router.get("/status", async (req, res, next) => {
  console.log(req.headers.origin);
  //   if (host.includes(req.headers.origin))
  //     header["Access-Control-Allow-Origin"] = req.headers.origin;

  params.tokenId = req.query.tokenId;
  let rows = await service.getStatus(params, res, next); //service모듈의 getFeed함수를 이용해서 DB쿼리날린후, 정보를 가져온다
  return res.header(header).json(rows); //그걸 json으로 ~, response를 보낸다.
});

router.get("/tokenInfo", async (req, res, next) => {
  console.log(req.headers.origin);
  //   if (host.includes(req.headers.origin))
  //     header["Access-Control-Allow-Origin"] = req.headers.origin; //Q.이게 뭔지 파악

  //   params.id = req.query.id;
  let rows = await service.getTokenInfo(params, res, next);
  return res.header(header).json(rows);
});

export default router;
