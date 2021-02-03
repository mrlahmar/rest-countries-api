import React , {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import HomeView from './components/HomeView/HomeView';
import CountryView from './components/CountryView/CountryView';
import { fetchCountries } from './utils';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [darkTheme, setDarkTheme] = useState(false);
    const [filter, setFilter] = useState("Filter By Region");
    const [search, setSearchChange] = useState("");

    useEffect(() => {
        const getCountries = async () => {
            const countriesFromServer = await fetchCountries();
            setCountries(countriesFromServer);
            setFilteredCountries(countriesFromServer);
        }

        getCountries();
    }, []);

    const onSearchChange = (e) => {
      const rg = new RegExp(e.target.value,"i");
      setSearchChange(e.target.value);
      if (filter === "Filter By Region") {
        setFilteredCountries(countries.filter(country => country.name.match(rg)));
      } else {
        setFilteredCountries(countries.filter(country => country.name.match(rg) && country.region === filter));
      }
    }

    return (
      <Router>
        <div className={`App ${darkTheme && 'dark'}`}>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
          <Route path="/" exact render={(props) => (
            <HomeView 
              countries={filteredCountries}
              darkTheme={darkTheme}
              onSearchChange={onSearchChange}
              setFilteredCountries={setFilteredCountries}
              ddCountries={countries}
              filter={filter}
              setFilter={setFilter}
              search={search}
              setSearchChange={setSearchChange}
            />
          )} />
          <Route path="/:name" exact render={(props) => (
            <CountryView countries={countries} darkTheme={darkTheme}/>
          )} />
        </div>
      </Router>
    )
}

export default App;

/* 
  * Loading
*/