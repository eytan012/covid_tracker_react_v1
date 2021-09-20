import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { fetchCountries } from "../../services";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchCountries();
      setCountriesData(data);
    };
    fetchApi();
  }, [setCountriesData]);
  return (
    <div className={styles.formContainer}>
      <Form.Select
        size={"lg"}
        defaultValue={""}
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value={""}>Global</option>
        {countriesData.map((country, index) => {
          return (
            <option value={country} key={index}>
              {country}
            </option>
          );
        })}
      </Form.Select>
    </div>
  );
};

export default CountryPicker;
