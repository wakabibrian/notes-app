import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handSearchNote, searchText }) => {
    return (
        <div className="search">
            <MdSearch className="search-icons" size="1.3em" />
            <input
                type="text"
                placeholder="Type to search"
                onChange={(e) => handSearchNote(e.target.value)}
            />
        </div>
    );
};

export default Search;
