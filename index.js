const { select, input, checkbox } = require('@inquirer/prompts')
let meta = {
    nome: "beber agua",
    checked: false,
}
let metas = [meta]
const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta: " })
    if (meta.length == 0) {
        console.log("Favor digitar uma meta")
        return
    }

    metas.push({ value: meta, checked: false })

}


const listarTarefas = async () => {
    const respostas = await checkbox({
        message: "use as setas do teclado para mudar as metas, espaço para selecionar, e enter para finalizar",
        choices: [...metas],
        instructions: false,
    })
    metas.forEach((m) => {
        m.checked = false
    })
    if (respostas.length == 0) {
        console.log("Nenhuma tarefa selecionada")
        return
    }
    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        meta.checked = true
    })
    console.log("Meta(s) Concluida (s)")
}
const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })
    if (realizadas.length == 0) {
        console.log("Nenhuma tarefa selecionada")
        return
    }
    await select({
        message: " metas Realizadas",
        choices: [...realizadas],

    })

}
const start = async () => {

    while (true) {

        const opcao = await select({
            message: "Menu > ",
            choices: [
                {
                    name: "Cadastrar",
                    value: "cadastrar"

                },
                {
                    name: "Listar Metas",
                    value: "listar"
                },
                {
                    name: "Metas Realizadas",
                    value: "realizadas"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch (opcao) {
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                await listarTarefas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "sair":

                console.log("Saindo")
                return
        }
    }
}
start()
