const query = {
  // getContent: "SELECT ? FROM anAlyst.analyst WHERE class = ? AND gender =?",
  getUser: "SELECT * FROM picket.user WHERE tokenId = ?", //사용자id가 가지고 있는 피드정보를 return
  getTag: "SELECT * FROM insnote.tag WHERE id = ?", //사용자id가 가지고 있는 태그정보를 return
};

export default query;
