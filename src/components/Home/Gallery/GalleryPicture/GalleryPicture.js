import React from 'react';

const GalleryPicture = ({ pic }) => {
    return (
        <div className='col-md-6 col-sm-12 col-lg-4 hover:border-primary'>
            <img className='w-100' src={pic.img} alt="" />
        </div>
    );
};

export default GalleryPicture;