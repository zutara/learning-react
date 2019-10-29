import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    display: flex;
    justify-content: center;
    border-radius: 5px;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`;

const StyledButton = styled.button`
    border-radius: 15px;
    background-color: #555;
    color: #fff
    border: none;
    height: 30px;
`;

class Dogs extends React.Component {
    constructor() {
        super();
        this.state = {
            dogImage: '',
            errorMessage: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.getGoodBoy();
    }

    getGoodBoy() {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json())
        .then(response =>
            {console.log(response);
            if(response.status !== "success") {
                this.setState({errorMessage: response.message})
            } else {
                this.setState({dogImage: response.message})}
            }
        )
        .catch(error => 
            {console.log(error);
            this.setState({errorMessage: error.message})}
        );
    }

    handleChange() {
        this.getGoodBoy()
    }

    render() {
        return (
            <>
                <StyledDiv>
                    <StyledButton onClick={this.handleChange}>summon good boye</StyledButton>
                </StyledDiv>
                <StyledDiv>
                    <StyledImg src={this.state.dogImage}/>
                </StyledDiv>
            </>
        )
    }
}

export default Dogs;
