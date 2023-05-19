import { createPool } from "mysql2";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "qwe123", //mysql 설치시 설정했던 비번
  database: "picket", // db 이름
});

export default pool;
