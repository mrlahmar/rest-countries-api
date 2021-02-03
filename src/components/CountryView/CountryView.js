import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from "react-router-dom";
import { getBorderCountryName } from '../../utils';
import './CountryView.css'

const CountryView = ({countries, darkTheme}) => {
    const [countryArr, setCountry] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        setCountry(countries.filter(elem => elem.name === name));
    }, [countries,name]);

    return (
        <>
            {
                countryArr.map(country => {
                    return (
                        <div className={`countryView ${darkTheme && "dark"}`} key={country.name}>
                            <Link className='countryView_back_btn' to='/'>
                                <FontAwesomeIcon className='iconBack' icon={faArrowLeft}/>
                                <span>Back</span>
                            </Link>
                            <div className='countryView_content'>
                                <img className='countryView_flag' src={`${country.flag} `} alt={`Flag of ${country.name}`}/>
                                <div className='countryView_info'>
                                    
                                        <h2 className='countryView_title'>{country.name}</h2>
                                       
                                            <ul className='countryView_list'>
                                                <li><strong>Native Name: </strong>{country.name}</li>
                                                <li><strong>Population: </strong>{country.population.toLocaleString()}</li>
                                                <li><strong>Regions: </strong>{country.region}</li>
                                                <li><strong>Sub Region: </strong>{country.subregion}</li>
                                                <li><strong>Capital: </strong>{country.capital}</li>
                                            </ul>
                                            <ul className='countryView_list'>
                                                <li><strong>Top Level Domain: </strong>{country.topLevelDomain}</li>
                                                <li>
                                                    <strong>Currencies: </strong>
                                                    {country.currencies.map((currency,i,arr) => arr.length - 1 === i ? currency.name : `${currency.name}, `)}
                                                </li>
                                                <li>
                                                    <strong>Languages: </strong>
                                                    {country.languages.map((lang,i,arr) => arr.length - 1 === i ? lang.name : `${lang.name}, `)}
                                                </li>
                                            </ul>
                                    <div className='countryView_borders'>
                                        <h3 className='border_title'>Border Countries: </h3>
                                        <ul className='border_countries'>
                                            {country.borders.map( (border) => {
                                                const borderName = getBorderCountryName(countries, border);
                                                return(<li key={border}><Link to={`/${borderName}`}>{borderName}</Link></li>)
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                    )
                })
            }
        </>
    );
}

export default CountryView;