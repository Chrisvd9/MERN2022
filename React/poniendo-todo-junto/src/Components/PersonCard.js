import React, {useState} from 'react';

const Personcard = (props) => {
    const {firstName, lastName, hairColor, age: initialAge} = props;
    const [age, setAge] = useState(initialAge);
    const felizCumple = () => {
        setAge((currAge) => currAge+ 1);
    };
    return (
        <div className='PersonCard'>
            <h1>{lastName}, {firstName}</h1>
            <div id='div1'>Age: {age}</div>
            <div id='div1'>Hair Color: {hairColor}</div>
            <button id= 'BD' onClick={felizCumple}> Birthday Buton for {firstName} {lastName}</button>
        </div>
    );
}

export default Personcard;


