const { io } = require("../server");


io.on('connection', (client) => {

    console.log('Usuario Alan Conectado');

    client.on('disconnect', () => {
        console.log('Usuario Alan desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'Todo Salio Bien'
        //     })


        // } else {
        //     callback({
        //         resp: 'Todo Salio Mal'
        //     })
        // }
    });

    client.emit('enviarMensaje', {
        usuario: 'Alan Larva King',
        mensaje: 'Bienvenido Larva Kig que se convierte en Mariposa'
    });
});