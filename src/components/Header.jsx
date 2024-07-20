// HEADER 
import { FaGripLines } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                <MdOutlineScreenSearchDesktop
                    size={80}
                />
                <h1 className="header-title__text">
                    YOUR PROGRAMMING JOURNEY MADE EASY
                </h1>
            </div>

            <div className="header-paragraph">
                <p className="header-paragraph__text">
                    YOUR ALL IN ONE SOLUTION FOR GETTING YOUR PROGRAMMING SKILLS REFRESHED
                    <br/>
                    SLIDE DOWN TO REVEAL OUR PROGRAMMING LANGUAGES CONCEPTS AND LET US  FIX YOUR BUG.
                </p>
            </div>

            <div className="header-counter">
                <h3 className="header-counter-language"> 5 LANGUAGES ADDED</h3>
            </div>

            <div className="header-button">
                <a href="#"> GET STARTED </a>
            </div>

            <div className="header-arrow">
                <FaArrowDown 
                    size={30}
                />
            </div>
        </div>
    );
};

export default Header;