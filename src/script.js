// CORES
const vermelho = document.getElementById('vermelho');
const amarelo = document.getElementById('amarelo');
const verde = document.getElementById('verde');

// BOTÕES
document.getElementById('btnVermelho').addEventListener('click', ligarVermelho);
document.getElementById('btnAmarelo').addEventListener('click', ligarAmarelo);
document.getElementById('btnVerde').addEventListener('click', ligarVerde);
document.getElementById('btnParar').addEventListener('click', desligarLuzes);
document.getElementById('btnAutomatico').addEventListener('click', automatico)

function ligarVermelho() {
    desligarLuzes(); // Primeiro apaga tudo
    vermelho.style.backgroundColor = 'red'; // Depois acende o vermelho
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
    // Versão simples do seu jeito
    vermelho.style.backgroundColor = '#111'; // Volta para o preto original
    amarelo.style.backgroundColor = '#111';
    verde.style.backgroundColor = '#111';
}

function automatico() {
    setTimeout(() => {
        vermelho.style.backgroundColor = 'red';
        amarelo.style.backgroundColor = '#111';
        verde.style.backgroundColor = '#111';
    }, 0); // 
    setTimeout(() => {
        amarelo.style.backgroundColor = 'yellow';
        vermelho.style.backgroundColor = '#111';
        verde.style.backgroundColor = '#111';
    }, 10000); // 
    setTimeout(() => {
        verde.style.backgroundColor = 'green';
        vermelho.style.backgroundColor = '#111';
        amarelo.style.backgroundColor = '#111';
    }, 15000); // 
    setTimeout(() => {
        automatico();
    }, 25000);
}