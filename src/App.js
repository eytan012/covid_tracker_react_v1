import React, { useState, useEffect } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import { fetchData } from "./services";
import logo from './images/covid-logo3.png'

const App = () => {
  const [data, setData] = useState([]);
  const [country,setCountry] = useState('');
  useEffect(() => {
    const fetchApi = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    fetchApi();
  }, []);

  const handleCountryChange = async (country)=>{
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  }

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt={"LOGO"}/>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
