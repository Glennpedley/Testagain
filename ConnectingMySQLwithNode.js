const mysql = require("mysql");

parameters = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "b9_group5_jeremy",
    multipleStatements: true
};
mysqlConnection = mysql.createConnection(parameters);
mysqlConnection.connect();

mysqlConnection.query(`Select*from member`, (error,results)=>{
    if (error) { console.log(error);}
    else {console.log(results);}
});

mysqlConnection.query(`Delete from member where MemberID = ${id}`, (error,results)=>{
    if (error) { console.log(error);}
    else {console.log("Deleted");}
 });

 