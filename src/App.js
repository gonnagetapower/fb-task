import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LeagueContainer from './components/League/LeagueContainer';
import TeamsContainer from './components/Teams/TeamsContainer';
import TeamCalendar from './components/TeamCalendar/TeamCalendar';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className='app-wrapper-content'>
          <Routes>
            <Route exact path="/league" element={<LeagueContainer />} />
            <Route exact path="/teams/" element={<TeamsContainer />} />
            <Route exact path="/teams/:id" element={<TeamCalendar />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
