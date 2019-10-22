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

const StyledH1 = styled.h1`
    display: flex;
    justify-content: center;
`;

const StyledInput1 = styled.input`
    border-radius: 3px;
    border-color: #555;
    margin-left: 5px;
`;

const StyledInput2 = styled.input`
    border-radius: 3px;
    border-color: #555;
    background-color: #555;
    color: #fff;
    margin-left: 5px;
`;

const StyledForm = styled.form`
    margin: 5px;
`;

class WeatherData extends Component {
    constructor() {
        super();
        this.state = {
            weeklyForecast: [],
            cityData: {},
            dayToDisplay: {},
            cityToSearch: 'Atlanta',
            errorMessage: '',
        };
        this.chooseDay = this.chooseDay.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.weatherApiCall();
    }

    weatherApiCall() {
        fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.cityToSearch}&mode=json&cnt=5&units=imperial&apikey=3aa158b2f14a9f493a8c725f8133d704`)
        .then(res => res.json())
        .then(response =>
            {console.log(response);
            if(response.cod !== "200") {
                this.setState({errorMessage: response.message})
            } else {
                this.setState({weeklyForecast: response.list, cityData: response.city})}
            }
        )
        .catch(error => 
            {console.log(error);
            this.setState({errorMessage: error.message})}
        );
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

    chooseDay(dayInfo) {
        this.setState({dayToDisplay: dayInfo});
    }

    handleChange(event) {
        this.setState({cityToSearch: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.weatherApiCall();
        this.setState({dayToDisplay: {}, errorMessage: ''});
    }

    render() {
        if (this.state.errorMessage !== '') {
            return (
                <>
                    <StyledForm onSubmit={this.handleSubmit}>
                        <label>
                            Pick a City: 
                            <StyledInput1 type="text" value={this.state.cityToSearch} onChange={this.handleChange} />
                        </label>
                        <StyledInput2 type="submit" value="Submit" />
                    </StyledForm>
                    <div>{this.state.errorMessage}</div>
                </>
            )
        } else {
            return (
                <>
                    <StyledForm onSubmit={this.handleSubmit}>
                        <label>
                            Pick a City: 
                            <StyledInput1 type="text" value={this.state.cityToSearch} onChange={this.handleChange} />
                        </label>
                        <StyledInput2 type="submit" value="Submit" />
                    </StyledForm>
                    <StyledH1><b>{`${this.state.cityData.name}, ${this.state.cityData.country}`}</b></StyledH1>
                    <Weather>
                        {this.state.weeklyForecast.map((dailyForecasts) => {
                            return (
                                <WeatherCard onClick={() => this.chooseDay(dailyForecasts)}
                                    date={this.setDate(dailyForecasts.dt)}
                                    temp={dailyForecasts.temp}
                                    weather={dailyForecasts.weather}
                                    weatherDescription={dailyForecasts.weather.description}
                                    selected={dailyForecasts === this.state.dayToDisplay}
                                />
                            );
                        })}
                        <ChosenDay>
                            <DailyInfo
                                sunrise={`${this.setTime(this.state.dayToDisplay.sunrise)} AM`}
                                sunset={`${this.setTime(this.state.dayToDisplay.sunset)} PM`}
                                wind={this.state.dayToDisplay.speed}
                                humidity={`${this.state.dayToDisplay.humidity}%`}
                                pressure={this.state.dayToDisplay.pressure}
                            />
                        </ChosenDay>
                    </Weather>
                </>
            )
        }
    }
}

export default WeatherData;
