import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    justify-content: center; 
    height: 25px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    background-color: #888;
`;

const StyledP = styled.p`
    margin: 4px;
`;

const Card = styled.div`
    width: 150px;   
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    :active {
        background-color: gray;
    }
`;

class DailyInfo extends React.Component {
    render() {
        // console.log('here', this.props.infos);
        // if(this.props.infos.length) {
        //     return (
        //         <p>hi</p>
        //     );
        // } else {
        //     return (
        //         <div/>
        //     );
        // }
        if(this.props.pressure === undefined) {
            return <div/>
        } else {
            return (
                <StyledInfo>
                    <StyledP>{`Sunrise: ${this.props.sunrise}`}</StyledP>
                    <StyledP>{`Sunset: ${this.props.sunset}`}</StyledP>
                    <StyledP>{`Windspeed: ${this.props.wind}`}</StyledP>
                    <StyledP>{`Humidity: ${this.props.humidity}`}</StyledP>
                    <StyledP>{`Pressure: ${this.props.pressure}`}</StyledP>
                </StyledInfo>
            )
        }
    }
}

export default DailyInfo;

{/* <DailyInfo
    sunrise={`${this.setTime(this.state.dayToDisplay.sunrise)} AM`}
    sunset={`${this.setTime(this.state.dayToDisplay.sunset)} PM`}
    wind={this.state.dayToDisplay.speed}
    humidity={`${this.state.dayToDisplay.humidity}%`}
    pressure={this.state.dayToDisplay.pressure}
/> */}