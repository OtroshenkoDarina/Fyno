import React, {useState} from 'react';
import styles from './styles.module.scss'
import {Hotel} from "../../types";
import saveImg from '../../assets/images/save.svg'
import gradeImg from '../../assets/images/grade.svg'
import saveOrangeImg from "../../assets/images/symbols/save_orange.svg";

interface HotelCardProps {
    hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({hotel}) => {
    const [isSaved, setIsSaved] = useState(false)

    const onClickSave = () => setIsSaved(!isSaved)

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img className={styles.image_big} src={hotel?.image} alt={hotel?.name}/>
                <img
                    onClick={onClickSave}
                    className={styles.image_save}
                    src={isSaved ? saveOrangeImg : saveImg}
                    alt={'save'}
                />

                {!!hotel?.isCuratorsPick && <p className={styles.pick}>Curator’s pick</p>}
            </div>

            <div className={styles.bottom}>
                <p className={styles.name}>{hotel?.name}</p>

                <div className={styles.grade}>
                    <img src={gradeImg} alt={'Grade'}/>
                    {hotel?.grade}/10
                </div>
                <p className={styles.price}>${hotel?.price}+ · {hotel?.description}</p>
            </div>
        </div>
    );
};

export default HotelCard;
