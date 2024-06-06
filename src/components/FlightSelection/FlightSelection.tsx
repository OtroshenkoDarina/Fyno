import React from 'react';
import styles from './styles.module.scss'
import Input from "../Input/Input";
import planeImg from '../../assets/images/symbols/plane.svg'
import calendarImg from '../../assets/images/symbols/calendar.svg'
import personImg from '../../assets/images/symbols/person.svg'

const FlightSelection = () => {

    return (
        <div className={styles.container}>
            <Input value={'Reykjavík, KEF'} setValue={() => null} notEditable maxWidth={'179px'}/>
            <div>
                <img src={planeImg} alt={'flight'}/>
            </div>
            <Input value={'San Francisco, SFO'} setValue={() => null} notEditable maxWidth={'179px'}/>
            <Input image={calendarImg} value={'Jul 03 – Jul 11'} setValue={() => null} notEditable maxWidth={'157px'}/>
            <Input image={personImg} value={'2'} setValue={() => null} notEditable maxWidth={'70px'}/>
        </div>
    );
};

export default FlightSelection;
