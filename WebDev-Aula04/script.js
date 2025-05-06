const titulo = document.querySelector('h1')
titulo.textContent = "Um titulo qualquer"

const div = document.querySelector('#container')
div.innerHTML = '<h2>Novo paragrafo HTML</h2>'

const imagem = document.querySelector('img')
imagem.setAttribute('src', './avatar.png')
imagem.setAttribute('width', '200')
imagem.setAttribute('heigth', '200')
imagem.setAttribute('alt', 'avatar profile')

const caixa = document.querySelector('.box')
caixa.style.backgroundColor = 'red'
caixa.style.width = '200px'
caixa.style.height = '200px'

const botao = document.getElementById('toggleVisibilidade')
botao.addEventListener('click', () => {
    caixa.classList.toggle('oculta')
})

const NovoItem = document.createElement('li')
NovoItem.textContent = 'Novo Item'
document.querySelector('ul').appendChild(NovoItem)

localStorage.setItem('nome', 'Raul')
localStorage.setItem('linguagem', 'JS')

const linguagem = localStorage.getItem('linguagem')
console.log(linguagem)

//localStorage.removeItem('nome')
//localStorage.clear()

const usuario = {nome : 'Galileu', idade : 35}
localStorage.setItem('usuario', JSON.stringify(usuario))

const usuarioRecuperado = JSON.parse(localStorage.getItem(usuario))
console.log(usuarioRecuperado)

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
const redenizarTarefas = () => {
    const lista = document.getElementById('lista-tarefas')
    lista.innerHTML = ''

    tarefas.forEach((t, i) => {
        const li = document.createElement('li')
        li.textContent = t
        lista.appendChild(li)
    })
}

redenizarTarefas()

document.getElementById("form-tarefa").onsubmit = function (e) {
    e.preventDefault();
    const input = document.getElementById("input-tarefa");
    tarefas.push(input.value);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    input.value = "";
    renderizarTarefas();
};

document.getElementById('btn-limpar').onclick = () => {
    tarefas = []
    localStorage.removeItem('tarefas')
    redenizarTarefas()
}
