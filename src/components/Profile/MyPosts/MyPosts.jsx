import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
   return (
      <div>
         My posts

         <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
         </div>

         <div className={s.posts}>
            <Post />
            <Post />
         </div>
      </div>
   )
}

export default MyPosts;
