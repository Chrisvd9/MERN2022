import React, {useState, useEffect} from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { simpleGet } from '../actions/simpleGet';


const Detail = () => {

    const {id} = useParams();
    const history = useHistory();

    const [producto, setProducto] = useState();

    useEffect(() => {
        getProducto();
    }, []);

    const getProducto = async() => {
        const response = await simpleGet("http://localhost:8000/api/productos/" + id);
        console.log(response.producto);
        setProducto(response.producto);
    }


    return (
        <div>
            <h2>{producto?.titulo}</h2>
            <p>Precio: {producto?.precio}</p>
            <p>Descripción: {producto?.descripcion}</p>
            <Link to={"/producto/"+id+"/edit"}>Actualizar producto</Link>
            <div className='btn'>
            <button onClick={()=>history.push("/")}>Volver</button>
            </div>
        </div>
    );
}

export default Detail;
