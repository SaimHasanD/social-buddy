import React from 'react';

const Comment = (props) => {

    const {email, name, body} = props.comment;

    return (
        <div>
            <h4>Email: {email}</h4>
            <h4>Name: {name}</h4>
            <p>comment: {body}</p>
        </div>
    );
};

export default Comment;