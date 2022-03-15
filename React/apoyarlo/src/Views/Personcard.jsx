import React, { Component } from 'react';
import PersonCards from '../components/PersonCards';

class Home extends Component {
    render() {
        return (
            <div>
                <PersonCards lastName = {"Jane"} firstName = {"Doe"}  age= {"Age: 45"} hairColor = {"Hair Color: Black"}/>
                <PersonCards lastName = {"Smith"} firstName = {"John"}  age= {"Age: 88"} hairColor = {"Hair Color: Brown"}/>
                <PersonCards lastName = {"Fillmore"} firstName = {"Millard"}  age= {"Age: 50"} hairColor = {"Hair Color: Brown"}/>
                <PersonCards lastName = {"Smith"} firstName = {"Maria"}  age= {"Age: 62"} hairColor = {"Hair Color: Brown"}/>

            </div>
        );
    }
}

export default Home;
