import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
   const [nome, setNome ] = useState("");
   const [marca, setMarca ] = useState("");
   const [preco, setPreco ] = useState("");
   const [lista, setLista ] = useState([]);
   const [id,setId] = useState(1);
    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                nome:nome, marca:marca, preço:preco,
                id: id
        }]);
        setId(id + 1);
        setNome("");
        setMarca("");
        setPreco("");
        
    };

    return (
        <div>
            <Link to="/">home</Link>
            <h1>Lista de Atividades</h1>    
            <form onSubmit={salvar}>
            <input value={nome} type="text"
            onChange={(e)=>{ setNome(e.target.value)}}/>
            <input value={marca} type="text"
            onChange={(e)=>{ setMarca(e.target.value)}}/>
            <input value={preco} type="text"
            onChange={(e)=>{ setPreco(e.target.value)}}/>
            <button>ADD</button>   
            </form>      
            {lista.map(()=>
            <div key= {ativ.id}>
                <p>{ativ.nome}</p>
                <p>{ativ.marca}</p>
                <p>{ativ.preco}</p>

            </div>
            )} 
        </div>
    );
}

