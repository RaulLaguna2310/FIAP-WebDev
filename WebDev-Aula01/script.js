let titulo = "Aprender js"

console.log("Titulo" + titulo)

console.log("Titulo" , titulo)


console.log(`Tamanho do texto ${titulo.length}`)

console.log(titulo[9])


console.log(titulo[0])


console.log(titulo[titulo.length -1])

console.log(titulo.charAt(8))

console.log("Posição de 'Javascript'", titulo.indexOf('Javascript'))


console.log("Posição de 'Javascript'", titulo.includes('Javascript'))

console.log("Começa com 'Aprender ?'", titulo.startsWith('Aprender'))

console.log("Termina com 'Aprender ?'", titulo.endsWith('Aprender'))


const truncarDescricao = 
(texto, maxLength = 10) =>
{
    if(texto.length<= maxLength){
        return texto
    }

    return texto.substring(0, maxLength) + "...."
}

console.log(truncarDescricao(titulo))


let texto = "Javascript é incrivel"

console.log(texto)

console.log(texto.slice(0,10))


console.log(texto.substring(0,10))

let tags = "Javascript, progamação,web,frontend "

let arrayTags = tags.split(',')

console.table(arrayTags)

const tagsOriginal = arrayTags.join(',')

console.log(tagsOriginal,typeof tagsOriginal)

const destacarTermo = (texto, termo)=>{
    if (!termo) return
    texto

    const regex = new RegExp(termo, 'gi')

    return texto.replace(regex, `**$&**`)
}


let frase = " O javascript é muito leagal, o javascript é sensacional, o javascript é a melhor linguagem de todas!"

console.log(destacarTermo 
    (frase, "Javascript")
)


console.log(Math.PI)
console.log(Math.E)

const raio = 5

const areaCirculo = Math.PI * Math.pow(raio,2)

console.log(areaCirculo)

const numero = 9.7

console.log(Math.round(numero))

console.log(Math.floor(numero))


console.log(Math.ceil(numero))


console.log(Math.trunc(numero))


const pi = Math.PI

console.log(pi)

console.log(pi.toFixed(2))

const numeroAleatorioEntre = (min, max)=>{
    return Math.floor(Math.random() * (max - min)) +min

}

console.log(Math.random())

console.log(numeroAleatorioEntre(0,100))



const hoje = new Date();
console.log( hoje,typeof hoje);

console.log(hoje.toString(), typeof hoje.toString())

const dataISO = new Date("2025-04-15t19:00")

console.log(dataISO)

const dataComponentes =  new Date ( 2025, 3, 18, 10 , 30 , 0)

console.log(dataComponentes)


const formatarData=(data) =>{
    const dia = data.getDate()

    const mes = data.getMonth() +1
    
    const ano = data.getFullYear()

    console.log(dia,mes,ano)

    return `${dia}/${mes}/${ano}`

}

formatarData(new Date())


const AdicionarOuSubtrairDias=
(data,operacao,dias)=>{
    const novaData = new Date (data)

    novaData.setDate
    (operacao === "+" ?
    data.getDate() + dias
    : data.getDate()- dias)
    return novaData
}

const amanha = AdicionarOuSubtrairDias(hoje,"+",1)
console.log(amanha)

const ontem = AdicionarOuSubtrairDias(hoje,"-",1)
console.log(amanha)