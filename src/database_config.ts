const mssql = require('mssql');
export const con = new mssql.ConnectionPool({
    user: "sa",
    password: "<YourStrong@Passw0rd>",
    server: "database",
    database: "listing",
    options: {
        enableArithAbort: true,
        encrypt: true //for azure
    }
});