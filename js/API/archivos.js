function subirFoto(foto, nom)
{
    var options = new FileUploadOptions();
    options.fileKey="archivo";
    options.fileName="foto-Carlos";
    options.mimeType="image/jpeg";
    
    var params = {};
    params.value1 = "Registro";
    params.value2 = "Toma de Foto";
    params.value3 = "Hotel Cenet";
    
    options.params = params;
    
    var ft = new FileTransfer();
    ft.upload(foto, "http://igitsoft.com/pgtest.php",                                                 function(r) {
        
        if(r.response == 1)
        {
            navigator.notification.confirm("Registro realizado          satisfactoriamente", function(btn){
                
                switch(btn)
                {
                        case 1: 
                                navigator.notification.vibrate(2000);
                                break;
                        case 2:
                                navigator.notificacion.beep(5);
                                break;
                        
                                
                        
                }
                
                window.location.href = "#home";
                
                //Guardar Usuario
                guardarUsuario(nom, infoDispositivo('id');
                
            }, "Registro", "Vibrar, Beep, Aceptar");
            
        }
        else
        {
            navigator.notification.alert("Error al subir el archivo", 
                                         null, "Error de Servidor",
                                         "Aceptar");
        }
        
        
    }
        , fail, options);
}
