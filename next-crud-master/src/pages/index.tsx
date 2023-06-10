
import Botao from "../componentes/Botao";
import Formulario from "../componentes/Formulario";
import Layout from "../componentes/Layout";
import Tabela from "../componentes/Tabela";
import useClientes from "../hooks/useClientes";


export default function Home() {
  //aqui eu estou importando do meu hook
  const {NovoCliente,
    SalvarCliente,
    clienteExcluido,
    clienteSelecionado,
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela,
  } = useClientes()

  return (
   <div className='flex h-screen justify-center items-center bg-gradient-to-r from-green-500 via-orange-400 to-blue-400 text-white'>
     <Layout titulo="Cadastro">
      {tabelaVisivel ? (
          <>
          <div className="flex justify-end">
            <Botao className="mb-4" onClick={NovoCliente}>Novo cadastro</Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
        </>
      ): (<Formulario clienteMudou={SalvarCliente} cliente={cliente} cancelado={exibirTabela}></Formulario>
      )}        
     </Layout>
   </div>
  )
}
