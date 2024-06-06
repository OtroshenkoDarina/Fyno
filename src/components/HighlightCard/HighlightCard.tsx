import React from 'react';
import styles from './styles.module.scss'
import {Highlight} from "../../types";
import saveImg from "../../assets/images/save.svg";

interface HighlightCardProps {
    highlight: Highlight;
}

const HighlightCard: React.FC<HighlightCardProps> = ({highlight}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img className={styles.image_big} src={highlight?.image} alt={highlight?.name}/>
                <img className={styles.image_save} src={saveImg} alt={'save'}/>

                {!!highlight?.isCuratorsPick && <p className={styles.pick}>Curator’s pick</p>}
            </div>

            <div className={styles.bottom}>
                <p className={styles.name}>{highlight?.name}</p>
                <p className={styles.price}>{highlight?.time} · {highlight?.description}</p>
            </div>
        </div>
    );
};

export default HighlightCard;
