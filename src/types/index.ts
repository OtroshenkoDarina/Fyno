export type RegionData = {
    id: number,
    name: string,
    features: string[],
    description: string,
    highlights: Highlight[],
    hotels: Hotel[]
}

export type Highlight = {
    isCuratorsPick: boolean,
    time: string,
    image: string,
    name: string,
    description: string,
    traffic: string,
    hikeType: string
}

export type Hotel = {
    isCuratorsPick: boolean,
    image: string,
    name: string,
    grade: string,
    description: string,
    price: string
}
