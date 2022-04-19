import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service/Service';


const Services = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('services.json').then(res => res.json()).then(data => setBooks(data));
    }, []);

    return (
        <div className='container'>
            <h2 className='text-center mt-5 mb-5 display-3' style={{ fontFamily: 'monospace' }} >My <span className='text-danger'>Services</span></h2>
            <div style={{ margin: '0 auto' }} className='w-50'> <hr /></div>
            <div className='row'>

                {
                    books.map(book => <Service key={book.id} book={book} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;