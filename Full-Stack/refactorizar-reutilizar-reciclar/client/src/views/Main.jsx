import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { simpleGet } from '../actions/simpleGet';
import Productoform from '../components/ProductoForm';


const Main = () => {

    const [productos, setProductos] = useState();

    useEffect(() => {
        getProductos();
    }, []);

    const getProductos = async() => {
        const response = await simpleGet("http://localhost:8000/api/productos");
        console.log(response);
        setProductos(response.productos);
    }

    const crearProducto = (producto) => {
        console.log("desde main: "+producto.titulo);

        fetch("http://localhost:8000/api/productos/new", {
            method: "POST",
            body: JSON.stringify(producto),
            headers: {
                Accept: "application/json",
                "Content-Type" : "application/json", 
            }
        })
            .then((res)=>res.json())
            .then((res)=>{
                console.log("Producto creado");
                console.log(res);
                setProductos([...productos, res.producto]);
            })
    }

    const eliminarProducto = (idProducto) => {
        fetch("http://localhost:8000/api/productos/delete/"+idProducto, {
            method:"DELETE"
        })
        .then(res=> res.text())
        .then(res=>{
            console.log("Eliminado ",res);
            getProductos();
        })
    }





    return (
        <div className='container'>
            <div className='main'>
                <Productoform initialTitulo="" initialPrecio="" initialDescripcion="" onSubmitProp={crearProducto}></Productoform>
                <h1>Todos los productos: </h1>
            </div>
            {productos?.map((producto, i)=>{
                return(
                    <div key={i}>
                        <Link className='Link' to={"producto/"+producto._id}> {producto.titulo} </Link>
                        <button onClick={()=>eliminarProducto(producto._id)}>Eliminar</button>
                    </div>
                )
            })}
        </div>
    );
}

export default Main;
