import React from 'react';
import styles from './styles.module.scss'
import {Highlight} from "../../../../types";
import dots from '../../../../assets/images/symbols/dots.svg'
import lines from '../../../../assets/images/symbols/lines.svg'


type HighlightBlockProps = {
    highlight: Highlight;
};

const HighlightBlock: React.FC<HighlightBlockProps> = ({ highlight }) => {
    return (
        <div className={styles.highlightBlock}>
            <div className={styles.highlightBlock_left}>
                <img className={styles.highlightBlock_img} src={highlight?.image} alt={''}/>
                <div>
                    <p className={styles.highlightBlock_name}>{highlight?.name}</p>
                    {!!highlight?.isCuratorsPick && <p className={styles.highlightBlock_pick}>Curator’s pick</p>}
                    <p className={styles.highlightBlock_desc}>{highlight?.time} · {highlight?.hikeType} · {highlight?.traffic} </p>
                </div>
            </div>

            <div className={styles.highlightBlock_right}>
                <img src={lines} alt={'menu'}/>
                <img src={dots} alt={'more'}/>
            </div>

        </div>
    );
};

export default HighlightBlock;
