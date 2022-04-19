import { useEffect, useState } from 'react';

const useGallery = (nOf) => {
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        fetch('gallery.json').then(res => res.json()).then(data => {
            if (data.length >= nOf) {
                setGallery(data.slice(0, nOf));
            }
            else {
                setGallery(data);
            }
        });
    }, [nOf]);

    return { gallery, setGallery };
}


export default useGallery;