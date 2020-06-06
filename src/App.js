import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import Learning from './Components/Learning/Learning';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Projects from './Components/Projects/Projects';
import ReactGa from 'react-ga';

function App() {
  useEffect(()=>{
    ReactGa.initialize('UA-168270329-1')
    ReactGa.pageview(window.location.pathname + window.location.search)
  },[])


  return (
    <div className='app'>
        
         
            <Router>
            <Header></Header>
              <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/about">
              <AboutMe></AboutMe>
          </Route>
          <Route path="/projects">
              <Projects></Projects>
          </Route>
          <Route path="/blog">
              <Blog></Blog>
          </Route>
          <Route path="/contact">
              <Contact></Contact>
          </Route>
          
          <Route exact path="/">
                <Home></Home>
          </Route>
          <Route path="*">
                   <NotFound></NotFound>
            </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
