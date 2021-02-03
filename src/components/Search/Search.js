import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Search.css'

const Search = ({onSearchChange, darkTheme, search}) => {
    return (
        <div className={`search-box-group ${darkTheme && 'dark'}`}>
            <span className='searchIcon'><FontAwesomeIcon icon={faSearch} color={ darkTheme ? "white" : "black"}/></span>
            <input value={search} type='text' name='search' placeholder='Search for a country' aria-label='Search' onChange={(e) => onSearchChange(e)}/>
        </div>
    );
}

export default Search;