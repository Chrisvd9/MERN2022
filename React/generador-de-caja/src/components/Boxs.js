import React, {useState, useEffect} from 'react';

const Boxs = (props) => {
    const {cajas , setCajas} = props;

    const [color, setColor] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        setCajas([...cajas, color]);
    }

    useEffect(() => {
        console.log(cajas)
    }, [cajas]);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='forms'>
                    <label htmlFor="box">Color: </label>
                    <input type="color" name='box' onChange={(e) => setColor(e.target.value)} />
                </div>    
                <div className='forms'>
                    <input className='btn' type="submit" value='Agregar color' />
                </div>
            </form>
        </div>
    );
}

export default Boxs;
