import React, { useEffect, useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouSelItem from './CarouSelItem/CarouSelItem';

const CarouSel = () => {
    const [carouselItems, setCaroselItems] = useState([]);
    useEffect(() => {
        fetch('carouselData.json').then(res => res.json()).then(data => setCaroselItems(data));
    }, []);
    return (
        <div>

            <Carousel showThumbs={false} className='carousel' autoPlay infiniteLoop useKeyboardArrows>
                {
                    carouselItems.map(item => <CarouSelItem key={item.id} item={item}></CarouSelItem>)
                }
            </Carousel>
        </div>
    );
};

export default CarouSel;