//requireds
const fs = require('fs');
// const fs = require('express'); paquetes que se instalan adicional
// const fs = require('./path'); archivos que nosotros escribimos

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}


crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introduciso ${base} no es un número`);
            return;
        }

        let data = ``;

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabala-${base}-al-${limite}.txt`)

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}