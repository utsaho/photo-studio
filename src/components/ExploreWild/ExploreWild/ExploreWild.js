import React, { useState } from 'react';
import { useEffect } from 'react';
import Wild from '../Wild/Wild';

const ExploreWild = () => {
    const [wilds, setWilds] = useState([]);
    useEffect(() => {
        fetch('exploreWild.json').then(res => res.json()).then(data => setWilds(data));
    }, []);
    return (
        <div className='mt-5 me-5'>
            <h2 className='text-success text-center display-3'>Explore Wild</h2>
            <div style={{ margin: '0 auto' }} className='w-50'> <hr /></div>
            <div className='d-flex'>
                {
                    wilds.map(wild => <Wild key={wild.id} wild={wild}></Wild>)
                }
            </div>
        </div>
    );
};

export default ExploreWild;