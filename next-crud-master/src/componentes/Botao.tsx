interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children : any
    onClick?:() => void
}

export default function Botao (props) {
    return(
        <button onClick={props.onClick} className={`bg-gradient-to-r from-blue-300 to-green-300 text-white px-4 py-2 rounded-full
        ${props.className}`}>
            {props.children}
        </button>
    )
}