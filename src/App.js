import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main'
import { connect } from 'react-redux'


function App(props) {
  return (
    <div className="App">
      {props.user}
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
