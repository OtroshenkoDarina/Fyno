import React, {RefObject, useRef, useState} from 'react';
import styles from './styles.module.scss'
import plus from "../../../../assets/images/symbols/plus.svg";
import Button from "../../../../components/Button/Button";
import {DEFAULT_DURATION, DURATION_IMAGE_BIG, DURATION_IMAGES, DURATION_OPTIONS} from "../../../../constants";
import arrow from '../../../../assets/images/symbols/arrow.svg'
import moreImg from '../../../../assets/images/symbols/more.svg'
import Dropdown from "../../../../components/Dropdown/Dropdown";
import useOutsideClick from "../../../../hooks/dom/useOutsideClick";
import cn from "classnames";

interface TripDurationProps {
    regionRef: RefObject<HTMLDivElement>;
}


const TripDuration: React.FC<TripDurationProps> = ({regionRef}) => {
    const [duration, setDuration] = useState(DEFAULT_DURATION)
    const [isOpenDropdown, setIsOpenDropdown] = useState(false)

    const dropdownRef = useRef<HTMLUListElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const onClickView = () => {
        regionRef?.current?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    const onCloseDropdown = () => setIsOpenDropdown(false)
    const onToggleDropdown = () => setIsOpenDropdown(!isOpenDropdown)

    useOutsideClick(dropdownRef, onCloseDropdown, containerRef)

    return (
        <div>
            <div className={styles.duration_wrapper}>
                <div className={cn(styles.duration, isOpenDropdown && styles.duration_open)}>
                    <p>Trips</p>
                    <hr/>
                    <p>Iceland</p>
                    <hr/>
                    <div ref={containerRef} onClick={onToggleDropdown}
                         className={cn(styles.duration_days, isOpenDropdown && styles.duration_days_open)}>
                        {duration}
                        <img src={arrow} alt={isOpenDropdown ? 'close' : 'open'}/>

                        {isOpenDropdown && <Dropdown
                            options={DURATION_OPTIONS}
                            setActiveOption={setDuration}
                            activeOption={duration}
                            isOpen={isOpenDropdown}
                            onClose={onCloseDropdown}
                            dropdownRef={dropdownRef}
                        />}
                    </div>
                </div>
                <Button text={'Create'} isRounded image={plus}/>
            </div>

            <div className={styles.images_wrapper}>
                <div className={styles.main_img}>
                    <img src={DURATION_IMAGE_BIG} alt={''}/>
                </div>
                <div className={styles.images_list}>
                    {DURATION_IMAGES?.map((item, key) => <div key={key} className={styles.img_item}>
                        <img src={item} alt={''}/>
                    </div>)}
                </div>

                <div className={styles.more}>
                    <img src={moreImg} alt={'More'}/>
                    All photos
                </div>
            </div>

            <div className={styles.summary}>
                <div className={styles.summary_data}>
                    <div className={styles.summary_data_item}>
                        <p className={styles.summary_data_subtitle}>Trip duration</p>
                        <p className={styles.summary_data_text}>{duration}</p>
                    </div>

                    <div className={styles.summary_data_item}>
                        <p className={styles.summary_data_subtitle}>Exploration</p>
                        <p className={styles.summary_data_text}>4 regions</p>
                    </div>

                    <div className={styles.summary_data_item}>
                        <p className={styles.summary_data_subtitle}>Flight</p>
                        <p className={styles.summary_data_text}>7h 20m from SFO</p>
                    </div>
                </div>

                <div onClick={onClickView} className={styles.summary_view}>
                    View itinerary
                </div>
            </div>
        </div>
    );
};

export default TripDuration;
