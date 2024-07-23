// APP 
import React, { useState, useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";

import './App.scss';

// COMPONENTS IMPOR 
import Menu from './components/Menu';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  const[loading, setloading] = useState(false);

  useEffect( () => {
      setloading(true)
      setTimeout( () => {
          setloading(false)
      }, 4000);
  }, []);


  return (
    <div 
      className="app"
    >
      {
        loading ? 
        (
          <div 
            className="app-loader"
            style={{
              minHeight: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center" 
            }}
          >
            <HashLoader
              className="app-loader__icon"
              size={50}
              color={"#15CDA8"}
              loading={loading}
            />   
          </div>

        )
          : (
            <>
              <Menu/>
              <Header/>    
              <Content/>     
              <Footer/>    
            </>
          )

      }
    </div>
  );
};

// EXPORTING THE APP
export default App;