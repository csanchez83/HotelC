function tomarFoto()
{
    //funtion captureimage de PhoneGap
        
    // capture error callback
    var captureError = function(error) 
    {
        navigator.notification.alert('Codigo de Error: ' + error.code, null,                                         'Capture Error');
    };
    
    // start image capture
    navigator.device.capture.captureImage(function(mediaFiles) 
    {
        var i, path, len;
        //for (i = 0, len = mediaFiles.length; i < len; i += 1) 
        //{
        i = 0;
        path = mediaFiles[i].fullPath;
        
        $('#regFoto').attr('rel', path);
        $('#regMFoto').html('<img src = " ' + path + '" style = "width: 100%; "/>');
        
            // do something interesting with the file
        //}
    }, captureError, {limit:2});
}