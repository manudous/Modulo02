// // Objeto de hotel

// var hotel = {
//     name: "Parador",
//     location:"Ronda",
//     img:"https://media-cdn.tripadvisor.com/media/photo-o/02/85/da/a5/exterior-del-parador.jpg"
// }


// // Mostramos el Nombre, Localización e imagen del hotel

// document.getElementById('hotel-name').innerHTML = `Hotel ${hotel.name}`;
// document.getElementById('hotel-location').innerHTML = `Situado en ${hotel.location}`;
// document.getElementById('hotel-img').src = hotel.img;

// // Introducimos la puntuación del hotel.

// var puntuacion = prompt(`Introduzca la puntuación del Hotel 1, 2, 3, 4 o 5 estrellas`);

// document.getElementById('rating').innerHTML = `${puntuacion} estrellas`;


/**
 * Para que la reseña sea anónima utilizamos en confirm, si el usuario pulsa aceptar
 * devolverá true entonces el checkbox será marcado, en caso contrario la reseña
 * no sería anónima
 */

// var anonimo = confirm(`¿Quiere que su reseña sea anónima?`);
// console.log(anonimo);

// document.getElementById('anonimo').checked = anonimo;


// Trabajo Opcional

// Creamos varios hoteles

var hoteles = {
    Errizas: {
        name: 'Errizas',
        location: 'Alcalá del Valle',
        img: 'https://lh3.googleusercontent.com/proxy/3TO2TfCzmgoiV3-2OA8d-ImOtA47wkp2W8AeLC7frj8khbzIczjYQpHRHDgh8HQ-pmXlHedXI6gzAHIv7Re-XcmdsyeTAsMtWDRaUsMSAT0T-TtJ'
    },
    Almendral: {
        name: 'El Almendral',
        location: 'Setenil de las Bodegas',
        img: 'https://p.bookcdn.com/data/Photos/380x204/2592/259226/259226085/El-Almendral-photos-Exterior-Hotel-information.JPEG'
    },
    Parador: {
        name: 'Parador',
        location: 'Ronda',
        img: 'https://media-cdn.tripadvisor.com/media/photo-o/02/85/da/a5/exterior-del-parador.jpg'
    }
}

// Le decimos al usuario que seleccione el Hotel

var seleccionHotel = prompt('Indique el hotel que quiere ver: Errizas, Almendral o Parador');

/** Mostramos el Nombre, localización e imagen del hotel, utilizamos hoteles[seleccionHotel] para que entre dentro
 * del Objeto de hoteles y seleccione el hotel que el usuario ha introducido.
 */ 

document.getElementById('hotel-name').innerHTML = `Hotel ${hoteles[seleccionHotel].name}`;
document.getElementById('hotel-location').innerHTML = `Situado en ${hoteles[seleccionHotel].location}`;
document.getElementById('hotel-img').src = hoteles[seleccionHotel].img;

/**Le preguntamos al usuario que puntuación le damos al hotel y mostramos por pantalla. 
 * Creamos un Objeto con las estrellas y lo mostramos.
*/


var puntuacion = prompt('Introduzca la valoración del hotel: una, dos, tres, cuatro o cinco estrellas');


var estrellas = {
    una: '<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>',
    dos: '<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>',
    tres: '<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>',
    cuatro: '<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>',
    cinco: '<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>'
}

document.getElementById('rating').innerHTML = estrellas[puntuacion];


/**
 * Para que la reseña sea anónima utilizamos en confirm, si el usuario pulsa aceptar
 * devolverá true entonces el checkbox será marcado, en caso contrario la reseña
 * no sería anónima y el checkbox no se marcaría.
 */

var anonimo = confirm(`¿Quiere que su reseña sea anónima?`);
console.log(anonimo);

document.getElementById('anonimo').checked = anonimo;



