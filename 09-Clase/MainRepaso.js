//Repaso funciones
/*
function suma (num1, mun2){ //parámetros
    console.log(num1 + num2)
}
suma (1,5)

function elegirAlumno(numLista){
    let alumnos = ['Luis', 'Ana', 'marta', 'Juan'];
    console.log(alumnos[numLista]);
}

elegirAlumno(1)
elegirAlumno(3)
*/

//Ejercicios en clase para repaso CALIFICACIONES


let info = [
    {
        nombre: "Diego",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 100
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55
            }
        ]
    },
    {
        nombre: "Jorge",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 60
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80
            }
        ]
    }
]

// 1.- Ingresar nombre
login();

function login() {
    let usuario = prompt('Ingresa tu nombre');
    validUsuario(usuario)
}

function validUsuario (usuario) {
    for(let i = 0; i < info.length; i++) {
        if(usuario === info[i].nombre) {
                console.log('Bienvenido ', usuario);
            menu(info[i]);
            }
        } 
        }


// 2.- Verán un menú de opciones
function menu(infoUsuario){
    let opcion = prompt('Elige una opcion \n (1) Ver todas mis calificaciones \n(2) Conocer mi promedio \n(3)Conocer calificacion mas alta \n (4)Conocer calificacion mas baja');
    if(opcion ==1){
        calificaciones(infoUsuario)
    }else if (opcion == 2){
        promedio(infoUsuario);
    }else if (opcion == 3){
        calificacionMasAlta(infoUsuario);
    }else if (opcion == 4){
        calificacionMasBaja(infoUsuario);
    }
}
    // 1. Ver todas su calificaciones.
function calificaciones(infoUsuario){
    for(let i = 0; i<infoUsuario.materias.length; i++){
        console.log('Tus calificacion para ' + infoUsuario.materias[i].nombreMateria + ' es: '+ infoUsuario.materias[i].calificacion)
    }
    }
    // 2. Conocer su promedio.
function promedio(infoUsuario){
    let sumaCalif = 0;
    for (let i = 0; i<infoUsuario.materias.length; i++){
        sumaCalif = sumaCalif + infoUsuario.materias[i].calificacion;
    }
    console.log ('Tu promedio es: ' + sumaCalif / infoUsuario.materias.length);
}
    // 3. Conocer su calificación más alta.
function calificacionMasAlta(infoUsuario){
    let arrayCalifMax = [];
    for (let i = 0; i<infoUsuario.materias.length; i++){
        arrayCalifMax.push(infoUsuario.materias[i].calificacion);
    }
    console.log('Tu calificacion mas alta es de ' + Math.max(...arrayCalifMax));
}

    // 4. Conocer su calificación más baja.
    function calificacionMasBaja(infoUsuario){
        let arrayCalifMin = [];
        for (let i = 0; i<infoUsuario.materias.length; i++){
            arrayCalifMin.push(infoUsuario.materias[i].calificacion);
        }
        console.log('Tu calificacion mas baja es de ' + Math.min(...arrayCalifMin));
    }