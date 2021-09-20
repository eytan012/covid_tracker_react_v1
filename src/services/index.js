import axios from "axios";

const apiUrl = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let urlToModify = apiUrl;

  if(country){
    urlToModify = `${apiUrl}/countries/${country}`
  };
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(`${urlToModify}`);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log("fetchData error:", fetchData);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log("fetchDailyData error:", fetchDailyData);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${apiUrl}/countries`);
    const modifiedData = countries.map((country)=>country.name)
    return modifiedData;
  } catch (error) {
    console.log("countries error:", error);
  }
};
