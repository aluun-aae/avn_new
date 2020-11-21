import React from 'react';
import s from './Praktika.module.css'
import CircularStatic from './Krug/Krug';
import Text from './Text/Text';

const Praktika=()=>{
    return(
        <div className={s.asperantura}>
            <CircularStatic className={s.margin}/>
            <Text className={s.text}/>
        </div>
    )
}

export default Praktika