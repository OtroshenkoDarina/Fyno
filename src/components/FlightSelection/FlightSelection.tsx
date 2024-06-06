import React from 'react';
import styles from './styles.module.scss'
import Input from "../Input/Input";
import planeImg from '../../assets/images/symbols/plane.svg'
import calendarImg from '../../assets/images/symbols/calendar.svg'
import personImg from '../../assets/images/symbols/person.svg'

const FlightSelection = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Input disabled value={'Reykjavík, KEF'} setValue={() => null} notEditable maxWidth={'179px'}/>
                <div>
                    <img src={planeImg} alt={'flight'}/>
                </div>
                <Input disabled value={'San Francisco, SFO'} setValue={() => null} notEditable maxWidth={'179px'}/>
            </div>
            <div className={styles.wrapper}>
                <Input disabled image={calendarImg} value={'Jul 03 – Jul 11'} setValue={() => null} notEditable
                       maxWidth={'165px'}/>
                <Input disabled image={personImg} value={'2'} setValue={() => null} notEditable maxWidth={'70px'}/>
            </div>
        </div>
    );
};

export default FlightSelection;
