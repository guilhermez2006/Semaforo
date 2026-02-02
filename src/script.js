const vermelho = document.getElementById('vermelho');
const amarelo = document.getElementById('amarelo');
const verde = document.getElementById('verde');

document.getElementById('btnVermelho').addEventListener('click', ligarVermelho);
document.getElementById('btnAmarelo').addEventListener('click', ligarAmarelo);
document.getElementById('btnVerde').addEventListener('click', ligarVerde);
document.getElementById('btnParar').addEventListener('click', pararAutomatico);
document.getElementById('btnAutomatico').addEventListener('click', automatico);

let timer; // Controla o tempo do automático

function ligarVermelho() {
    desligarLuzes();
    vermelho.style.backgroundColor = 'red';
}

function ligarAmarelo() {
    desligarLuzes();
    amarelo.style.backgroundColor = 'yellow';
}

function ligarVerde() {
    desligarLuzes();
    verde.style.backgroundColor = 'green';
}

function desligarLuzes() {
    vermelho.style.backgroundColor = '#111';
    amarelo.style.backgroundColor = '#111';
    verde.style.backgroundColor = '#111';
}

function pararAutomatico() {
    clearTimeout(timer); // Para agendamentos futuros
    desligarLuzes();
}

function automatico() {
    pararAutomatico(); // Evita sobreposição de cliques

    function ciclo() {
        ligarVermelho();
        
        timer = setTimeout(() => {
            ligarAmarelo();
            
            timer = setTimeout(() => {
                ligarVerde();
                
                timer = setTimeout(ciclo, 6000); // Reinicia após o verde
            }, 3000); // Tempo do amarelo
        }, 6000); // Tempo do vermelho
    }
    ciclo();
}