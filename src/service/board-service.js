import query from "../query/board-query.js";
import pool from "../database/pool.js";

const service = {
  getUser: async (req, res, next) => {
    console.log("isReached???");

    let result = await pool.query(query.getUser, [req.tokenId]);
    console.log(result[0]);
    return result[0];
  },

  getTag: async (req, res, next) => {
    let result = await pool.query(query.getTag, [req.id]);
    console.log(result[0]);
    return result[0];
  },
};

export default service;
