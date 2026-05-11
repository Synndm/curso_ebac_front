// Classe base (abstração)
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        console.log(`${this.nome} fez um som.`);
    }
}

// Classe herdeira 1
class Cachorro extends Animal {
    emitirSom() {
        console.log(`${this.nome} latiu: Au Au!`);
    }
}

// Classe herdeira 2
class Gato extends Animal {
    emitirSom() {
        console.log(`${this.nome} miou: Miau!`);
    }
}

// Instâncias de objetos
const cachorro1 = new Cachorro("Rex", 3);
const cachorro2 = new Cachorro("Bolt", 5);
const gato1 = new Gato("Mimi", 2);

// Testando os métodos
cachorro1.emitirSom();
cachorro2.emitirSom();
gato1.emitirSom();