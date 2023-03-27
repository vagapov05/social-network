import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
   return (
      <div>
         My posts

         <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
         </div>

         <div className={s.posts}>
            <Post message='Hi, how are you?' likeыCount='15' />
            <Post message='My first post' likeыCount='10' />
         </div>
      </div>
   )
}

export default MyPosts;
