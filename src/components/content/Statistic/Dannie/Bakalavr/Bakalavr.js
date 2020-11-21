import React from 'react';
import s from './Bakalavr.module.css'
import CircularStatic from './Krug/Krug';
import Text from './Text/Text';

const Bakalavr=()=>{
    return(
        <div className={s.asperantura}>
            <CircularStatic className={s.margin}/>
            <Text className={s.text}/>
        </div>
    )
}

export default Bakalavr