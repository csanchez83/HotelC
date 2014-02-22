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
        //Seccion de Nuevas Reservaciones - INICIO
        
        //Elije el DIV nr1 y hace referencia a las Ul de HTML, selecciona todos los elementos UL de HTML
        $('#nr1 ul[data-role=listview] li').tap(function()
        {
            //alert("Deseas hacer una nueva reservación"); 
                //Si el elemento elegido es diferente de cero
                if ($(this).index() != 0)
                {                    
                    $('#nr1').attr('th', $(this).index());
                    $('#nr1 ul[data-role=listview] li').show();
                    $(this).hide();
                    
                }         
            
        });
        
        $('#nrSig').tap(function()
        {
            if ($('#nr1').attr('th') != undefined && $('#nr1').attr('th') != '')
            {
                window.location.href = "#nr2";
                
            }
            
        });
        
        $('#nrEnv').tap(function()
        {
            var per = $('#nrPer').val();
            var dia = $('#nrDia').val();
            var hab = $('#nrHab').val();
            var th = $('#nr1').attr('th');
            
            //Comprobar si esta conectado
            if (estaConectado())
            {
                //Enviar al servidor
                sincronizarReservacion(th, per, dia, hab);
            }
            else
            {
                //Guardar localmente 
                crearReserva(th, per, dia, hab);
                
            }
                
            
            
        };
                            
                            
                                                    
        
        
        
        //Sección de Nuevas Reservaciones - FIN
    }, false);
       
        
    
});




