import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    
    const {id, title, body} = props.post;

    return (
        <div>
            <h3><strong>{id}</strong>: {title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Know more..</button></Link>
        </div>
    );
};

export default Post;