var pool=require('./bd');
var md5=require('md5');

async function getUsersByEmailAndPsw(email,psw){
    try{
        var sql='SELECT * FROM usuarios WHERE email=? AND password=? limit 1';
        var rows=await pool.query(query, [email,md5(psw)]);
        return rows[0];
    } catch(e){
        throw e;
    }
}

module.exports={ getUsersByEmailAndPsw };