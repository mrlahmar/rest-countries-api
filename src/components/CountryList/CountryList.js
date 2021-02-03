import React from 'react';
import CountryCard from '../CountryCard/CountryCard';
import { Link } from "react-router-dom";
import './CountryList.css'

const CountryList = ({countries, darkTheme}) => {
    return (
        <div className='country-list'>
           {
            countries.map(country => {
                return (
                    <Link
                        to={`/${country.name}`}
                        key={country.numericCode}
                    >
                        <CountryCard
                            key={country.numericCode}
                            name={country.name}
                            population={country.population.toLocaleString()}
                            region={country.region}
                            capital={country.capital}
                            flag={country.flag}
                            darkTheme={darkTheme}
                        />
                    </Link>
                )
            })
           }
        </div>
    );
}

export default CountryList;