/* importar as configurações do servidor*/
var app =  require ('./config/server');

/* parametrizar a prota de escuta */
var server = app.listen(8080, function(){
    console.log('SERVIDOR ON')
});

var io = require ('socket.io').listen(server);

app.set('io', io);

//criar a conexao via websocket
io.on('connection', function(socket){
    console.log('usuario conectou!!!!');
   
    socket.on('disconect', function(){
       console.log('Usuario desconectou!!')
    });

    socket.on('msgParaServidor', function(data){
            socket.emit(
                'msgParaCliente', 
                {apelido: data.apelido, mensagem: data.mensagem}
            );

            //broadcast
            socket.broadcast.emit(
                'msgParaCliente', 
                {apelido: data.apelido, mensagem: data.mensagem}
            );
      
            if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
                        socket.emit(
                            'participantesParaCliente', 
                            {apelido: data.apelido}
                        );

                        //broadcast
                        socket.broadcast.emit(
                            'participantesParaCliente', 
                            {apelido: data.apelido}
                        );
            }

    });

});



