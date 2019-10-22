import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    display: flex;
    justify-content: center;
    margin-top: 200px;
`;

class Home extends React.Component {
    render() {
        return (
            <StyledP>my name is laura</StyledP>
        )
    }
}

export default Home;
