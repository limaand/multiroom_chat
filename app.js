/* importar as configurações do servidor*/
var app =  require ('./config/server');

/* parametrizar a prota de escuta */
app.listen(8080, function(){
    console.log('SERVIDOR Online')
});



