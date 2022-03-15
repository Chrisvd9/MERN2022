import React, { useState } from 'react';

const Tabs = () => {

    const [tabs, setTabs] = useState([{titulo:"Tab 1", estado:'active', contenido: 'Hola:)'}, 
    {titulo: "Tab 2", estado: '', contenido: 'Que tal?'}, 
    {titulo: "Tab 3", estado: '', contenido: 'Soy una pestaña:)'}]);

    const changeActive = (i) => {
        let newTabs = tabs.map((tab, index) => {
            index ===i?tab.estado='active' : tab.estado ='';
            return tab;
        })

        setTabs(newTabs);
    }

    return (
        <div className='tabContainer'>
            <h1>Tabs</h1>

            <div className='pestanas'>
            {
                tabs.map((tab,i) => {
                    return(<a key={i} className={tab.estado} onClick={()=>changeActive(i)}>{tab.titulo}</a>)
                } )
            }
            </div>
            <div className='content'>
            {tabs.filter(tab=>tab.estado==='active').map((tab,i)=><p key={i}> {tab.contenido} </p>)}
            </div>

            
        </div>
    );
}

export default Tabs;
