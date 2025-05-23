class Pessoa {
	nome: string;
	renda?: number;

	constructor(nome: string, renda?: number) {
		this.nome = nome;
		this.renda = renda;
	}

	dizOla(): string {
		return `${this.nome} disse oi`;
	}
}

class ContaBancaria {
	private saldo: number = 0;
	public numeroConta: number;

	constructor(numeroDaConta: number) {
		this.numeroConta = numeroDaConta;
	}

	static retornaNumeroDoBanco() {
		return 125;
	}

	private getSaldo() {
		return this.saldo;
	}

	depositar(valor: number) {
		this.saldo += valor;
	}
}

class contaBancariaPessoaFisica extends ContaBancaria {
	// depositar(valor: number): void {
	// 	this.saldo = valor * 2;
	// }
}

const contaDoPedro = new contaBancariaPessoaFisica(123456)
//contaDoPedro
ContaBancaria.retornaNumeroDoBanco()

// Imagine uma casa:

// public (Calçada): Aberto a todos, como a calçada. Em programação, public é acessível por qualquer classe.
// static (Ferramentas Comuns): Como ferramentas usadas por todos na casa. Em programação, static pertence à classe, não a instâncias.
// protected (Sala de Estar Familiar): Acesso para a família, como uma sala privada. Em programação, protected é aberto para a classe e subclasses.
// private (Quarto Particular): Acesso só pelo dono, como um quarto trancado. Em programação, private é restrito à própria classe.
// Esses termos definem o acesso em programação, como áreas em uma casa.