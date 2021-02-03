import React from 'react';
import Control from '../Control/Control';
import CountryList from '../CountryList/CountryList';
import './HomeView.css'

const HomeView = ({countries, onSearchChange, ddCountries, setFilteredCountries, darkTheme, filter, setFilter, search, setSearchChange}) => {

    return (
        <div className='home'>
            <Control 
                onSearchChange={onSearchChange}
                countries={ddCountries}
                setFilteredCountries={setFilteredCountries}
                darkTheme={darkTheme}
                filter={filter}
                setFilter={setFilter}
                search={search}
                setSearchChange={setSearchChange}
            />
            <CountryList countries={countries} darkTheme={darkTheme}/>
        </div>
    )
}

export default HomeView
