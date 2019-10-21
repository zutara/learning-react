import React from 'react';
import styled from 'styled-components';
import WeekForecast from './WeekForecast'

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    width: 500px;
    text-align: center;
    background: #205488;
    margin: 50px;
    display: flex;
    justify-content: center;
    white-space: pre-wrap;

    &:hover {
        background: #648cb4;
    }
`;

const Img = styled.img`
    width: 70px;
`;

class WeatherCard extends React.Component {
    render() {
        var {date, temp, weather, ...selectedData} = this.props;
        return (
            <WeekForecast
                date={date}
                temp={temp}
                image={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                selectData={selectedData}
            />
        );
    }
}


export default WeatherCard;

/* <Card>
                    {this.props.date}
                    {this.props.sunrise}
                    {this.props.sunset}
                    {this.props.weather[0].main}
                    <Img src={`http://openweathermap.org/img/wn/${this.props.weather[0].icon}@2x.png`} />
                </Card> */