import React, {useState, useEffect} from 'react';

const Formulari2 = (props) => {
    const [formInfo, setFormInfo] = useState({
        nombre: "",
        apellido: "",
        email:"",
        password:"",
        confirmPassword:""
    });
    
    const {nombre, apellido, email,password,confirmPassword} = formInfo;


    const [errores,setErrores]=useState({
        nombre:'',
        apellido:'',
        email:'',
        password:'',
        confirmPassword:''
    });


    useEffect(() => {
        console.log(formInfo);
        validarForm();
    }, [formInfo]);

    
    const onChange = (e) => { 
        console.log(e.target.name)
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    };

    const validarForm = () => {

        const erroresAux = {
            nombre:'',
            apellido:'',
            email:'',
            password:'',
            confirmPassword:''
        };
        
        // if(nombre.length<5){
        //     erroresAux.nombre="El nombre es muy corto"
        // }
        erroresAux.nombre = nombre.length<2 ?  "El campo debe tener al menos 2 caracteres." : '';
        erroresAux.email = email.length<5 ? "El campo debe tener al menos 5 caracteres." : '';
        erroresAux.apellido = apellido.length<2 ? "El campo debe tener al menos 2 caracteres." : '';


        if(password!==confirmPassword){
            erroresAux.password="Las contraseñas no coinciden";
        }
        
        setErrores(erroresAux);
    }


    return (
        <div>
        <form onsubmit={ (e) => e.preventDefault() }/* onSubmit={crearUsuario} */>
            <div>
                
                <label htmlFor='nombre'>Nombre: </label>
            <input name="nombre" type="text" onChange={onChange}/>
                <p className='warning'> {errores.nombre} </p>
            </div>
            <div>
                <label htmlFor="apellido">Apellido: </label>
                <input name='apellido' type="text" onChange={onChange} />
                <p className='warning'> {errores.apellido} </p>
            </div>
            <div>
                <label htmlFor='email'>Correo: </label>
                <input name="email" type="text" onChange={onChange}  />
                <p className='warning'> {errores.email} </p>
            </div>
            <div>
                <label htmlFor='password'>Contraseña: </label>
                <input name="password" type="text" onChange={onChange}  />
                <p className='warning'> {errores.password} </p>
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirmar Contraseña: </label>
                <input name="confirmPassword" type="text" onChange={onChange}  />
            </div>
            <input type="submit" value="Crear Usuario"></input>
        </form>
    </div>

    );
}

export default Formulari2;
