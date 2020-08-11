import React, { useEffect, useState } from 'react';
import Post from '../../components/Post/Post';
import './ListPost.css';
import * as actionTypes from '../../store/actionTypes';
import { db } from '../../firebase';

const ListPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      const firebasePosts = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      setPosts(firebasePosts);
    });
  }, []);
  return (
    <div className="listPost">
      {
        posts?.map(({ id, title, content, username }) => {
          return <Post key={id} id={id} title={title} content={content} username={username} />
        })
      }
    </div>
  )
}
export default ListPost;
