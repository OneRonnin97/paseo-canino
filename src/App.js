import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from './pages/Home'
import ScheduleWalk from './pages/ScheduleWalk'
import Header from './Components/Header/navbar'

function App() {
  return (
    <Router>
      <Header/>
            <div className="App">
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/schedule" element={<ScheduleWalk />} />
                </Routes>
            </div>
    </Router>
  );
}

export default App;
