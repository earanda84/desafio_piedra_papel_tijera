document.write('<div class="container text-center text-white pt-5 text-uppercase">');
document.write('<h1 class="p-3 mb-2 bg-info">Desafío | Cachipún</h1>');
/* Descripción
Crear un programa que le permita a una persona jugar al cachipún contra el computador,
indicando cuántas veces desea jugar o repetir el juego.El cachipún es un juego entre dos
personas(en este caso, tú y el computador) donde cada una de ellas de manera
independiente y secreta debe elegir una de las opciones(piedra, papel y tijera) y compararla
con la opción de la otra persona.Para determinar quien gana, se deben seguir las siguientes
reglas: ●Tijera le gana a papel● Papel le gana a piedra● Piedra le gana a tijera● Si ambos jugadores eligen la misma opción es un empate */

/* 1. Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es
decir, cuántas veces deberá jugar contra la computadora. Por cada juego, se debe
mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta
dependiendo de las veces que haya indicado el usuario que desea jugar. */

//se solicita al usuario número de partidas
let numero_partidas = +prompt('Cuántas veces quieres jugar al cachipún?');

//Muestra por pantalla la cantidad de jugadas
alert(`Jugarás ${numero_partidas} partidas`);

contador = 0;
for (let i = 0; i < numero_partidas; i++) {
    contador++;
    /* 2. Solicitar al usuario que indique su jugada.
    Las opciones son las siguientes:
    ● Piedra
    ● Papel
    ● Tijera
    */
    //Se solicita al usuario escoger la jugada
    let jugada_usuario = prompt('Escoge Piedra, Papel o Tijera');
    //Se convierte en mínusculas lo escogido por el usuario
    jugada_usuario = jugada_usuario.toLowerCase();
    //se muestra por pantalla la jugada del usuario
    alert(`Tú jugada es ==> ${jugada_usuario}`)

    //Se declara una constante con un arreglo de las posibles jugadas
    const jugadasPosibles = ['piedra', 'papel', 'tijera'];

    /* 3. Generar una jugada automática para la máquina usando la función Math.random()
    de Javascript.
     */
    //Se determina la jugada de la máquina con función Math.floor y Math.random haciendo el llamado a las jugdasPosibles, para que entregue un string
    let jugada_maquina = jugadasPosibles[Math.floor(Math.random() * jugadasPosibles.length)];
    alert(`La jugada de la máquina es ==> ${jugada_maquina}`);

    /* 4. Definir a un ganador considerando la jugada del usuario y la generada
    automáticamente para la máquina.
     */
    if (jugada_usuario == jugada_maquina) {
        document.write(`<h1 class="bg-success p-3">Jugada N°${contador}, es un Empate ${'\nTú jugada ==>'+jugada_usuario +' vs '+ 'Jugada máquina ==>'+jugada_maquina}!!`);
    } else if (jugada_usuario == 'piedra' && jugada_maquina == 'tijera') {
        document.write(`<h1 class="bg-primary p-3">Jugada N°${contador}, Ganaste !! ${jugada_usuario}, le gana a ${jugada_maquina}</h1>`);
    } else if (jugada_usuario == 'papel' && jugada_maquina == 'piedra') {
        document.write(`<h1 class="bg-secondary p-3">Jugada N°${contador}, Ganaste !! ${jugada_usuario}, le gana a ${jugada_maquina}</h1>`);
    } else if (jugada_usuario == 'tijera' && jugada_maquina == 'papel') {
        document.write(`<h1 class="bg-warning p-3">Jugada N°${contador}, Ganaste !! ${jugada_usuario}, le gana a ${jugada_maquina}</h1>`);
    } else {
        document.write(`<h1 class="bg-danger p-3">Jugada N°${contador}, Perdiste !! ${jugada_maquina}, le gana a ${jugada_usuario}</h1>`);
    }


};
//Botón para refrescar la página
function reiniciarJuego() {
    window.location.reload();
}
document.write('</div>');

document.write(`
<div class="container text-center">
    <button class="btn btn-primary" type="submit" onClick="reiniciarJuego()">Reinicia el Juego</button>
</div>`);