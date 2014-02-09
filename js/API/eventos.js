$(function()
{
    document.addEventListener("deviceready", function()
    {
        //--------Seccion de Registro - INICIO -------------
        
        if (!estaRegistrado())
            window.location.href = "#registro";
    
        $('#regEnv').tap(function()
        {
        
            var nom = $('#regNom').val();            
            var mail = $('#regMail').val();            
            var tel = $('#regTel').val();                
            var foto = $('#regFoto').attr('rel');
            
            if (nom != '' && mail != '' && tel != '' && foto != '' && foto !=                                                               undefined)
            {
                enviarDatos(nom, mail, tel, foto);
            }
            else
            {
                navigator.notification.alert('Todos los campos son requeridos', null, "Registro", "Intentar de nuevo");
            }
        
    });
        
        $('#regFoto').click(function()
                            {
                               tomarFoto(); 
                            });
        
    
        // -------------------Seccion de Registro / FIN -------------
    }, false);
                                                            
    
});




