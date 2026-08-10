function Caixa() {

    const prompt = require("prompt-sync")();

    let saldoDaConta = Number(
        prompt(
            "Informe o saldo da conta para realizar saque, depósito ou transferências: "
        )
    );

    function mostrarSaldo() {
        console.log(`Saldo: R$ ${saldoDaConta}`);
    }

    function Saque() {

        let saque = Number(
            prompt("Informe o valor do saque: ")
        );

        if (saque > saldoDaConta) {

            console.log("Valor insuficiente na conta!");

        } else if (saque <= 0) {

            console.log("Não é possível sacar valores menores ou iguais a 0!");

        } else {

            saldoDaConta -= saque;

            console.log(`Saque realizado: R$ ${saque}`);
        }
    }

    function Deposito() {

        let deposito = Number(
            prompt("Digite o valor do depósito: ")
        );

        if (deposito < 0) {

            console.log(
                "Não é possível depositar valores menores que a 0!"
            );

        } else {

            saldoDaConta += deposito;

            console.log(`Depósito realizado: R$ ${deposito}`);
        }
        
    }
    function saldoFinal (){

        

        console.log(`Saldo na conta : R$ ${saldoDaConta}`);
        
        
    }

    // Fluxo original substituído por um menu com loop do...while mantendo as estruturas das funções
    let opcao;

    do {
        console.log('\n=== Caixa Eletrônico ===');
        console.log('1 - Mostrar saldo');
        console.log('2 - Sacar');
        console.log('3 - Depositar');
        console.log('0 - Sair');

        opcao = prompt('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                mostrarSaldo();
                break;
            case '2':
                Saque();
                break;
            case '3':
                Deposito();
                break;
            case '0':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
        }
    } while (opcao !== '0');

    saldoFinal();
}

Caixa();
