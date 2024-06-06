import React, {useRef} from 'react';
import styles from './styles.module.scss'
import MainLayout from "../../layouts/MainLayout/MainLayout";
import TripDuration from "./Sections/TripDuration/TripDuration";
import Highlights from "./Sections/Highlights/Highlights";
import FlightSelection from "../../components/FlightSelection/FlightSelection";
import RegionPlan from "./Sections/RegionPlan/RegionPlan";
import {REGION_DATA_1, REGION_DATA_2} from "../../constants";

const MainPage = () => {
    const regionRef = useRef<HTMLDivElement>(null);

    return (
        <MainLayout>
            <TripDuration regionRef={regionRef}/>
            <Highlights/>

            <div className={styles.itinerary}>
                <h3 className={styles.subtitle}>Iceland itinerary</h3>
                <FlightSelection/>
                <div ref={regionRef}/>
            </div>

            <RegionPlan regionData={REGION_DATA_1}/>
            <RegionPlan regionData={REGION_DATA_2}/>
        </MainLayout>
    );
};

export default MainPage;
