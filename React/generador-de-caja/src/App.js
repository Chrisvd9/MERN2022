import './App.css';
import React, {useState} from 'react';
import Boxs from './components/Boxs';
import Resultado from './components/Resultado';

function App() {
  
  const [cajas, setCajas] = useState([]);

  return (
    <div className="App">
      <Boxs cajas={cajas} setCajas={setCajas} />
      <Resultado data={cajas} />
    </div>
  );
}

export default App;
