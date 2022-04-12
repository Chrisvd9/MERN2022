import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Authorlist from '../components/AuthorList';

const Main = () => {

    const [authors, setAuthors] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => setAuthors(res.data.authors))
    }, []);

    const RemoverDelDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    return (
        <div>
            <nav>
                <Link to='/new'><button> Añadir autor </button></Link>
            </nav>
            {authors && <Authorlist authors={authors} removeFromDom={RemoverDelDom}/>}

        </div>
    );
}

export default Main;
