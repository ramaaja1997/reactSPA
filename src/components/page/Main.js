import {Switch,Route} from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Portofolio from './Portofolio';
import Profile from './Profile';
import React, {Component} from 'react';

class Main extends Component {
    render (){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/portofolio" component={Portofolio}/>
                <Route path="/profile" component={Profile}/>
            </Switch>
        );
    }
}
export default Main;
