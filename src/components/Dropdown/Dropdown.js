import React, {useState} from 'react';
import './Dropdown.css'

const Dropdown = ({countries, setFilteredCountries, darkTheme, filter, setFilter, search}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
    
    const dropDownClick = () => setIsDropdownOpen(!isDropdownOpen);

    const regionClick = (e) => {
        const region = e.target.innerText;
        const rg = new RegExp(search,"i");
        setIsDropdownOpen(!isDropdownOpen);

        if (region === "All") {
            const filtered = countries.filter(country => country.name.match(rg));
            setFilteredCountries(filtered);
            setFilter("Filter By Region");
            return;
        } else {
            const filtered = countries.filter(country => country.region === region && country.name.match(rg));
            setFilteredCountries(filtered);
            setFilter(region);
        }
    }

    return (
        <div className={`dropdown ${darkTheme && "dark"}`}>
            <div className='dropdown__label' onClick={dropDownClick}>
                <span>{filter}</span>
                {isDropdownOpen
                    ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 328l144-144 144 144" /></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144" /></svg>
                }        
            </div>
            <div className='dropdown__options'>
            {regions.map(region => {
                return (
                    <div
                        key={region}
                        className={`dropdown__option ${isDropdownOpen && "is-open"}`}
                        onClick={regionClick}
                        value={region}>
                            
                        {region}
                    </div>
                )
            })}
            </div>
        </div>
    );
}

export default Dropdown;