import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { simpleGets } from '../services/simpleGets';



const Home = () => {

    
    const onClick = async() =>{
        const response = await simpleGets("");
        console.log(response);
        setPersonajes(response.results);
    }



    return (
        <div className='container'>
            <div>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
                <option value="planets">Planets</option>
            </Form.Select>
            </div>
            <form>
                <label htmlFor="">Id </label>
                <input type="text" name="" id="" />
                <input type="submit" value="Search"/>
            </form>
        </div>
    );
}

export default Home;
