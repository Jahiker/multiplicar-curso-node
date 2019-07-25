//requireds
const fs = require('fs');
const colors = require('colors');

//const fs = require('express'); PARA PAQUETES INSTALADOS DE FUENTES EXTERIORES
//const fs = require('./fs'); PARA PAQUETES O ARCHIVOS QUE ESTAN DENTRO DE NUESTRO PROYECTO O ALMACENAMIENTO LOCAL

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`'${base}' o '${limite}' No es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla_${base}.txt`);
        });
    });
}

let listarTabla = (base, limite = 10) => {
    console.log(colors.rainbow('========================'));
    console.log(`Tabla del ${base}`.green);
    console.log(colors.rainbow('========================'));
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}