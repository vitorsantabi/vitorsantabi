<<<<<<< HEAD

function start() {

    while (true){
        let opcao = "sair"
        switch (opcao) {
            case "cadastrar":
                console.log("Cadastrando")
                break
            case "listar":
                console.log("Listando")
                break
            case "sair":
                console.log("Saindo")
                return
        }
    }
}
start()
=======
// olá, mundo!
console.log("olá, mundo!")


// variáveis - let
let mensagens = "olá, mundo!"


// variáveis - const
const mensagem = "olá, eu"
{
    const mensagem = "olá, Mayk!"
    console.log(mensagem)
}
console.log(mensagem);


// arrays
let metas = ['mayk', 'alô']
let metas01 = [2, 'mayk']
// concatenando valores
console.log(metas[1] + ", " + metas[0]) 

let metas02 = [
    metas,
    {
        value: 'caminhar 20 minutos todos os dias',
        checked: false
    }
]
console.log(metas02[1].value);

// objetos
let meta = {
    value: 'ler um livro por mês',
    address: 2,
    checked: true,
    isChecked: () => {
        console.log(info)
    }
}
console.log(meta.value);

// function // arrow function
const criarMeta = () => {}

// named function
function criarMetas() {}
>>>>>>> 8bdb3025ae893b6e7126b2e5b3e2d8df02b9777a
