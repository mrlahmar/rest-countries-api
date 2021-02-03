import React from 'react';
import Search from '../Search/Search';
import Dropdown from '../Dropdown/Dropdown';
import './Control.css'

const Control = ({onSearchChange, countries, setFilteredCountries, darkTheme, filter, setFilter, search}) => {
    return (
        <div className='control-bar'>
            <Search onSearchChange={onSearchChange} darkTheme={darkTheme} search={search}/>
            <Dropdown 
                countries={countries}
                setFilteredCountries={setFilteredCountries}
                darkTheme={darkTheme}
                filter={filter}
                setFilter={setFilter}
                search={search}
            />
        </div>
    );
}

export default Control;