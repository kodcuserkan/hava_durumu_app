import React, { Component } from 'react'
import './App.css';
import Weather from './Components/weather_components'
import "bootstrap/dist/css/bootstrap.min.css"
import "weather-icons/css/weather-icons.css"
import Form from "./Components/form_components"
import Notfounddiv from "./Components/notFound"

const API_KEY = "4bf50a44b5e7f362f0d86291c240bec229";


class App extends Component {

  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_min: undefined,
      temp_max: undefined,
      description: "",
      notfound : false,
      error: false
    }
    // this.getWeather();

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Athmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  get_weatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm })
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.Rain })
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weatherIcon.Snow })
        break;
      case rangeId >= 700 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.Athmosphere })
        break;
      case rangeId === 800:
        this.setState({ icon: this.weatherIcon.Clear })
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.Clouds })
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds })
        break;
    }
  }

  notFound = () => {
    this.setState({
      notfound : true
    })

    console.log(this.state);
    setInterval(() => {
      this.setState({
        notfound : false
      })
    }, 1833);
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {

      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const response = await api_call.json();
      console.log(response);
        // console.log(response.cod);

      if (response.cod == 404 ) {
        this.notFound();
        // return;
      }
      else {
        this.setState({
          city: `${response.name}, ${response.sys.country}`,
          celsius: response.main.temp,
          temp_min: response.main.temp_min,
          temp_max: response.main.temp_max,
          description: response.weather[0].description,
          error :false
        })
        this.get_weatherIcon(this.weatherIcon, response.weather[0].id);
      }
    } else {
      this.setState({error:true})
    }
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>HAVA DURUMU UYGULAMASI</h1>
        <Notfounddiv notFoundErr={this.state.notfound}/>
        <Form loadWeather={this.getWeather} error={this.state.error}/>
        <Weather city={this.state.city}
          country={this.state.country}
          celsius={this.state.celsius}
          min_temp={this.state.temp_min}
          max_temp={this.state.temp_max}
          weatherIcon={this.state.icon}
          description={this.state.description}
        />
      </div>
    )
  }
}

export default App;

