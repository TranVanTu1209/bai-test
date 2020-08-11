import React from 'react';
import './Post.css';
import { Card, Button } from '@material-ui/core';
import { db } from '../../firebase';

const Post = ({ id, username, title, content }) => {
  const deletePost = () => {
    db.collection('posts').doc(id).delete().then(() => {
      alert('Deleted Post Successfully!')
    }).catch(err => alert('Some thing went wrong'));
  }
  return (
    <Card className="post" >
      <h2>
        {title} <span className="post__user">
          - {username}
        </span>
      </h2>
      <p className="post__content">
        {content}
      </p>
      <Button color="secondary" variant="contained" onClick={deletePost} >
        X
      </Button>
    </Card>
  )
}

export default Post;
