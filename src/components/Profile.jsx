import React from 'react';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <h2 class="name">{username}</h2>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li class="border">
          <p class="label">Followers</p>
          <p class="quantity">{stats.followers}</p>
        </li>
        <li class="border">
          <p class="label">Views</p>
          <p class="quantity">{stats.views}</p>
        </li>
        <li class="border">
          <p class="label">Likes</p>
          <p class="quantity">{stats.likes}</p>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
