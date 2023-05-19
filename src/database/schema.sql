CREATE DATABASE insnote;

CREATE TABLE user(
    tokenId INT,
    userAddress VARCHAR(255),
    tokenUrl VARCHAR(50) NOT NULL, //핵심
    tokenImage VARCHAR(255), //디테일
    isChanged DATETIME, //언제 그 아이디어가 떠올랐는지
    location VARCHAR(255), //어느 장소에서 그 아이디어가 떠올랐는지
    alarm TINYINT(1), //1Byte 저장공간 사용하는 데이터 타입
    PRIMARY KEY(tokenId)
);