import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Maincontent from './Components/Maincontent/Maincontent';
import Sidevar from './Components/Sidenav/Sidenav';
import Sidevar1 from './Components/Sidevar1/Sidevar1'
const App=() =>{
  return (
    <div className="contenedor">
      <div className="row">
        <div className="col-xl text-center">
           <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-3 text-center">
          <Sidevar />

        </div>
        <div className="col-6 text-center" >
          <Maincontent />

        </div>
        <div className="col col-3 text-center"  >
          <Sidevar1 />

        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <Footer/>

        </div>
      </div>
    </div>
  );
}

export default App;
