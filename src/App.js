import React from "react";
import MenuBar from "./Components/MenuBar";
import MenuBar2 from "./Components/MenuBar2";
import Cards from "./Components/Cards";
import CountrySelector from "./Components/CountrySelector";
import { fetchData } from "./Apis/IndexApi";
import Chart from "./Components/Chart";
import GraphLegend from "./Components/GraphLegend";

class App extends React.Component {
  state = { data: { data: {}, country: "" } };
  async componentDidMount() {
    const fetchedData = await fetchData();
    setTimeout(() => {
      this.setState({ data: fetchedData });
    }, 2300);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    console.log(this.state);
  };

  render() {
    const { data, country } = this.state;
    return (
      <div>
        <MenuBar />
        <CountrySelector handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <GraphLegend />
        <Chart data={data} country={country} />
        <MenuBar2 />
      </div>
    );
  }
}

export default App;
