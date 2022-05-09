i=1;
suma=0;
numeros="";
function ciclodowhile()
{
    numero=parseInt(document.formulario.caja.value);
    do
    {
        numeros=numeros+i+", ";
        suma=suma+i;
        i=i+1;
    }while(i<=numero)
    document.formulario.respuesta.value=numeros;
    document.formulario.sumatoria.value=suma;
}