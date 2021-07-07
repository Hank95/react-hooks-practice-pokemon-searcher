import React from "react";

function Search({ handleChange, searchContent }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          onChange={handleChange}
          value={searchContent}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
