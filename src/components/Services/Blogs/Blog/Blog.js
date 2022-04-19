import React from 'react';

const Blog = ({ blog }) => {
    return (
        <div>
            <h4 style={{ fontFamily: 'monospace' }} className='text-center mb-4 mt-3' >Q: {blog.question}</h4>
            <p> <span className='text-danger'>Ans</span> {blog.ans}</p>
        </div>
    );
};

export default Blog;