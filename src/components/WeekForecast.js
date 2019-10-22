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
    display: flex;
    justify-content: center;
`;

const StyledMaxTemp = styled.span`
    margin-right: 10px;
`;

const dimgray = '#777';
const silver = '#ccc';

const StyledMinTemp = styled.span`
    margin-left: 10px;
    color: ${props => props.selected ? silver : dimgray};
`;

const white = '#fff';
const gray = '#888';
const black = '#000';
const Card = styled.div`
    width: 150px;   
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    color: ${props => props.selected ? white : black};
    background-color: ${props => props.selected ? gray : white};
`;

class WeekForecast extends React.Component {
    render() {
        return (
            <Forecast>
                <Card selected={this.props.selected} onClick={this.props.onClick}>
                    <StyledP>{this.props.date}</StyledP>
                    <StyledP>
                        <Img src={this.props.image}/>
                    </StyledP>
                    <StyledP>
                        <StyledMaxTemp>{`${Math.round(this.props.temp.max)}°`}</StyledMaxTemp>
                        <StyledMinTemp selected={this.props.selected}>{`${Math.round(this.props.temp.min)}°`}</StyledMinTemp>
                    </StyledP>
                </Card>
            </Forecast>
        );
    }
}

export default WeekForecast;
