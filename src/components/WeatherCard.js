import React from 'react';
import WeekForecast from './WeekForecast'

class WeatherCard extends React.Component {
    render() {
        return (
            <WeekForecast
                date={this.props.date}
                temp={this.props.temp}
                image={`http://openweathermap.org/img/wn/${this.props.weather[0].icon}@2x.png`}
                onClick={this.props.onClick}
                selected={this.props.selected}
            />
        );
    }
}


export default WeatherCard;