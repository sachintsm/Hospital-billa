import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios'
import './App.css'

import viewPatient from './Components/viewPatients.component';
import viewFilter from './Components/viewFilter.component';
import viewRoom from './Components/viewRoom.component';
import viewStaff from './Components/viewStaff.component';
import Patients from './Components/patients.component';
import Filters from './Components/filters.component';
import Rooms from './Components/rooms.component';
import Staff from './Components/staff.component';
import AddPatient from './Components/addPatient';
import AddFilter from './Components/addFilter';
import AddStaff from './Components/addStaff';
import AddRooms from './Components/addRooms';
import AddToRoom from './Components/addToRoom';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      time: '',
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/datetime')
      .then(res => {
        console.log(res.data);
        this.setState({
          time: res.data ,
        })

      })
      .catch(function (err) {
        console.log(err);
      })
  }

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbar-supportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Patients</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/filters'} className="nav-link">Filters</Link>
                </li>

                <li className="nav-item">
                  <Link to={'/rooms'} className="nav-link">Rooms</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/staff'} className="nav-link">Staff</Link>
                </li>
                <li className="nav-item dateTime" style={{marginLeft: 30,marginTop: 7}}>
                  <p>{this.state.time}</p>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <br></br>
        <div className="container">
          <h1 style={{marginTop:50, textAlign: "center", paddingBottom: 50 }}>Control Interface of a Hospital</h1>
          <Switch>

            <Route exact path='/viewPatient/:id' component={viewPatient}></Route>
            <Route exact path='/viewFilter/:id' component={viewFilter}></Route>
            <Route exact path='/view/:id' component={viewRoom}></Route>
            <Route exact path='/viewStaff/:id' component={viewStaff}></Route>
            <Route exact path='/addToRoom/:id' component={AddToRoom}></Route>

            <Route exact path='/' component={Patients}></Route>
            <Route exact path='/filters' component={Filters}></Route>
            <Route exact path='/rooms' component={Rooms}></Route>
            <Route exact path='/staff' component={Staff}></Route>

            <Route exact path='/addPatient' component={AddPatient}></Route>
            <Route exact path='/addFilter' component={AddFilter}></Route>
            <Route exact path='/addStaff' component={AddStaff}></Route>
            <Route exact path='/addRooms' component={AddRooms}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;