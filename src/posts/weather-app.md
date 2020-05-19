---
path: "/blog/weather-app"
date: "2019-03-14"
title: "Weather App"
---

*Updated: 05/19/20*

I recently started learning React after many different attempts. I had tried before, but never really put it to use. I wanted to change that. I wanted to make a web app that gets real data from an API. I really like weather, so this was an easy decision.

It’s not really useful considering how many other weather applications are way better, but it was fun making it! I use the [Zip Code API](https://www.zipcodeapi.com) to get the coordinates from a zip code and [Dark Sky](https://darksky.net) to get the weather data. Made with React (of course!) and hosted on Netlify.

*Update: Dark Sky was [recently bought by Apple](https://blog.darksky.net) and the API is going away in 2020. Sadness.*

[Check it out](https://weather.mthyu.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/1d5a6144-f5f6-4ce8-b7cd-ad606f754762/deploy-status)](https://app.netlify.com/sites/reactjs-weather/deploys)

## Getting The Weather 
The Dark Sky API needs the coordinates to get weather data. The first call takes input for a zip code and converts to lat/long and sets the state for long, lat, city, and state. The latitude and longitude is then used to make the call for weather data. 
```
getWeather = () => {
      axios.get(`https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/Vx2iDKzTlE0ApfqiPcQDVmdgU88QqB0eNkE1jyjlWOoS0MPWa7gUEsopeSY5WiwD/info.json/${this.state.zipcode}/degrees`)
      .then(res => {
        let presentState = {...this.state};
          presentState.location.long = res.data.lng;
          presentState.location.lat = res.data.lat;
          presentState.location.city = res.data.city;
          presentState.location.state = res.data.state;
          this.setState({ ...presentState });
        }).catch(err => {
          console.log(err);
        })
    .then(() => {
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/895d852c061ef91db419f40459c25d83/${this.state.location.lat},${this.state.location.long}`)
      .then(res => {
        let presentState = {...this.state};
          presentState.currentTemp = res.data.currently.temperature;
          presentState.currentSummary = res.data.currently.summary;
          presentState.currentIcon = res.data.currently.icon;
          presentState.currentTime = res.data.currently.time;
          presentState.hourlySummary = res.data.hourly.summary;
          this.setState({ ...presentState });
          this.setState({ loaded: true});
        }).catch(err => {
          console.log(err);
        })
    })
  }
```

The `getWeather()` function is called on submit. Also setting the state to submitted, but not loaded until after all data has been fetched. 
```
handleSubmit(event) {
    this.getWeather();
    this.setState({submitted: true});
    this.setState({loaded: false});
    event.preventDefault();
}
``` 

The data is then displayed updating the props for components I made for each section of the card. 
```
<div className="uk-flex uk-flex-center">
	<div className="uk-card uk-card-secondary uk-card-small uk-card-body uk-width-1-2">
		<City city={this.state.location.city} state={this.state.location.state} />
		<Summary summary={this.state.currentSummary} icon={this.state.currentIcon} />
		<Temperature temp={Math.round(this.state.currentTemp)} />
		<p>{this.state.hourlySummary}</p>
	</div>
</div>
```

**City**
```
class City extends Component {
  render() {
    return (
      <div className="uk-card-title">
      		<h2>{this.props.city}, {this.props.state}</h2>
      </div>
    )
  }
}
```

**Summary**
```
class Summary extends Component {
  render() {
    return (
      <div>
      		<WeatherIcon icon={this.props.icon} />
      		<p className="uk-text-lead" >{this.props.summary}</p>
      </div>
    )
  }
}
```
*WeatherIcon is another component with a switch to display icons depending on what weather it is*

**Temperature**
```
class Temperature extends Component {
  render() {
    return (
      <div>
        <p className="uk-text-lead">{this.props.temp}&deg;F</p>
      </div>
    )
  }
}
```

[Check out the code](https://github.com/mattchupp/weather)

## Future Improvements
- [ ] Get current location instead of typing zip code in
- [ ] Allow input for cities and zip codes
- [ ] Update design
- [ ] Display more data
- [ ] Find new API for weather data
