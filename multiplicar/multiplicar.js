const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log("====================".green);
    console.log(`Tabla de ${base}`.red);
    console.log("====================".yellow);

    for(let i=1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base*i}`);
    }
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        

        let contenido = '';
        
        for(let i=1; i <= limite; i++){
            contenido += `${base} * ${i} = ${base*i}\n`;
        }


        const data = new Uint8Array(Buffer.from(contenido));
        fs.writeFile(`tablas\\tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}

