import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostInfo = () => {

    const { id } = useParams();

    const [post, setPost] = useState({});
    const { title, body } = post;


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const [comments, setComments] = useState([]);


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    return (
        <div>
            <h3><strong>{id}</strong>: {title}</h3>
            <p>{body}</p>
            <h5>total comment {comments.length} </h5>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
            <Link to="/home"><button>Go Back</button></Link>
        </div>
    );
};

export default PostInfo;