import React from 'react';

const Impresion = (props) => {
    const {nameUser, lastName, emailUser, passUser, confirmPass} = props;
    return (
        <div className='Impresionp'>
            <p>Nombre: {nameUser}</p>
            <p>Apellido: {lastName}</p>
            <p>Email: {emailUser}</p>
            <p>Contraseña: {passUser}</p>
            <p>Confirmar contraseña: {confirmPass}</p>
        </div>
    );
}

export default Impresion;
