CREATE DATABASE insnote;

CREATE TABLE token(
    tokenId INT,
    userAddress VARCHAR(255),
    tokenUrl VARCHAR(50) NOT NULL, 
    tokenImage VARCHAR(255), 
    isChanged TINYINT(1), 
    mintTime DATETIME, 
    updateTime DATETIME, 
    PRIMARY KEY(tokenId)
);

INSERT INTO token (tokenId, userAddress, tokenUrl, tokenImage, isChanged, mintTime, updateTime) VALUES
(1,"test", "test", "test",0, "1997-01-01 00:00:01", "1997-01-01 00:00:01");