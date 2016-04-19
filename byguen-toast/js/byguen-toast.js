// Desarrollado por Jefrey Mauricio Carvajalino Peñaranda | byguen.com - Custom Development
function toast(msg)
{
    var seg_ocultar = 500; // Duracion del efecto fadeOut que oculta el mensaje.
    var seg_duracion = 3000; // Duracion en pantalla del mensaje antes de cerrarse.
    var seg_remove = parseInt(seg_duracion) + parseInt(seg_ocultar) + parseInt(100); // Segundos luego de los cuales elimino del body el div que contiene el mensaje.
    $('body').append('<div class="toast">'+msg+'</div>'); // Agrego en el body el div que contiene el mensaje.
    setTimeout(function(){  $('.toast').fadeOut(seg_ocultar);  }, seg_duracion); // Luego de transcurridos los segundos establecidos en 'seg_duracion' oculto el mensaje con un efecto fadeOut
    setTimeout(function(){  $('.toast').remove();  }, seg_remove); //  Elimino el div que contiene el mensaje del body, tener en cuenta que si en el anterior setTimeout trato de ocultar el div mediante remove(), $('.toast').fadeOut(500).remove(), no se mostrara el efecto fadeOut, por eso realizo esta operacion en otro setTimeout, si no es relevante para ustedes que se visualice el efecto fadeOut, pueden eliminar este último setTomeout y agregarle remove() al anterior.
}