CREATE TABLE Blog
(
    id              INT(6)          NOT NULL AUTO_INCREMENT PRIMARY KEY
    ,title          VARCHAR(30)     NOT NULL
    ,author         VARCHAR(255)    NOT NULL
    ,body           TEXT            NOT NULL
    ,blogDate       VARCHAR(255)    NOT NULL
    ,blogId         INT(6)          NOT NULL
);