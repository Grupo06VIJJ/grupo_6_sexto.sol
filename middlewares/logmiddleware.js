const fs=require('fs');


function logMiddleware (req,res,next){
    fs=fs.appendFileSync('log.txt', 'Se ingresó en la página'+req.url);/*para escribir en archivo txt las entradas a páginas*/

    next( );

}

module.exports=logMiddleware;