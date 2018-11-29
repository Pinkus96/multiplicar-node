const argv = require(`./config/yargs`).argv;

const { crearArchivo, listarTabla } = require(`./multiplicar/multiplicar`);


let comando = argv._[0];

switch (comando) {
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    default:
}

//let argv2 = process.argv;

/*let parametro = argv[2];
let base = parametro.split("=")[1];*/