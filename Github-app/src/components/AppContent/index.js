"use strict";
import React, { PropTypes } from "react";

import Search from "../Search";
import UserInfo from "../UserInfo";
import Actions from "../Actions";
import Repos from "../Repos";

const AppContent = ({ userInfo, rep, star, handleSearch, getRepos }) => {
  return (
    <div>
      <Search handleSearch={handleSearch} />
      {!!userInfo && <UserInfo userInfo={userInfo} />}
      {!!userInfo && <Actions getRepos={getRepos} />}

      {!!rep.length && (
        <Repos className="repos" title="Repositórios" repos={rep} />
      )}
      {!!star.length && (
        <Repos className="starred" title="Favoritos" repos={star} />
      )}
    </div>
  );
};

AppContent.propTypes = {
  userInfo: PropTypes.object,
  rep: PropTypes.array.isRequired,
  star: PropTypes.array.isRequired,
};

export default AppContent;
