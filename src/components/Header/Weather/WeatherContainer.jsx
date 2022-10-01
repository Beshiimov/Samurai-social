import React, { Component } from "react";
import { connect } from "react-redux";
import Weather from "./Weather";
import { loadWeather } from "../../../Redux/weather-reducer";

class WeatherContainer extends Component {
  componentDidMount() {
    this.props.loadWeather();
  }

  render() {
    return <Weather {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoad: state.weatherReducer.isLoad,
    address: state.weatherReducer.address,
    temp: state.weatherReducer.temp,
    description: state.weatherReducer.description,
  };
}

export default connect(mapStateToProps, { loadWeather })(WeatherContainer);
