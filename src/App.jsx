// APP 
import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import './App.scss';

// COMPONENTS IMPOR 
import Menu from './components/Menu';
import Header from './components/Header';

const App = () => {
  const[loading, setloading] = useState(false);

  useEffect( () => {
      setloading(true)
      setTimeout( () => {
          setloading(false)
      }, 5000);
  }, []);


  return (
    <div className="app">
      {
        loading ? 
        (
          <div className="app-loader">
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
            </>
          )

      }
    </div>
  );
};

// EXPORTING THE APP
export default App;