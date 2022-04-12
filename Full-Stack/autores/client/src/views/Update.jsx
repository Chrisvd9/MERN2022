import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom'
import axios from 'axios'

const Update = () => {

    const { id } = useParams()
    const history = useHistory()

    const [name, setName] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setName(res.data.author.name))
            .catch(err => ('Error: ' ,err))
    }, []);

    const updateAuthor = (e) => {
        e.preventDefault()
        if (name.length >= 3) {
            axios.put(`http://localhost:8000/api/authors/update/${id}`, {
                name
            })
                .then(res => {
                    console.log(res)
                    onCancel()
                })
        }
        if (name.length === 0) {
            setError('Name is required.')
        }
        if (name.length > 0 && name.length <= 2) {
            setError('Name must be at least 3 characters long.')
        }
    }

    const onCancel = () => {
        history.push(`/`)
    }

    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
                <div>
                    <p>Edit this author:</p>
                    <form onSubmit={updateAuthor}>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <p>{error}</p>
                        <div>
                            <button onClick={onCancel}>Cancelar</button>
                            <button type='submit'>Guardar</button>
                        </div>
                    </form>
                </div>
        </div>
    );
}

export default Update;
