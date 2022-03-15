import React, { useState } from 'react';

    const Todo = () => {
        const [inputVal, setInputVal] = useState('');
        const [list, setList] = useState([]);
    
    function add(e) {
        e.preventDefault();
    
        if(inputVal === '') return;
    
        setList([...list, {
            text: inputVal,
            completed: false
        }]);
    
        setInputVal('');
    }
    
    function remove(index) {
        setList(list.filter((_item, i) => i !== index));
    }
    
    function toggleChecked(index) {
        const obj = {
        ...list[index]
        };
    
        obj.completed = !obj.completed;
    
        setList([
            ...list.slice(0, index),
            obj
        ].concat(list.slice(index + 1)));
    }
    
    return (
        <div className='containermsg'>
            {list.map((item, i) => (
            <div className='msgs' key={i}>
                <span style={{ textDecoration: item.completed && 'line-through' }}>{item.text}</span>
                <input className='input1'
                type="checkbox" style={{color: 'red'}}
                checked={item.completed}
                onClick={() => toggleChecked(i)}
                readOnly
            />
                <button className='btn1' onClick={() => remove(i)}>Delete</button>
            </div>
            ))}
    
        <form className='form1' onSubmit={add}>
            <input className='input2'
                onChange={e => setInputVal(e.target.value)}
                value={inputVal}
            />
            <button className='btn2'>Add</button>
        </form>
        </div>
    )
}
export default Todo;

