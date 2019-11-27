import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main'
import { connect } from 'react-redux'


function App(props) {
  return (
    <div className="App">
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
