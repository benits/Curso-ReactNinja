"use strict";
import React from "react";

const Search = ({ isDisable, handleSearch }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Digite o nome de usuário no GitHub"
        onKeyUp={handleSearch}
        disabled={isDisable}
      />
    </div>
  );
};

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
};

export default Search;
