import React from 'react';
import './App.css';
import Courses from './components/content/Courses/Courses';
import Statistic from './components/content/Statistic/Statistic';
import Finance from './components/content/Finance/Finance';
import Settings from './components/content/Settings/Settings';
import Teacher from './components/content/Teacher/Teacher';
import Forum from './components/content/Forum/Forum';
import Booking from './components/content/Booking/Booking';
import Tasks from './components/content/Tasks/Tasks';
import Project from './components/content/Project/Project';
import ToolbarComponent from './components/header/Header';
import LeftBar from './components/leftBar/LeftBar';
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Vebinar from './components/content/Vebinary/Vebinar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <div className='app-wrapper'>
         <ToolbarComponent />
          <LeftBar className='leftbar' />
          <div className='content'>
          <Route path="/Courses" render={() => <Courses />} />{" "}
          <Route path="/vebinar" render={() => <Vebinar />} />{" "}
          <Route path="/statistic" render={() => <Statistic />} />{" "}
          <Route path="/Finance" render={() => <Finance />} />{" "}
          <Route path="/Settings" render={() => <Settings />} />{" "}
          <Route path="/Teacher" render={() => <Teacher />} />{" "}
          <Route path="/forum" render={() => <Forum />} />{" "}
          <Route path="/booking" render={() => <Booking />} />{" "}
          <Route path="/tasks" render={() => <Tasks />} />{" "}
          <Route path="/project" render={() => <Project />} />{" "}
          </div>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
