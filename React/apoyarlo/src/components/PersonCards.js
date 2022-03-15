import React, { Component } from 'react';

class PersonCards extends Component {
    render() {
        const {firstName} = this.props;
        const {lastName} = this.props;
        const {age} = this.props;
        const {hairColor} = this.props;
        return (
            <div className='PersonCard'>
                <h1>{firstName}, {lastName}</h1>
                <p>{age}</p>
                <p>{hairColor}</p>
        </div>
        );
    }
}

export default PersonCards;
