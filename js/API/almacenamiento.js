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
