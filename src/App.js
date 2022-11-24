import React, { Component } from 'react';
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      name:'test'
    }
  
  }

    render(){
      return(
        <BrowserRouter className="App">
          <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="signin" element={<Signin/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="chatroom" element={<Chatroom/>}/>
            <Route path="donate" element={<Donate/>}/>
          </Routes>
        </BrowserRouter>
      );
    }
}

export default App;
