import { fetchChartData } from "../Apis/IndexApi";
import { Line, Bar } from "react-chartjs-2";
import React from "react";

class Chart extends React.Component {
  state = { dailyData: [] };
  async componentDidMount() {
    const fetchedData = await fetchChartData();
    this.setState({ dailyData: fetchedData });
  }
  render() {
    const lineChart = this.state.dailyData ? (
      <Line
        data={{
          labels: this.state.dailyData.map(({ date }) => date),
          datasets: [
            {
              data: this.state.dailyData.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: "yellow",
              fill: true,
            },
            {
              data: this.state.dailyData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;
    return <div className="chart">{lineChart}</div>;
  }
}

export default Chart;
