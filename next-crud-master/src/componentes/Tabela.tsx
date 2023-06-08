
import { IconeEdicao,  IconeLixo } from "./Icones"
import Cliente from "../core/Cliente"




interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}
export default function Tabela(props: TabelaProps){
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
    
    function renderizarCabecalho() {
        return (
          <tr>
            <th className="text-left p-4">Código</th>
            <th className="text-left p-4">Nome</th>
            <th className="text-left p-4">Idade</th>
            {exibirAcoes ? <th className="p-4">Ações</th> : false}
          </tr>
        )
      }
      

function renderizarDados(){
    return props.clientes?.map((cliente, i) => {
        return (
            <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-green-200' : 'bg-green-300'}`}>
                <td className="text-left p-4">{cliente.id}</td>
                <td className="text-left p-4">{cliente.nome}</td>
                <td className="text-left p-4">{cliente.idade}</td>
                {exibirAcoes ? renderizarAcoes(cliente) : false}
                
          </tr>
          
        )
    })
}

function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center">
          {props.clienteSelecionado ? (
                  <button onClick={() => props.clienteSelecionado?.(cliente)} className={`flex justify-center items-center text-blue-50 rounded-full hover:bg-blue-400 p-2 m-1`}>
                  {IconeEdicao}
                  </button>
          ) : false}
          {props.clienteExcluido ?(
                  <button onClick={() => props.clienteExcluido?.(cliente)} className={`flex justify-center items-center bg-red-400 rounded-full hover:bg-blue-400 p-2 m-1`}>
                  {IconeLixo}
                  </button>
          ) : false}
      
      </td>
    )
  }
  
  
  
    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className='bg-gradiente-to-r from bg-green-500 to-blue-500 text-white'>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
            
        </table>
    )
}