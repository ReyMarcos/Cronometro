var painel = document.getElementById('painel')

var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

var comecar = document.getElementById('comecar')
var pausar = document.getElementById('pause')
var zerar = document.getElementById('zerar')

var cronometroseg;

var horaatual;
var minutoatual;
var segundoatual;

var intervalo;

for(var i = 0; i<= 10; i++){
    horas.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

for(var i = 0; i<= 60; i++){
    minutos.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

for(var i = 0; i<= 60; i++){
    segundos.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

comecar.addEventListener('click', function(){
    horaatual = horas.value;
    minutoatual = minutos.value;
    segundoatual = segundos.value;

    painel.childNodes[1].innerHTML = horaatual + ":" + minutoatual + ":" + segundoatual;

    intervalo = setInterval(function(){

        segundoatual--;
        if(segundoatual <= 0){
            if(minutoatual <= 0 && horaatual > 0 ){
                horaatual--;
                minutoatual = 59;
                segundoatual = 59;
            }else if(segundoatual <=0 && minutoatual > 0){
                minutoatual--;
                segundoatual = 59;
            }else{
                document.getElementById("alarme").play();
                clearInterval(intervalo);
            }
        }

        painel.childNodes[1].innerHTML = horaatual + ":" + minutoatual + ":" + segundoatual;
    },1000);
})

zerar.addEventListener('click', ()=>{
    intervalo = setInterval(()=>{
        document.getElementById("alarme").pause();
        clearInterval(intervalo);
    })
})
