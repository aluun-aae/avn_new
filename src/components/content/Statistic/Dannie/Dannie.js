import React from 'react';
import Asperantura from './Asperantura/Asperantura';
import Bakalavr from './Bakalavr/Bakalavr';
import Praktika from './Praktika/Praktika';
import s from './Dannie.module.css'

const Dannie=()=>{
    return(
        <div className={s.dannie}>
            <Asperantura /> 
            <Bakalavr /> 
            <Praktika /> 
        </div>
    )
}

export default Dannie