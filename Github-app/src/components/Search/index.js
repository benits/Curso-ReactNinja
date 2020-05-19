"use strict";
import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Digite o nome de usuário no GitHub"
        onKeyUp={handleSearch}
      />
    </div>
  );
};

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
};

export default Search;
