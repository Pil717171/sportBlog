import React from 'react';
import './main.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Statistic from './components/Statistic/Statistic';
import Pay from './components/Pay/Pay'
import background from '../../assets/images/background.jpg';

function Main(props) {
  return (
    <div className="main">

        <Switch>
            <Route exact path='/'  render={()=><Home sport={props.sport}/>}/>
            <Route path='/statistics' component={Statistic}/>
            <Route path='/pay' component={Pay}/>
        </Switch>
    </div>
  );
}



export default Main;
