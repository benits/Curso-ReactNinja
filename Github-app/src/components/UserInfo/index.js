"use strict";
import React, { PropTypes } from "react";

const UserInfo = ({ userInfo }) => {
  return (
    <div className="user-info">
      <div className="avatar-user">
        <img src={userInfo.photo} alt="user avatar" />
      </div>
      <h2>
        <a
          target="_blank"
          className="user-name"
          href={`https://github.com/${userInfo.login}`}>
          {userInfo.username}
        </a>
      </h2>

      <p>{userInfo.bio}</p>

      <ul className="repos-info">
        <li>Repositórios: {userInfo.repos}</li>
        <li>Seguidores: {userInfo.followers}</li>
        <li>Seguindo: {userInfo.following}</li>
      </ul>
    </div>
  );
};

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    bio: PropTypes.string,
    photo: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }),
};

export default UserInfo;
