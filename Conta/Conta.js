export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Não instacie um objeto do tipo conta de forma direta. Classe Conta é abstrata.");  
        }

        this._saldoInicial = saldoInicial; //_saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
        this._cliente = cliente;
        this._agencia = agencia;     
    }

    //Métodos Assessores
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    
    get cliente(){

        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //Métodos
    sacar(valor){ // Método abstrato
        //let taxa = 1;
        //return this._sacar(valor, taxa)
        throw new Error("O método sacar é um método abstrato. Não esqueça de sobreescreve-lo.");
    }  

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){ //usando early return
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}