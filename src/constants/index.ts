import durationImg1 from '../assets/images/1.jpeg'
import durationImg2 from '../assets/images/2.png'
import durationImg3 from '../assets/images/3.png'
import durationImg4 from '../assets/images/4.png'
import durationImg5 from '../assets/images/5.png'

import h_1 from '../assets/images/h_1.png'
import h_2 from '../assets/images/h_2.png'
import h_3 from '../assets/images/h_3.png'
import h_4 from '../assets/images/h_4.png'
import h_5 from '../assets/images/h_5.png'
import h_6 from '../assets/images/h_6.png'
import h_7 from '../assets/images/h_7.png'

import s_1 from '../assets/images/s_1.png'
import s_2 from '../assets/images/s_2.png'
import s_3 from '../assets/images/s_3.png'
import s_4 from '../assets/images/s_4.png'
import s_5 from '../assets/images/s_5.png'
import s_6 from '../assets/images/s_6.png'

export const DURATION_OPTIONS = [
    '5 days',
    '6 days',
    '7 days',
    '8 days',
    '9 days',
    '10 days',
]
export const DEFAULT_DURATION = '7 days'

export const DURATION_IMAGE_BIG = durationImg1

export const DURATION_IMAGES = [
    durationImg2,
    durationImg4,
    durationImg3,
    durationImg5,
]

export const REGION_DATA_1 = {
    id: 123,
    name: 'Golden Circle Region',
    features: ['Geysers', 'Waterfalls', 'Crater lakes'],
    description: 'The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland\'s ancient parliament.',
    highlights: [
        {
            isCuratorsPick: true,
            time: '1h',
            image: h_1,
            name: 'Gullfoss Waterfall',
            description: 'Waterfall',
            traffic: 'Light traffic',
            hikeType: 'Iconic hike'
        },
        {
            isCuratorsPick: true,
            time: '1h',
            image: h_2,
            name: 'Reykjadalur Valley',
            description: 'Iconic hike, hot springs',
            traffic: 'Light traffic',
            hikeType: 'Iconic hike'
        },
        {
            isCuratorsPick: false,
            time: '1h',
            image: h_3,
            name: 'Geysir Thermal Field',
            description: 'Geysers',
            traffic: 'Light traffic',
            hikeType: 'Iconic hike'
        },
        {
            isCuratorsPick: true,
            time: '1h',
            image: h_7,
            name: 'Thingvellir',
            description: 'Iconic hike',
            traffic: 'Light traffic',
            hikeType: 'Iconic hike'
        },
    ],
    hotels: [
        {
            isCuratorsPick: true,
            image: s_1,
            name: 'Frost and Fire Hotel',
            grade: '9.1',
            description: 'Boutique hotel',
            price: '180'
        },
        {
            isCuratorsPick: true,
            image: s_2,
            name: 'The Greenhouse Hotel',
            grade: '9.1',
            description: 'Luxury hotel',
            price: '230'
        },
        {
            isCuratorsPick: false,
            image: s_3,
            name: 'INNI',
            grade: '9.1',
            description: 'Apart hotel',
            price: '130'
        },
        {
            isCuratorsPick: true,
            image: s_4,
            name: 'Magma Hotel',
            grade: '9.1',
            description: 'Boutique hotel',
            price: '250'
        },
        {
            isCuratorsPick: true,
            image: s_5,
            name: 'Hotel Vík í Mýrdal',
            grade: '9.1',
            description: 'Luxury hotel',
            price: '150'
        },
        {
            isCuratorsPick: false,
            image: s_6,
            name: 'Hótel Kría',
            grade: '9.1',
            description: 'Luxury hotel',
            price: '130'
        },
    ]
}

export const REGION_DATA_2 = {
    id: 456,
    name: 'South & Highlands',
    features: ['Geysers', 'Waterfalls', 'Crater lakes'],
    description: 'The South & Highlands of Iceland offer a breathtaking landscape of diverse natural wonders, from expansive glaciers and active volcanoes to serene waterfalls and black sand beaches. This region is also a haven for adventurers, featuring numerous hiking trails, hidden hot springs, and vast lava fields waiting to be explored. Visitors will be captivated by the blend of tranquility and raw, untamed beauty that defines this unique part of Iceland.',
    highlights: [
        {
            isCuratorsPick: true,
            time: '1h',
            image: h_4,
            name: 'Skógafoss Waterfall',
            description: 'Iconic waterfall',
            traffic: 'Light traffic',
            hikeType: 'Iconic hike'
        },
        {
            isCuratorsPick: true,
            time: '1h',
            image: h_5,
            name: 'Katla Ice Cave',
            description: 'Ice caves',
            traffic: 'Light traffic',
            hikeType: 'Iconic hike'
        },
        {
            isCuratorsPick: false,
            time: '1h',
            image: h_6,
            name: 'Fjaðrárgljúfur',
            description: 'Geysers',
            traffic: 'Light traffic',
            hikeType: 'Iconic hike'
        },
        {
            isCuratorsPick: true,
            time: '1h',
            image: h_7,
            name: 'Thingvellir',
            description: 'Iconic hike',
            traffic: 'Light traffic',
            hikeType: 'Iconic hike'
        },
    ],
    hotels: [
        {
            isCuratorsPick: true,
            image: s_4,
            name: 'Magma Hotel',
            grade: '9.1',
            description: 'Boutique hotel',
            price: '250'
        },
        {
            isCuratorsPick: true,
            image: s_5,
            name: 'Hotel Vík í Mýrdal',
            grade: '9.1',
            description: 'Luxury hotel',
            price: '150'
        },
        {
            isCuratorsPick: false,
            image: s_6,
            name: 'Hótel Kría',
            grade: '9.1',
            description: 'Luxury hotel',
            price: '130'
        },
        {
            isCuratorsPick: true,
            image: s_4,
            name: 'Magma Hotel',
            grade: '9.1',
            description: 'Boutique hotel',
            price: '250'
        },
        {
            isCuratorsPick: true,
            image: s_5,
            name: 'Hotel Vík í Mýrdal',
            grade: '9.1',
            description: 'Luxury hotel',
            price: '150'
        },
        {
            isCuratorsPick: false,
            image: s_6,
            name: 'Hótel Kría',
            grade: '9.1',
            description: 'Luxury hotel',
            price: '130'
        },
    ]
}
