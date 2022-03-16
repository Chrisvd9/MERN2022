import React, {useState, useEffect} from 'react';

const PokemonApi = () => {
    const [state, setState] = useState(0);

    const onClick = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setState({
                    people: response.results
                })
            })
    };

    return (
        <div className='container'>
            <button onClick={onClick} className='btn'>Fetch Pokemon </button>
            <div className='li'>
                {state.people ? state.people.map((item, index) => {
                    return(<div key={index}>{item.name}</div>)
                }):null}
            </div>
        </div>
    );
}

export default PokemonApi;
