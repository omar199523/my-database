const {join} =require('path');
const dbConection = require('./conection')

const sql =join(__dirname,"build.sql").toString();

const dbBuild =()=>{
    return dbConection
    .query(sql)
    .then(()=>console.log("sucessful"))
    .catch(err=>console.log(err));
}

module.exports =dbBuild;