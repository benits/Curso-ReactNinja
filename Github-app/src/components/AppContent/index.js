"use strict";
import React, { PropTypes } from "react";

import Search from "../Search";
import UserInfo from "../UserInfo";
import Actions from "../Actions";
import Repos from "../Repos";

const AppContent = ({ userInfo, rep, star }) => {
  return (
    <div>
      <Search />
      {!!userInfo && <UserInfo userInfo={userInfo} />}
      {!!userInfo && <Actions />}

      {rep.length > 0 && (
        <Repos className="repos" title="Repositórios" repos={rep} />
      )}
      {star.length && (
        <Repos className="starred" title="Favoritos" repos={star} />
      )}
    </div>
  );
};

AppContent.propTypes = {
  userInfo: PropTypes.object.isRequired,
  rep: PropTypes.array.isRequired,
  star: PropTypes.array.isRequired,
};

export default AppContent;
