import { useState } from "react";

export default function useVisible(){
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirForumario = () => setVisivel('form')

    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirForumario,
    }
}