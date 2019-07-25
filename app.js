const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // TODO LO QUE VENGA ENTRE CORCHETES {} DESPUES DE VAR, LET y CONST ES UN OBJETO DESTRUCTURADO.
//let base = '3';

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo tabla_${argv.base}.txt ha sido creado`.red))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

/* let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla_${base}.txt ha sido creado`);
}); */

//let argv2 = process.argv; //[ 'C:\\Program Files\\nodejs\\node.exe','E:\\Users\\rojas\\Desktop\\Udemy-NodeJs\\03-bases-node\\app.js', '--base=4' ]
//let parametro = argv[2]; //--base=4
//let base = parametro.split('=')[1]; //4 - .split('=') DIVIDE EL PARAMETRO POR EL SIMBOLO QUE ESTA ENTRE PARENTESIS, EN ESTE CASO EL IGUAL =;

//console.log(argv);
/*

    */