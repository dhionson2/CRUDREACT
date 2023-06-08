import Layout from "../componentes/Layout";
import Tabela from "../componentes/Tabela";
import Cliente from "../core/Cliente";


export default function Home() {
  const clientes = [
    new Cliente('Pedro', 21,'1'),
    new Cliente('Marcos', 22,'2'),
    new Cliente('Tiago', 25,'3'),
    new Cliente('João', 21,'4'),
    new Cliente('Saulo', 38,'5'),
  ]

  function clienteSelecionado (cliente: Cliente){
    console.log(cliente.nome)
  }
  function clienteExcluido (cliente: Cliente){
    console.log(cliente.nome)
  }


  return (
   <div className='flex h-screen justify-center items-center bg-gradient-to-r from-green-500 via-orange-400 to-blue-400 text-white'>
     <Layout titulo="Cadastro">
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
     </Layout>
   </div>
  )
}
