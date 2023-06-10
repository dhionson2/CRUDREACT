import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../firebase/bd/ColecaoCliente"
import useVisible from "./useVisible"

export default function useClientes(){
    const repo: ClienteRepositorio =  new ColecaoCliente()  

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    const {tabelaVisivel,exibirForumario,exibirTabela,formularioVisivel} = useVisible()

    useEffect(obterTodos,[])

    function obterTodos() {
        repo.obterTodos().then(clientes =>{
        setClientes(clientes)
        exibirTabela()
        })
    }

    function clienteSelecionado (cliente: Cliente){
        setCliente(cliente)
        exibirForumario()
    }
    async function clienteExcluido (cliente: Cliente){
        await repo.excluir(cliente)
        obterTodos()
    }
    async function SalvarCliente (cliente:Cliente){
        await repo.salvar(cliente)
        obterTodos()
    }
    function NovoCliente (){
        setCliente(Cliente.vazio())
        exibirForumario()

    }

    return{
       SalvarCliente,
       NovoCliente,
       clienteExcluido,
       clienteSelecionado,
       obterTodos,
       cliente,
       clientes,
       tabelaVisivel,
       exibirTabela,


    }
}