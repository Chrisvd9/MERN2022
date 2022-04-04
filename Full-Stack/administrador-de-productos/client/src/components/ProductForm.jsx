import React,{ useState}  from "react";
import axios from "axios";

const Productform = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>console.log("Response: ", res))
            .catch(err=>console.log("Error ", err))
    }



    return (
        <div>
            <form action="" onSubmit={onSubmitHandler}>
                <p>
                    <label htmlFor="">Producto: </label>
                    <input type="text" onChange={e=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="">Precio: </label>
                    <input type="text" onChange={e=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="">Descripción: </label>
                    <input type="text" onChange={e=>setDescription(e.target.value)}/>
                </p>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Productform;
