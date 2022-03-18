import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Axiospokemon = (props) => {
    const [pokemones, setPokemones] = useState([]);

    const onClick = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response => {
            setPokemones(response.data.results)
        }).catch(e=>console.log(new Error('Error al establecer conexión con la API')))
    }

    return (
        <div className='container'>
            <button onClick={onClick} className='btn'>Fetch Pokemon </button>
            <ul className='li'>
                {pokemones ? pokemones.map((item, index) => {
                    return(<li key={index}>{item.name}</li>)
                }):null}
            </ul>
        </div>
    );
}

export default Axiospokemon;
