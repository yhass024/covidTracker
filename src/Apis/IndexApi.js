import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchChartData = async () => {
  try {
    const chartData = await axios.get(`${url}/daily`);
    const mappedchartData = chartData.data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return mappedchartData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const fetchedCountries = await axios.get(`${url}/countries`);
    return fetchedCountries.data.countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
