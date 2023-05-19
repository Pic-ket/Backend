import query from "../query/board-query.js";
import pool from "../database/pool.js";

const service = {
  getStatus: async (req, res, next) => {
    console.log("isReached???");

    let result = await pool.query(query.getStatus, [req.tokenId]);
    console.log(result[0]);
    return result[0];
  },

  getTokenInfo: async (req, res, next) => {
    let result = await pool.query(query.getTokenInfo);
    console.log(result[0]);
    return result[0];
  },
};

export default service;
