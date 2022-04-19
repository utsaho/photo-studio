import React from 'react';

const Wild = ({ wild }) => {
    const { img, search } = wild;
    return (
        <div>
            <img role='button' onClick={(e) => {
                window.open(`https://www.google.com/search?q=${search + ' wildlife'}`, '_blank');
            }}
                className='h-100 w-100 m-3 p-3' src={img} alt={search} />
        </div>
    );
};

export default Wild;