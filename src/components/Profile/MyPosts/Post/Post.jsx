import React from 'react';
import s from './Post.module.css';

const Post = () => {
   return (
      <div className={s.item}>
         <img src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'/>

         post 1

         <div>
            <span>like</span>
         </div>
      </div>
   )
}

export default Post;
