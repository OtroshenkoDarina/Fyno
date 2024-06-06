import React from 'react';
import styles from './styles.module.scss'
import saveImg from '../../../../assets/images/symbols/save.svg'
import shareImg from '../../../../assets/images/symbols/share.svg'
import Button from "../../../../components/Button/Button";
import avatar from '../../../../assets/images/avatar.jpeg'

const Highlights = () => {
    return (
        <>
            <div className={styles.highlights_header}>
                <h2>Iceland’s Highlights</h2>
                <div className={styles.highlights_header_buttons}>
                    <Button text={'Add to wishlist'} image={saveImg}/>
                    <Button text={'Share'} image={shareImg}/>
                </div>
            </div>

            <div className={styles.expert}>
                <div className={styles.expert_avatar}>
                    <img src={avatar} alt={'avatar'}/>
                </div>
                <div>
                    <p className={styles.expert_name}>Curated by Sandra</p>
                    <p className={styles.expert_position}>Fyno expert</p>
                </div>
            </div>


            <p className={styles.highlights_text}>Welcome to Iceland, a land of breathtaking landscapes and unspoiled natural beauty. From its majestic
                waterfalls and geothermal wonders to the vibrant culture and rich history, Iceland promises an
                unforgettable adventure for every traveler.</p>

        </>
    );
};

export default Highlights;
