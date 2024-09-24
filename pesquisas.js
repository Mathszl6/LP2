// Classe e objetos - aqui temos a conta como classe e pessoa como objeto

class conta{
    constructor (nome, numero, saldo) {
        this.nome = nome;
        this.numero = numero;
        this.saldo = saldo;
    }
}

var pessoa = new conta('Julio', 6, 100000);
console.log(pessoa.nome);
console.log(pessoa.numero);
console.log(pessoa.saldo);



// Atributos - nome, idade e email são atributos do objeto aluno

var aluno =  {nome : 'Matheus',
                idade : 23,
                email : 'juliozinhozika@gmail.com'
 };

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.email);



// Métodos - Nesse caso, nossa função foi executada a partir do objeto zeus. latir() será um método do objeto zeus.

const zeus = {
    nome: 'Zeus',
    raca: 'Vira-Lata',
    idade: 7,
    latir: function (){
        console.log('Au au au au!');
    },
}

zeus.latir();


// Herança - No exemplo abaixo temos a classe Juridico utilizando o recurso herança para herdar os comportamentos da classe Pessoa.

class Juridico extends Pessoa {
   
    cpfIsValid () {
        throw new Error('Esté método não pode ser acessado a partir desta classe')
    }

    /**
    * verifica se um número de cnpj é valido.
    * @param
    * @return
    */
    cnpjIsValid (value) {
        // gera um erro se estiver sendo passado um número de cpf
        if (super.cpfIsValid(value)) {
            throw new Error('Número de CPF não é aceito')
        }
    }
}




// Polimorfismo - diferentes objetos podem responder de maneira diferente ao mesmo método, como o caso de ser cachorro ou gato no código abaixo, dando um resultado diferente.


class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log("O animal faz um som.");
    }
  }
  class Dog extends Animal {
    makeSound() {
      console.log("O cachorro late.");
    }
  }
  class Cat extends Animal {
    makeSound() {
      console.log("O gato mia.");
    }
  }
  
  // Função que recebe um objeto Animal e chama o método makeSound
  function makeAnimalSound(animal) {
    animal.makeSound();
  }
  
  // Criando instâncias das classes Dog e Cat
  const dog = new Dog("Rex");
  const cat = new Cat("Whiskers");
  
  // Chamando a função makeAnimalSound com diferentes objetos
  makeAnimalSound(dog); // Saída: "O cachorro late."
  makeAnimalSound(cat); // Saída: ' O gato mia.'