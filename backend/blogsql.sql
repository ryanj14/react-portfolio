CREATE TABLE Blog
(
    id              SERIAL          PRIMARY KEY
    ,title          VARCHAR(30)     NOT NULL
    ,author         VARCHAR(255)    NOT NULL
    ,body           TEXT            NOT NULL
    ,blogDate       VARCHAR(100)    NOT NULL
);