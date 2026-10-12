console.log('main.js cargado');
const botones=document.querySelectorAll('button');
const pantalla=document.querySelector('.pantalla');
let operacion='';
let resetPantalla=false;

botones.forEach(boton=>(
    boton.addEventListener('click',()=>{
      const botonTexto=boton.textContent;

      if (botonTexto==='C') {
        operacion='';
        pantalla.value='0';
      } else if(botonTexto==='=') {
        try {
            operacion=eval(operacion);
            pantalla.value=operacion;
            resetPantalla=true;
        } catch(error) {
            pantalla.value='Error';
            operacion='';
        }
     }else if (botonTexto==='±') {
        if (operacion) {
            if (operacion.startsWith('-')) {
                operacion=operacion.substring(1);
            }else{
                operacion='-'+operacion;
            }
            pantalla.value=operacion;
        }
      }else if (botonTexto==='%') {
        if (operacion) {
            operacion=String(eval(operacion+'/100'));
                pantalla.value=operacion;
        }
      }else{
        if (resetPantalla && !isNaN(botonTexto)) {
            operacion=botonTexto;
            resetPantalla=false;
        }else{
            operacion+=botonTexto;
        }
        pantalla.value=operacion;
      }
    })
))