import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import WeatherData from './components/WeatherData'
import Home from './components/Home'
import Dogs from './components/Dogs'
import homeIcon from './home.svg'
import weatherIcon from './weatherIcon.svg';
import dogIcon from './dog.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <WeatherData />
//     </div>
//   );
// }

const StyledDiv = styled.div`
  height: 50px;
  width: 100%;
  background-color: #a8c;
`;

const StyledImg = styled.img`
  width: 40px;
  display: inline-flex;
  padding: 5px;
`;

function App() {
  return (
    <Router>
      <StyledDiv>
        <Link to="/">
          <StyledImg src={homeIcon} />
        </Link>
        <Link to="/weather">
          <StyledImg src={weatherIcon} />
        </Link>
        <Link to="/dogs">
          <StyledImg src={dogIcon} />
        </Link>
      </StyledDiv>
      <Switch>
        <Route path="/weather">
          <div>
            <WeatherData />
          </div>
        </Route>
        <Route path="/dogs">
          <div>
            <Dogs />
          </div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
