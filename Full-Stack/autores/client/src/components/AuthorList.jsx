import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

const Authorlist = (props) => {

    const { authors } = props
    const { removeFromDom } = props

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/delete/' + authorId)
            .then(res => removeFromDom(authorId))
    }

    return (
        <div>
            <p>Tenemos citas por :</p>
            <table>
                <thead>
                    <tr>
                        <th>Autores</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, i) =>
                        <tr key={i}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/edit/${author._id}`}><button>Edit</button></Link></td>
                                <button onClick={(e) => { deleteAuthor(author._id) }}>Delete</button>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Authorlist;
