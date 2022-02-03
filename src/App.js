import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar.js'
import Home from './Components/Pages/Home.js'
import ShowLeague from './Components/Pages/ShowLeague.js'
import Players from './Components/Pages/Players.js'
import WorldCup from './Components/Pages/WorldCup.js'
import ChampionsLeague from './Components/Pages/ChampionsLeague.js'

function App(props) {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home />}/> 
          <Route path = "/leagueinfo" element = {<ShowLeague />}/> 
          <Route path = "/players" element = {<Players />}/> 
          <Route path = "/worldcup" element = {<WorldCup />}/> 
          <Route path = "/ChampionsLeague" element = {<ChampionsLeague />}/>
        </Routes> 
    </Router>
  );
}
export default App;

