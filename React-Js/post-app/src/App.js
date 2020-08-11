import React, { useState } from 'react';
import ListPost from './containers/ListPost/ListPost';
import { Button, Modal, Fade, Backdrop, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { db } from './firebase';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '2rem',
    width: '600px',
    minHeight: '400px'
  },
}));

function App() {
  const [username, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const addPost = e => {
    e.preventDefault();
    db.collection('posts').add({
      username, title, content
    }).catch(err => alert(err.message));
    setTitle('');
    setContent('');
    setUserName('');
  }
  return (
    <div className="app">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <form onSubmit={addPost}>
              <div className="form-group">
                <label htmlFor="username">Your Name</label>
                <input type="text" id="username" placeholder="Enter your name" value={username}
                  onChange={e => setUserName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="title">Post title</label>
                <input type="text" id="title" placeholder="Enter the post title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Post content</label>
                <textarea type="text" id="content" placeholder="Enter some content"
                  value={content}
                  onChange={e => setContent(e.target.value)}
                ></textarea>
              </div>
              <p className="warning">
                Please fill out all fields to add post
              </p>
              <Button onClick={handleClose} type="submit" variant="contained" color="primary" disabled={!username || !title || !content} >
                Add Post
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
      <div className="app__header">
        <h1>The Post </h1>
        <Button variant="contained" color="primary" type="button" onClick={handleOpen} >
          Add Post
        </Button>
      </div>
      <ListPost />
    </div>
  );
}

export default App;
