import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGallery from '../../../customHooks/useGallery';
import GalleryPicture from './GalleryPicture/GalleryPicture';

const Gallery = ({ nOf }) => {
    const { gallery, setGallery } = useGallery(nOf);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/gallery');
    }

    return (
        <div className='container mt-5'>
            <h2 className="text-center text-primary display-3">Gallery</h2>
            <div style={{ margin: '0 auto' }} className='w-50'> <hr /></div>
            <div className="row gy-2 mt-5">
                {
                    gallery.map(pic => <GalleryPicture key={pic.id} pic={pic} ></GalleryPicture>)
                }
            </div>
            <div className='row'>
                {
                    gallery.length === nOf && <button onClick={handleNavigate} className='mt-5 btn btn-success w-25 mx-auto display-1'>See All</button>
                }
            </div>
        </div>
    );
};

export default Gallery;