alert("Benvindo ao minha plataforma de jogos!!!!");

function JogoMedia(){
    alert("seje bem vindo ao jogo de media");
    alert("Instruções:\n 1- Informe numeros aleatórios positivos;\n 2- Para finalizar o jogo, informe um numero negativo.\nAo final, o jogo irá calcular a média dos números informados.");
    let soma = 0;
    let contador = 0;
    let numero;

    do {
        numero = parseFloat(prompt("Informe um número positivo (ou um número negativo para sair):"));
        if (numero >= 0) {
            soma += numero;
            contador++;
        } else if (numero < 0 && contador === 0) {
            alert("Nenhum número positivo foi informado.");
            return;
        }else if (isNaN(numero)) {
            alert("Por favor, informe um número válido.");
            numero = 0;
        }
    } while (numero >= 0);
    alert("A média dos números informados é: " + (soma / contador).toFixed(2));
    alert("Obrigado por jogar!");
}

function JogoSorte(){

    alert("seje bem vindo ao jogo de sorte");
    alert("Instruções:\n 1- Informe um número entre 1 e 10;\n 2- O jogo irá gerar um número aleatório entre 1 e 10.\nSe você acertar, você ganha!");
    
    let numeroUsuario;
    do {
        numeroUsuario = parseInt(prompt("Informe um número entre 1 e 10:"));
        if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
            alert("Número inválido. Por favor, informe um número entre 1 e 10.");
        }
    } while (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10);

    let numeroSorteado = Math.floor(Math.random() * 10) + 1;
    if (numeroUsuario === numeroSorteado) {
        alert("Parabéns! Você acertou o número sorteado: " + numeroSorteado);
    } else {
        alert("Você errou! O número sorteado foi: " + numeroSorteado);
        alert("ERRO CRÍTICO DO SISTEMA");
        alert("FALHA DE SEGURANÇA DETECTADA!");
        alert("SUA MÁQUINA SERÁ FORMATADA EM 5 SEGUNDOS...");
        
        for(let i = 5; i > 0; i--) {
            alert("FORMATANDO EM " + i + " SEGUNDOS...");
        }
        alert("BRINCADEIRA! Era só uma pegadinha! Sua máquina está segura!");
        alert("Obrigado por jogar!");
    }
}

function JogoSoma(){
    alert("seje bem vindo ao jogo de soma");
    alert("Instruções:\n 1- Informe numeros aleatórios positivos;\n 2- Para finalizar o jogo, informe um numero negativo.\nAo final, o jogo irá calcular a soma dos números informados.");
    let soma = 0;
    let contador = 0;
    let numero;

    do {
        numero = parseFloat(prompt("Informe um número positivo (ou um número negativo para sair):"));
        if (numero >= 0) {
            soma += numero;
            contador++;
        } else if (numero < 0 && contador === 0) {
            alert("Nenhum número positivo foi informado.");
            return;
        }else if (isNaN(numero)) {
            alert("Por favor, informe um número válido.");
            numero = 0;
        }
    } while (numero >= 0);
    alert("A soma dos números informados é: " + soma.toFixed(2));
    alert("Obrigado por jogar!");
}
