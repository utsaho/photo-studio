import React, { useState } from 'react';
import { useEffect } from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('qna.json').then(res => res.json()).then(data => setBlogs(data));
    }, []);
    return (
        <div>
            <h2 className='text-primary display-4 text-center'>FaQ</h2>
            <div style={{ margin: '0 auto' }} className='w-50'> <hr /></div>
            <div className='container'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>

        </div>
    );
};

export default Blogs;