import React from 'react';
import styles from './styles.module.scss'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Highlight, Hotel} from "../../types";
import HotelCard from "../HotelCard/HotelCard";
import HighlightCard from "../HighlightCard/HighlightCard";
import arrow from '../../assets/images/slider_arrow.svg'
import {Keyboard, Navigation} from 'swiper/modules';
import {useSwiper} from 'swiper/react';

interface CustomSliderProps {
    data: Hotel[] | Highlight[];
    isHotel?: boolean
}


const SliderArrow = () => {
    const swiper = useSwiper();

    return (
        <div className={styles.arrow} onClick={() => swiper?.slideNext()}>
            <img src={arrow} alt={''}/>
        </div>
    );
};

const CustomSlider: React.FC<CustomSliderProps> = ({data, isHotel}) => {


    return (
        <div className={styles.custom_slider}>

            <Swiper
                slidesPerView={'auto'}
                spaceBetween={16}
                className="mySwiper"
                modules={[Keyboard, Navigation]}
                navigation={true}
                keyboard={{
                    enabled: true,
                }}
            >
                <SliderArrow/>
                {data?.map((item, key) =>
                    <SwiperSlide key={key}>
                        {
                            isHotel
                                // @ts-ignore
                                ? <HotelCard hotel={item}/>
                                // @ts-ignore
                                : <HighlightCard highlight={item}/>
                        }
                    </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default CustomSlider;
