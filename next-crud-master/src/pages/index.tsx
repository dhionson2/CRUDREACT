import { useEffect, useState } from "react";
import Botao from "../componentes/Botao";
import Formulario from "../componentes/Formulario";
import Layout from "../componentes/Layout";
import Tabela from "../componentes/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../firebase/bd/ColecaoCliente";


export default function Home() {
  const repo: ClienteRepositorio =  new ColecaoCliente()  

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(obterTodos,[])

  function obterTodos() {
    repo.obterTodos().then(clientes =>{
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelecionado (cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExcluido (cliente: Cliente){
    console.log(cliente.nome)
  }
  async function SalvarCliente (cliente:Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }
  function NovoCliente (){
    setCliente(Cliente.vazio())
    setVisivel('form')

  }



  return (
   <div className='flex h-screen justify-center items-center bg-gradient-to-r from-green-500 via-orange-400 to-blue-400 text-white'>
     <Layout titulo="Cadastro">
      {visivel === 'tabela' ? (
          <>
          <div className="flex justify-end">
            <Botao className="mb-4" onClick={NovoCliente}>Novo cadastro</Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
        </>
      ): (<Formulario clienteMudou={SalvarCliente} cliente={cliente} cancelado={() => setVisivel('tabela')}></Formulario>
      )}        
     </Layout>
   </div>
  )
}
