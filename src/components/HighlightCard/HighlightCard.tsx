import React, {useState} from 'react';
import styles from './styles.module.scss'
import {Highlight} from "../../types";
import saveImg from "../../assets/images/save.svg";
import saveOrangeImg from "../../assets/images/symbols/save_orange.svg";

interface HighlightCardProps {
    highlight: Highlight;
}

const HighlightCard: React.FC<HighlightCardProps> = ({highlight}) => {
    const [isSaved, setIsSaved] = useState(false)

    const onClickSave = () => setIsSaved(!isSaved)

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img className={styles.image_big} src={highlight?.image} alt={highlight?.name}/>
                <img
                    onClick={onClickSave}
                    className={styles.image_save}
                    src={isSaved ? saveOrangeImg : saveImg}
                    alt={'save'}
                />

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
