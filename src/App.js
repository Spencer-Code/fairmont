import React, { Component, createContext } from 'react';
import './App.css';
import 'tachyons';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import Chatroom from './components/Chatroom/Chatroom';
import Donate from './components/Donate/Donate';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom"
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {
        id: '',
        fName: '',
        lName: '',
        email: '',
        permission: '',
        joined: ''
      }
    }
  }
  
  loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        fName: data.first_name,
        lName: data.last_name,
        email: data.email,
        permission: data.permission,
        joined: data.joined
    }})
  }

  getAppUser = () => {
    return this.state.user
  }

    render(){
      return(
        <div className="App">
          <Navigation/>
          <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="signin" element={<Signin loadUser={this.loadUser} getAppUser={this.getAppUser}/>}/>
            <Route path="register" element={<Register loadUser={this.loadUser} returnAppUser={this.getAppUser}/>}/>
            <Route path="about" element={<About getAppUser={this.getAppUser}/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="chatroom" element={<Chatroom getAppUser={this.getAppUser}/>}/>
            <Route path="donate" element={<Donate/>}/>
          </Routes>
        </div>
      );
    }
}

export default App;
