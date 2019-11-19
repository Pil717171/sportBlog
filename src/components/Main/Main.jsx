import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Statistic from './components/Statistic/Statistic';
import Pay from './components/Pay/Pay'
import { connect } from 'react-redux'

function Main(props) {
  return (
    <div className="main">
        <Switch>
            <Route exact path='/'  render={()=><Home sport={props.sport}/>}/>
            <Route path='/statistic' component={Statistic}/>
            <Route path='/pay' component={Pay}/>
        </Switch>
    </div>
  );
}

function MapStateToProps (state) {
  return {
    sport: state.sport
  }
}

export default connect(MapStateToProps)(Main);
