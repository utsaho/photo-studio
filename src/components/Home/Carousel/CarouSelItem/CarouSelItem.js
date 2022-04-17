import React from 'react';

const CarouSelItem = ({ item }) => {
    const { img, place } = item;
    return (
        <div>
            <img src={img} alt='' />
            <h1 className="legend">{place}2</h1>
        </div>
    );
};

export default CarouSelItem;