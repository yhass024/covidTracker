import React from "react";
import { Dropdown } from "react-bootstrap";
import { fetchCountries } from "../Apis/IndexApi";
import ComponentCSS from "./ComponentCSS.css";
import { NativeSelect, FormControl } from "@material-ui/core";

class CountrySelector extends React.Component {
  state = { countries: [] };
  async componentDidMount() {
    const fetchedCountries = await fetchCountries();
    this.setState({ countries: fetchedCountries });
  }
  render() {
    return (
      <FormControl>
        <NativeSelect
          className="countrySelect"
          defaultValue=""
          onChange={(e) => this.props.handleCountryChange(e.target.value)}
        >
          <option value="">World</option>
          {this.state.countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    );
  }
}

export default CountrySelector;
