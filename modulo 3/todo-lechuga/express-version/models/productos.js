var pool=require('./bd');

async function getProdType(){
    var query="SELECT * FROM tipos_de_productos";
    var rows=await pool.query(query);
    return rows;
}

async function getProd(){
    var query="SELECT * FROM productos";
    var rows=await pool.query(query);
    return rows;
}

async function insertProd(titulo, cuerpo){
    try{
        var query="INSERT INTO productos (titulo, cuerpo) VALUES (?,?)";
        var rows=await pool.query(query,[titulo, cuerpo]);
        return rows;
    }catch(e){
        console.log(e);
        throw e;
    }
}

module.exports={getProdType, getProd, insertProd};