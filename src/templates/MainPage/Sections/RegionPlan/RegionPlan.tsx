import React from 'react';
import styles from './styles.module.scss'
import {RegionData} from "../../../../types";
import Button from "../../../../components/Button/Button";
import planImg from '../../../../assets/images/symbols/plan.svg'
import CustomSlider from "../../../../components/CustomSlider/CustomSlider";
import {useNavigate} from 'react-router-dom'
import {pathList} from "../../../../routes/path";
import useWidowDimensions from "../../../../hooks/dom/useWidowDimensions";

interface RegionPlanProps {
    regionData: RegionData
}

const RegionPlan: React.FC<RegionPlanProps> = ({regionData}) => {
    const navigate = useNavigate()
    const widowDimensions = useWidowDimensions()

    const onClickHighlights = () => navigate(pathList.highlightsNavigation + regionData?.id?.toString())

    return (
        <div className={styles.wrapper}>
            <ul className={styles.stepProgress}>

                <li className={styles.stepProgressItem}>
                    <h2 className={styles.title}>{regionData?.name}</h2>
                    <div className={styles.features}>
                        {regionData?.features?.map((item, key) => <p key={key}>{item}</p>)}
                    </div>
                    <p className={styles.text}>{regionData?.description}</p>
                </li>


                <li className={styles.stepProgressItem}>
                    <div className={styles.subheader}>
                        <h3>Region highlights</h3>
                        <Button text={widowDimensions?.width <= 400 ? '' : 'Show daily plan'} image={planImg} onClick={onClickHighlights}/>
                    </div>

                    <CustomSlider data={regionData?.highlights}/>

                </li>


                <li className={styles.stepProgressItem}>
                    <h3 className={styles.hotel_subheader}>Where to stay</h3>
                    <CustomSlider data={regionData?.hotels} isHotel/>
                </li>
            </ul>
        </div>
    );
};

export default RegionPlan;
