// CONTENT 
import { IoSearch } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { RiJavaLine } from "react-icons/ri";
import { PiFileCppFill } from "react-icons/pi";
import { FaRust } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";

import { FaArrowDown } from "react-icons/fa";

const Content = () => {
    return (
        <div className="content">
            <div className="content-title">
                <h2 className="content-title__text">  COLLECTION  </h2>
            </div>

            <div className="content-search">
                <div className="content-search-input">
                    <input 
                        type="text" 
                        placeholder="TYPE TO SEARCH"
                        className="content-search-input__field"
                    />
                    <IoSearch 
                        size={30}
                        className="content-search-input__icon"
                    />
                </div>

                <div className="content-main">
                    {/* FIRST ROW */}
                    <div className="content-main-card">
                        <FaPython size={30} className="content-main-card__icon icon"/>   
                        <p className="content-main-card__paragraph paragraph"> PYTHON </p> 
                    </div>

                    <div className="content-main-card">
                        <RiJavaLine size={30} className="content-main-card__icon icon"/>   
                        <p className="content-main-card__paragraph paragraph"> JAVA </p> 
                    </div>

                    <div className="content-main-card">
                        <PiFileCppFill size={30} className="content-main-card__icon icon"/>   
                        <p className="content-main-card__paragraph paragraph"> C++ </p> 
                    </div>

                    <div className="content-main-card">
                        <FaRust size={30} className="content-main-card__icon icon"/>   
                        <p className="content-main-card__paragraph paragraph"> RUST </p> 
                    </div>

                    {/* SECOND ROW */}
                    <div className="content-main-card">
                        <RiJavascriptFill size={30} className="content-main-card__icon icon"/>   
                        <p className="content-main-card__paragraph paragraph"> JAVASCRIPT </p> 
                    </div>

                    <div className="content-main-card">
                        <SiPostgresql size={30} className="content-main-card__icon icon"/>   
                        <p className="content-main-card__paragraph paragraph"> SQL </p> 
                    </div>
                </div>
                
                <div className="content-arrow">
                    <FaArrowDown 
                        size={30}
                        className="content-arrow__icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default Content;