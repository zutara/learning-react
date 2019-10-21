import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 60px;
`;

const Forecast = styled.div`
    display: inline-flex;
    flex-direction: row;
    padding: 5px;
`;

const StyledP = styled.p`
    margin: 4px;
`;

const StyledMaxTemp = styled.span`
    margin-right: 10px;
`;

const StyledMinTemp = styled.span`
    margin-left: 10px;
    color: darkgray;
`;

const white = '#fff';
const gray = '#888';
const Card = styled.div`
    width: 150px;   
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    background-color: ${props => props.selected ? gray : white};
`;

class WeekForecast extends React.Component {
    render() {
        
        console.log(this.props);
        return (
            <Forecast>
                <Card selected={this.props.selected} onClick={this.props.onClick}>
                    <StyledP>{this.props.date}</StyledP>
                    <Img src={this.props.image}/>
                    <StyledP>
                        <StyledMaxTemp>{`${Math.round(this.props.temp.max)}°`}</StyledMaxTemp>
                        <StyledMinTemp>{`${Math.round(this.props.temp.min)}°`}</StyledMinTemp>
                    </StyledP>
                </Card>
            </Forecast>
        );
    }
}

export default WeekForecast;
