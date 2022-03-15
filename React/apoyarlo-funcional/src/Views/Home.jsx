import React from 'react';
import Personcards from '../Components/PersonCards';

const Home = () => {
    return (
        <div>
            <Personcards firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
            <Personcards firstName="Jonh" lastName="Smith" age={88} hairColor="Brown"/>
            <Personcards firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
            <Personcards firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
        </div>
    );
}

export default Home;
