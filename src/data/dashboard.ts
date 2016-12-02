// import sql = require('mssql');
// var config = {
//     server: 'localhost',
//     database: 'Company',
//     user: 'sa',
//     password: 'sa',
//     port: 1433
// };

// function loadData() {
//     //4.
//     var dbConn = new sql.Connection(config);
//     //5.
//     dbConn.connect().then(function () {
//         //6.
//         var request = new sql.Request(dbConn);
//         //7.
//         request.query("select * from EmployeeInfo").then(function (recordSet) {
//             console.log(recordSet);
//             dbConn.close();
//         }).catch(function (err) {
//             //8.
//             console.log(err);
//             dbConn.close();
//         });
//     }).catch(function (err) {
//         //9.
//         console.log(err);
//     });
// }

// loadData();

