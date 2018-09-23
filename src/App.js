import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
 
import Home from "./Component/Home";
import About from"./Component/About";
import Contact from"./Component/Contact";
import error from "./Component/error";
import Navigation from "./Component/Navigation";

class App extends Component {


    render() {
        return (
            
         <BrowserRouter>
         <div>
        <h2>Welcome to Router Tutorial</h2>
          <Navigation/> 
        <Switch>
          <Route path="/"  component ={Home} exact />
          <Route path="/about" component ={About}/>
          <Route path="/Contact" component={Contact}/> 
          <Route  component= {error}/>
        </Switch>
        </div>
       </BrowserRouter>
    
        );
    }
}
export default App;   