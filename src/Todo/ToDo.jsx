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
            <h1>Lista de Produtos</h1>    
            <form onSubmit={salvar}>
    
           <input value={nome} type="text"
            onChange={(e)=>{ setNome(e.target.value)}}/>
            &
            <input value={marca} type="text"
            onChange={(e)=>{ setMarca(e.target.value)}}/>
           <input value={preco} type="text"
            onChange={(e)=>{ setPreco(e.target.value)}}/>
            <button type="button" class="btn btn-ligth">ADICIONAR</button>  
            </form>      
            {lista.map((ativ)=>
            <div key= {ativ.id}>
                <p>Nome: {ativ.nome}</p>
                <p>Marca: {ativ.marca}</p>
                <p>Preço: R${ativ.preco}</p>

            </div>
            )} 
        </div>
    );
}

