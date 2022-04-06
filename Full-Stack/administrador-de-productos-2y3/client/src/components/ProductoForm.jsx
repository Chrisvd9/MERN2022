import React,{ useState } from 'react';

const Productoform = (props) => {

    const {initialTitulo, initialPrecio, initialDescripcion, onSubmitProp} = props;
    const [titulo, setTitulo] = useState(initialTitulo);
    const [precio, setPrecio] = useState(initialPrecio);
    const [descripcion, setDescripcion] = useState(initialDescripcion);

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log({titulo, precio, descripcion});
        onSubmitProp({titulo, precio, descripcion});
    }   


    return (
        <div>
            <form action="" onSubmit={onSubmitHandler} className="product-form">
                <div className='div-form'>
                    <label htmlFor="">Titulo: </label>
                    <input type="text" value={titulo} onChange = {(e)=>setTitulo(e.target.value)} />
                </div>
                <div className='div-form'>
                <label htmlFor="">Precio: </label>
                    <input type="text" value={precio} onChange = {(e)=>setPrecio(e.target.value)} />
                </div>
                <div className='div-form'>
                <label htmlFor="">Descripción: </label>
                    <input type="text" value={descripcion} onChange = {(e)=>setDescripcion(e.target.value)} />
                </div>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    );
}

export default Productoform;
