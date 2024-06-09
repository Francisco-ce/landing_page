AOS.init();

// copiei e colei esse código do saite github link: https://github.com/michalsnik/aos


const dataDoEvento = new Date("jul 30 2024 10:30:00");
const timeStampDoEnvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    
    const distanciaAteEvento = timeStampDoEnvento - timeStampAtual

    //constantes de auxilio matemático

    const diasEmMs = 1000*60*60*24;
    const horasEmMs = 1000*60*60;
    const minutoEmMs = 1000*60;

    const diasDoEvento = Math.floor(distanciaAteEvento/diasEmMs); //Math.floor aproxima para baixo
    const horasDoEvento = Math.floor(distanciaAteEvento%diasEmMs/horasEmMs); 
    const minutosDoEvento = Math.floor(distanciaAteEvento%horasEmMs/minutoEmMs);
    const segundosDoEvento = Math.floor(distanciaAteEvento%minutoEmMs/1000);

    console.log(diasDoEvento);
    console.log(horasDoEvento);
    console.log(minutosDoEvento);

    document.getElementById('contador').innerHTML = `${diasDoEvento} dias ${horasDoEvento} horas ${minutosDoEvento} min ${segundosDoEvento}s`;

    if(distanciaAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado!'
    }

},1000);