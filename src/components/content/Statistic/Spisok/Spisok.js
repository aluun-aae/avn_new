import s from './Spisok.module.css'
import React from 'react';
import SpisokContent from './SpisokContent/SpisokContent';
import SpisokHeader from './SpisokHeader/SpisokHeader';

const Spisok =()=>{
    return(
        <div className={s.spisok}>
            <SpisokHeader />
            <SpisokContent />
        </div>
    )
}
export default Spisok