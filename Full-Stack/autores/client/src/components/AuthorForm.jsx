import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

const AuthorForm = () => {

    const [name, setName] = useState('');
    const [errors, setErrors] = useState([])

    const history = useHistory()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors/new', {
            name
        })
            .then(res => {
                console.log('Response', res)
                history.push('/')
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }





    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
            <p>Añadir autor:</p>
            <div>
                <form onSubmit={onSubmitHandler}>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                    {errors.map((err, i) => <p key={i}>{err}</p>)}
                    <div>
                        <button onClick={()=> history.push("/")}>Cancelar</button>
                        <button className='m-2' type='submit'>Añadir</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AuthorForm;
