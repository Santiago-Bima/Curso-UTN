var pool=require('./bd');

async function getNovedades(){
    var query="SELECT * FROM novedades order by id desc";
    var rows=await pool.query(query);
    return rows;
}

async function insertNovedad(titulo, cuerpo){
    try{
        var query="INSERT INTO novedades (titulo, cuerpo) VALUES (?,?)";
        var rows=await pool.query(query,[titulo, cuerpo]);
        return rows;
    }catch(e){
        console.log(e);
        throw e;
    }
}

module.exports={getNovedades, insertNovedad};