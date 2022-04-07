import React, { useEffect, useState } from 'react';
import { useHistory, useParams,Link } from "react-router-dom";
import { simpleGet } from '../actions/simpleGet';
import Productoform from '../components/ProductoForm';

const Update = () => {
    
    let { id } = useParams();
    const [producto, setProducto] = useState();

    useEffect(() => {
        getProducto();
    }, []);

    const getProducto = async() => {
        const response = await simpleGet("http://localhost:8000/api/productos/" + id);
        console.log(response.producto);
        setProducto(response.producto);
    }

    const history = useHistory();


    const editarProducto = (producto) => {
        fetch("http://localhost:8000/api/productos/update/" +id, {
            method: "PUT",
            body: JSON.stringify(producto),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((res) => {
            console.log("Producto editado");
            console.log(res);
            history.push("/")
        });
    }

    return (
        <div>
            <h1>Actualizar Producto: {producto?.titulo}</h1>
            {producto && <Productoform initialTitulo={producto.titulo} initialPrecio={producto.precio} initialDescripcion={producto.descripcion} onSubmitProp={editarProducto}></Productoform>}
            <button onClick={()=>history.push("/")}>Volver</button>
        </div>
    );
}

export default Update;
