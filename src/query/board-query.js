const query = {
  // getContent: "SELECT ? FROM anAlyst.analyst WHERE class = ? AND gender =?",
  getTokenInfo: "SELECT * FROM picket.token WHERE userAddress = ?", //사용자id가 가지고 있는 피드정보를 return
  getStatus: "SELECT * FROM picket.token", //사용자id가 가지고 있는 태그정보를 return
};

export default query;
