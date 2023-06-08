export default function Titulo(props){
    return(
        <div className="flex flex-col justify-center">
            <h1 className="pl-5 py-2 text-2xl">
                {props.children}
            </h1>
            <hr className="border-1 border-orange-950 px-2 py-2"/>
        </div>
    )
}