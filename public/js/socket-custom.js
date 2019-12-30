var socket = io();

socket.on('connect', function() {

    console.log('conectado al servidor');

});

socket.on('disconnect', function() {

    console.log('perdimos conexion del servidor');

});

socket.emit('enviarMensaje', {
    usuario: 'Alan',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta Servido', resp);
});

socket.on('enviarMensaje', function(mensaje) {

    console.log('servidor:', mensaje);

});