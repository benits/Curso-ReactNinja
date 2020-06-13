"use strict";
import React, { PropTypes } from "react";

import Search from "../Search";
import UserInfo from "../UserInfo";
import Actions from "../Actions";
import Repos from "../Repos";

const AppContent = ({
  userInfo,
  rep,
  star,
  handleSearch,
  getRepos,
  getStarred,
  isFetching,
}) => (
  <div>
    <Search isDisable={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
    {!!rep.length && (
      <Repos className="repos" title="Repositórios" repos={rep} />
    )}
    {!!star.length && (
      <Repos className="starred" title="Favoritos" repos={star} />
    )}
  </div>
);

AppContent.propTypes = {
  userInfo: PropTypes.object,
  rep: PropTypes.array.isRequired,
  star: PropTypes.array.isRequired,
};

export default AppContent;
