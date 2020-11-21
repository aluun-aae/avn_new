import s from './SpisokHeader.module.css'
import React from 'react';
import { Link } from 'react-router-dom';

const SpisokHeader =()=>{
    return(
            <div className={s.header}>
                <h4>Samarbek uulu Mairambek</h4>
                <div className={s.btns}>
                    <Link to='firstSpisok' className={s.active}>1 список</Link>
                    <Link to='secondSpisok'>2</Link>
                    <Link to='thirstSpisok'>3</Link>
                    <Link to='fourstSpisok'>4</Link>
                </div>
            </div>
    )
}
export default SpisokHeader
