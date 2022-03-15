import React from 'react';
import './MiCss.css';

const Resultado = (props) => {

    const {data} = props;

    return (
        <div className='content'>
            {data.map ((caja)=><div style={{backgroundColor: caja}} className='box'></div>) }
        </div>
    );
}

export default Resultado;
