import React, {useState} from 'react';
import Impresion from './Impresion';

const Formulario = (props) => {
    const [nameUser, setNameuser] = useState('');
    const [lastName, setlastName] = useState('');
    const [emailUser, setemailUser] = useState('');
    const [passUser, setpassUser] = useState('');
    const [confirmPass, setconfirmPass] = useState('');

    const handlernameUser = (e) => { setNameuser (e.target.value) };
    const handlerlastName = (e) => { setlastName (e.target.value) };
    const handleremailUser = (e) => { setemailUser (e.target.value) };
    const handlerpassUser = (e) => { setpassUser (e.target.value) };
    const handlerconfirmPass = (e) => { setconfirmPass (e.target.value) };

    return (
        <div>
            <form action="">
                <h2>Formulario</h2>
                <div className='borderDiv'>
                <label htmlFor="Name">Nombre: </label>
                <input type="text" name='nameUser' value={nameUser} onChange = { (e) => handlernameUser(e)} />
                </div>
                <div className='borderDiv'>
                <label htmlFor="Apellido">Apellido: </label>
                <input type="text" name='lastName' value={lastName} onChange = { (e) => handlerlastName(e)} />
                </div>    
                <div className='borderDiv'>
                <label htmlFor="Correo">Email: </label>
                <input type="email" name='email' value={emailUser} onChange = { (e) => handleremailUser(e)}/>
                </div>
                <div className='borderDiv'>
                <label htmlFor="Contraseña">Contraseña: </label>
                <input type="password" name='passUser'  value={passUser} onChange = { (e) => handlerpassUser(e)} />
                </div>
                <div className='borderDiv'>
                <label htmlFor="Confirmar contraseña">Confirmar contraseña: </label>
                <input type="password"name='confirmPass'  value={confirmPass} onChange = { (e) => handlerconfirmPass(e)} />
                </div>

                <Impresion  nameUser = {nameUser}
                            lastName= {lastName}
                            emailUser = {emailUser}
                            passUser = {passUser}
                            confirmPass = {confirmPass}
                />

            </form>
        </div>
    );
}

export default Formulario;
