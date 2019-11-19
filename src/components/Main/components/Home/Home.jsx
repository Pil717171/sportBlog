import React from 'react';
import './home.scss';


function Home(props) {
  console.log(props)
  return (
    <div className="home">
        home {props.sport}
    </div>
  );
}

export default Home;
