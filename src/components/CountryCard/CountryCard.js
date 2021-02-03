import React from 'react';
import './CountryCard.css'

const CountryCard = (props) => {
    return (
        <div className={`card ${props.darkTheme && 'dark'}`}>
            <img className='countryFlag' src={props.flag} alt={`Flag of ${props.name}`}/>
            <div className='countryInfo'>
                <h3 className='countryTitle'>{props.name}</h3>
                <p><strong>Population: </strong>{props.population}</p>
                <p><strong>Region: </strong>{props.region}</p>
                <p><strong>Capital: </strong>{props.capital}</p>
            </div>
        </div>
    );
}

export default CountryCard;