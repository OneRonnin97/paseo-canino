import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './Components/Header'
import Home from './pages/Home'
import ScheduleWalk from './pages/ScheduleWalk'

function App() {
  return (
    <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/schedule" element={<ScheduleWalk />} />
                </Routes>
            </div>
    </Router>
  );
}

export default App;
