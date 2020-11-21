import React from 'react';
import s from './Text.module.css'

const Text = ()=>{
    return(
        <div className={s.content}>
            <h4 className={s.h4}>Асперантура</h4>
            <p className={s.p}>Сдал</p>
            <p className={s.ball}>30 Б.</p>
        </div>
    )
}
export default Text