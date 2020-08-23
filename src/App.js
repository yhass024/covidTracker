import React from "react";
import MenuBar from "./Components/MenuBar";
import MenuBar2 from "./Components/MenuBar2";
import Cards from "./Components/Cards";
import CountrySelector from "./Components/CountrySelector";
import { fetchData } from "./Apis/IndexApi";
import Chart from "./Components/Chart";
import GraphLegend from "./Components/GraphLegend";

class App extends React.Component {
  state = { data: { data: {} } };
  async componentDidMount() {
    const fetchedData = await fetchData();
    setTimeout(() => {
      this.setState({ data: fetchedData });
    }, 2300);
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <MenuBar />
        <CountrySelector />
        <Cards data={data} />
        <GraphLegend />
        <Chart />
        <MenuBar2 />
      </div>
    );
  }
}

export default App;
