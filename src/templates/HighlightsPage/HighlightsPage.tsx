import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss'
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Button from "../../components/Button/Button";
import {useNavigate, useParams} from "react-router-dom";
import {REGION_DATA_1, REGION_DATA_2} from "../../constants";
import {Highlight} from "../../types";
import HighlightBlock from "./Sections/HighlightBlock/HighlightBlock";
import stars from '../../assets/images/symbols/stars_black.svg'
import dots from '../../assets/images/symbols/dots.svg'
import pathImg from '../../assets/images/symbols/path.svg'
import cn from "classnames";
import {pathList} from "../../routes/path";

const HighlightsPage = () => {
    const [highlightData, setHighlightData] = useState<Highlight[]>([])

    const params = useParams()
    const navigate = useNavigate()

    const setBodyColor = (color: string) => document.body.style.background = color
    const onClickMain = () => navigate(pathList.mainPage)

    useEffect(() => {
        if (+(params?.id || 0) === REGION_DATA_1?.id)
            setHighlightData(REGION_DATA_1?.highlights)
        else if (+(params?.id || 0) === REGION_DATA_2?.id)
            setHighlightData(REGION_DATA_2?.highlights)
    }, [params?.id])

    useEffect(() => {
        setBodyColor('rgb(245,245,245)')

        return () => {
            setBodyColor('white')
        }
    }, []);

    return (
        <MainLayout>
            <div className={styles.wrapper}>
                <ul className={styles.stepProgress}>

                    <li className={styles.stepProgressItem}>
                        <div className={styles.header}>
                            <h3>2 days plan</h3>
                            <Button text={'Show highlights'} image={stars} onClick={onClickMain}/>
                        </div>
                    </li>

                    <li className={cn(styles.stepProgressItem, styles.noDot)}>
                        <div className={styles.subtitle}>
                            <p>Day 1</p>
                            <div className={styles.subtitle_actions}>
                                <div>
                                    <img src={pathImg} alt={'path'}/>
                                    40m
                                </div>
                                <img className={styles.subtitle_dots} src={dots} alt={''}/>
                            </div>
                        </div>
                    </li>


                    {highlightData
                        ?.slice(0, 2)
                        ?.map((item, key) =>
                            <li key={key} className={styles.stepProgressItem}>
                                <HighlightBlock highlight={item}/>
                            </li>)
                    }

                    <li className={cn(styles.stepProgressItem, styles.noDot, styles.divider)}/>

                    <li className={cn(styles.stepProgressItem, styles.noDot)}>
                        <div className={styles.subtitle}>
                            <p>Day 2</p>
                            <div className={styles.subtitle_actions}>
                                <div>
                                    <img src={pathImg} alt={'path'}/>
                                    1h 40m
                                </div>
                                <img className={styles.subtitle_dots} src={dots} alt={''}/>
                            </div>
                        </div>
                    </li>

                    {highlightData
                        ?.slice(-2)
                        ?.map((item, key) =>
                            <li key={key} className={styles.stepProgressItem}>
                                <HighlightBlock highlight={item}/>
                            </li>)
                    }

                </ul>
            </div>
        </MainLayout>
    );
};

export default HighlightsPage;
