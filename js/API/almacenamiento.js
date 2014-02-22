function guardarUsuario(usuario, id)
{
    window.localStorage.setItem('usuario', usuario);
    window.localStorage.setItem('id', id);
        
}

function estaRegistrado()
{
    if (window.localStorage.getItem('id') != undefined)
    {
        return true;
    }
    else
    {
        return false;
    }
}

//WEB SQL
function accesoBD()
{
    var bd = window.openDatabase("hotel", "1.0", "HOTEL CENET", "2000000");
    return bd;
}

function crearReserva(th, pe, di, ha)
{
    accesoBD().transaction(function(tx)
    {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS reservas (id unique, th, pe, di, ha)');
        tx.executeSql('INSERT INTO reservas (th, pe, di, ha) VALUES ("' + th + '", "' + pe + '", "' + di + '", "' + ha + '" )');
    }, function (err) {
        alert("Error processing" + err);
    }, function() {
        //Guardar en historial
        crearHistorial(th, pe, di, ha);
        window.location.href = "#home";
    });     
}

function leerReserva()
{
     accesoBD().transaction(function(tx)
    {
        
        tx.executeSql('SELECT * FROM reservas', [], function(tx2, r){
          
            var largo = r.rows.length;
            for (var i = 0; i <= largo; i++)
            {
                var tipohab =       r.rows.item(i).th;
                var personas =      r.rows.item(i).pe;
                var dias =          r.rows.item(i).di;
                var habitaciones =  r.rows.item(i).ha;
                
                //Sincronizar con el Servidor
                sincronizarReservacion(tipohab, personas, dias, habitaciones);
            }
            
        }, function (err) {
                alert("Error processing" + err);
        });
        
        
    }, function (err) {
            alert("Error processing" + err);
    });     
}

function crearHistorial(th, pe, di, ha)
{
    accesoBD().transaction(function(tx)
    {
        tx.executeSql('DROP TABLE IF EXISTS historial');
        tx.executeSql('CREATE TABLE IF NOT EXISTS historial (id unique, tipohab, personas, dias, habitaciones)');
        tx.executeSql('INSERT INTO historial (tipohab, personas, dias, habitaciones) VALUES ("' + th + '", "' + pe + '", "' + di + '", "' + ha + '" )');
    }, function (err) {
        alert("Error processing" + err);
    }, function() {
        //Guardar en historial
        navigator.notificacion.alert("Reservación guardada en el Historial", null, "Guardado", "Aceptar");
        //window.location.href = "#home";
    });     
}

function leerHistorial()
{
     accesoBD().transaction(function(tx)
    {        
        tx.executeSql('SELECT * FROM historial', [], function(tx2, r){
          
            var largo = r.rows.length;
            for (var i = 0; i <= largo; i++)
            {
                var tipohab =       r.rows.item(i).tipohab;
                var personas =      r.rows.item(i).personas;
                var dias =          r.rows.item(i).dias;
                var habitaciones =  r.rows.item(i).habitaciones;
                
                //Mostrar Lista               
            }
            
        }, function (err) {
                alert("Error processing" + err);
        });
        
        
    }, function (err) {
            alert("Error processing" + err);
    });     
}
                           
                               
                           