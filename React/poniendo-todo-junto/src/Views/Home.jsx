import React, { Component } from 'react';
import PersonCard from '../Components/PersonCard';

class Home extends Component {
    render() {
        return (
            <div>
                <PersonCard lastName = {"Doe"} firstName = {"Jane"}  age= {44} hairColor = {"Black"}/>
                <PersonCard lastName = {"Smith"} firstName = {"John"} age ={85}  hairColor = {"Brown"}/>
                
            </div>
        );
    }
}

export default Home;
