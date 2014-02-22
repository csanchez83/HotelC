function enviarDatos(nom, mail, tel, foto)
{
    $.ajax({
        type: "POST",
        url: "http://igitsoft.com/pgtest.php",
        data: "nom = " + nom + "&mail = " + mail + "&tel = " + tel
    })
    .done(function( msg ) {
        if (msg == 1)
        {
            //funcion para subir la foto
            subirFoto(foto, nom);
            
        }
        else
        {
            navigator.notification.alert("Error al procesar datos", null, "Error", "Aceptar");
        }
    });
    
}

function sincronizarReservacion(tipohabitacion, personas, dias, habitaciones)
{
    $.ajax({
        type: "POST",
        url: "http://igitsoft.com/pgtest.php",
        data: "tipohabitacion = " + tipohabitacion + "&personas = " + personas + "&dias = " + dias + "&habitaciones = " + habitaciones + "&id = " + infoDispositivo("id")
    })
    .done(function( msg ) {
        if (msg == 1)
        {
            navigator.notification.alert("Reserva Sincronizada satisfactoriamente", null, "Reservas", "Aceptar");
        }
        else
        {
            navigator.notification.alert("Error al procesar datos", null, "Error", "Aceptar");
        }
    });
    
}