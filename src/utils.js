// Utility functions for parsing

export const getBorderCountryName = (countries, border) => {
    const matchingCountry = countries.find(country => {
      return country.alpha3Code === border;
    })
    return matchingCountry.name;
}


// fetch countries
export const fetchCountries = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await res.json();
  
  return data;
}