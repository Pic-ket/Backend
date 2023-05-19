import query from "../query/board-query.js";
import pool from "../database/pool.js";

const service = {
  getTokenInfo: async (req, res, next) => {
    console.log("isReached???");

    let result = await pool.query(query.getTokenInfo, [req.userAddress]);
    console.log(result[0]);
    return result[0];
  },

  getStatus: async (req, res, next) => {
    let result = await pool.query(query.getStatus);
    console.log(result[0]);
    return result[0];
  },
};

export default service;
