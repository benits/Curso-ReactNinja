"use strict";
import React from "react";

const Actions = ({ getRepos }) => {
  return (
    <div className="actions">
      <button onClick={getRepos}>Ver Repositórios</button>
      <button>Ver Favoritos</button>
    </div>
  );
};

export default Actions;
