import React from 'react';
import s from './SpisokContent.module.css'
import Punkt from './Punkt/Punkt'
const SpisokContent =()=>{
    return(
        <div className={s.spisokContent}>
            <div className={s.mainPunkt}>
                <p>№</p>
                <p>Имя</p>
                <p>Почта</p>
                <p>Успеваемость</p>
            </div>
            <Punkt />
            <Punkt />
            <Punkt />
            <Punkt />
            <Punkt />
            <Punkt />
            <Punkt />
        </div>
    )
}
export default SpisokContent
