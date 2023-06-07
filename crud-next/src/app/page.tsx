import Image from 'next/image'
import Layout from './componentes/Layout'

export default function Home() {
  return (
   <div className='flex h-screen justify-center items-center bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 text-white'>
      <Layout titulo="Cadastro">
        <span>conteudo</span>
      </Layout>
   </div>
  )
}
