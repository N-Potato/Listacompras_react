import { useRef, useState } from "react"
import './Lista.css'

export default function Lista(props){
    const [lista,setLista] = useState([])

    const input = useRef()

    function adicionar(){
       const valor = input.current.value;
       if(valor == ''){
           alert("Digite algo para adicionar")
           return
       }
       const newLista = [...lista,valor]
       setLista(newLista)
       input.current.value = ''
    }
    return(
        <div className='Lista'>
            <h3>Adicionar Item na Lista</h3>
            <input type="text"  placeholder="Digite um item para adicionar" ref={input}/>
            <button onClick={adicionar}>Adicionar</button>
            <div className="divLista">
                <div className="title">
                    <h3>Lista de Compras</h3>
                </div>
                <ol>
                    {lista.map((item)=>{
                        return <li>{item}</li>
                    })}
                </ol>
            </div>

        </div>


    )
}