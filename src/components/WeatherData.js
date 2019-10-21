import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherCard from './WeatherCard';
import DailyInfo from './DailyInfo'

const Weather = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const ChosenDay = styled.div`
    width: 100%;
`;

class WeatherData extends Component {
    constructor() {
        super();
        this.state = {
            weeklyForecast: [],
            cityData: {},
            dayToDisplay: ""
        };
        this.chooseDay = this.chooseDay.bind(this);
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=Atlanta&mode=json&cnt=5&units=imperial&apikey=3aa158b2f14a9f493a8c725f8133d704')
        .then(res => res.json())
        .then(response =>
            {console.log(response);
            this.setState({weeklyForecast: response.list, cityData: response.city})}
        )
        .catch(error => console.log(error));
        // .then(results => {
        //     const data = results.json();
        //     console.log(data);
        //     return data;
        // })
    }

    setDate(epoch) {
        var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
        d.setUTCSeconds(epoch);
        // return d.toDateString();
        var day = d.getDay();
        switch(day) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
        }
    }

    setTime(epoch) {
        var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
        d.setUTCSeconds(epoch);
        var cleanTime = d.toLocaleTimeString().split(':');
        cleanTime = cleanTime[0] + ':' + cleanTime[1];
        return cleanTime;
    }

    chooseDay() {
        console.log('we have props');
        this.setState({dayToDisplay: this.props.date});
    }

    render() {
        return (
            <>
                <h1><b>{this.state.cityData.name}</b></h1>
                <Weather>
                    {this.state.weeklyForecast.map((dailyForecasts) => {
                        return (
                            <WeatherCard onClick={this.chooseDay}
                                date={this.setDate(dailyForecasts.dt)}
                                temp={dailyForecasts.temp}
                                weather={dailyForecasts.weather}
                                weatherDescription={dailyForecasts.weather.description}
                            />
                        );
                    })}
                    <ChosenDay>
                        {this.state.weeklyForecast.map((dailyForecasts) => {
                            return (
                                <DailyInfo
                                    sunrise={`${this.setTime(dailyForecasts.sunrise)} AM`}
                                    sunset={`${this.setTime(dailyForecasts.sunset)} PM`}
                                    wind={dailyForecasts.speed}
                                    humidity={`${dailyForecasts.humidity}%`}
                                    pressure={dailyForecasts.pressure}
                                />
                            );
                        })}
                    </ChosenDay>
                </Weather>
            </>
        )
    }
}

export default WeatherData;

// function WeatherData() {
//     const weekData = useState([]);

// }
// "dt": 1571202000,
//             "sunrise": 1571226171,
//             "sunset": 1571266987,
//             "temp": {
//                 "day": 65.08,
//                 "min": 64.02,
//                 "max": 71.51,
//                 "night": 71.51,
//                 "eve": 65.48,
//                 "morn": 64.02
//             },

// "city": {
//     "id": 4180439,
//     "name": "Atlanta",
//     "coord": {
//         "lon": -84.3902,
//         "lat": 33.7491
//     },
//     "country": "US",
//     "population": 420003,
//     "timezone": -14400
// },