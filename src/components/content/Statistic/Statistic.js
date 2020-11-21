import React from 'react';
import s from './Statistic.module.css'
import Spisok from './Spisok/Spisok'
import Dannie from './Dannie/Dannie';
const Statistic = () => {
    return (
        <div className={s.statistic}>
            <div className={s.wrapper}>
                <Spisok />
                <Dannie />
            </div>
        </div>
    )
}


export default Statistic