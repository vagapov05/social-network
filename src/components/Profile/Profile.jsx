import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = (props) => {
   return (
      <div>
         <div>
            <img src='https://capacity.iso.org/files/live/sites/cb-mini/files/projects/project_strategic.jpg/thumbnails/1200x300' />
         </div>

         <div>
            ava + description
         </div>

         <MyPosts />
      </div>
   )
}

export default Profile;
