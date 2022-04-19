import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ book }) => {
    const navigate = useNavigate();
    const buyNow = () => {
        navigate('/checkout');
    }
    return (
        <div className='d-flex mb-5 align-items-center'>
            <div>
                <img src={book.img} width='300px' alt="" />
            </div>
            <div className='ms-5'>
                <h3>Name: <span className='text-primary'>{book.name}</span></h3>
                <p>Price: ${book.price}</p>
                <p>{book.story}</p>
                <button className='btn btn-primary' onClick={buyNow}>Buy Now</button>
            </div>
        </div>
    );
};

export default Service;