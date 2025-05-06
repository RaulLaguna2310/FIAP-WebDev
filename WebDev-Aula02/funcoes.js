console.log("Hello World")


//const saudar = function(nome){
    //return `Meu nomme é ${nome}`
//}

//console.log(saudar("Daniel"))

//function exibirTarefa(id,titulo,prioridade){
   // console.log(`Tarefa #${id}
    //: ${titulo} (prioridade :${prioridade})`)
//}

//function criarTarefa( título,descricao, prioridade, concluida){
//
//    if(!título || !descricao || !prioridade || !concluida){
//        console.error("Você precisar informar todos os parametros")
//
//        return false
//    }
//    return{
//        id: Date.now(),
//        título,
//        descricao,
//        prioridade,
//        concluida,
//        criada: new Date()
//    
//    }
//     
//}

// Arrow function que retorna a subtração de dois números
//const subtrair = (a, b) => a - b;
//console.log("Subtração:", subtrair(20, 5));


// Utilizando arrow function para dobrar os elementos de um array
//const numeros = [1, 2, 3, 4, 5];
//const dobrados = numeros.map(n => n * 2);
//console.log("Números dobrados:", dobrados);


// Demonstração de "this" em função tradicional vs. arrow function
const contador = {
    valor: 0,
    incrementarTradicional: function() {
      setTimeout(function() {
        // Neste caso, "this" não se refere ao objeto "contador"
        console.log("Valor (tradicional):", this.valor);
      }, 100);
    },
    incrementarArrow: function() {
      setTimeout(() => {
        // A arrow function preserva o contexto do objeto "contador"
        this.valor++;
        console.log("Valor (arrow):", this.valor);
      }, 100);
    }
  };
  contador.incrementarTradicional();
  contador.incrementarArrow();