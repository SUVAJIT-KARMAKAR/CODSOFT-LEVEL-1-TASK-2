// FOOTER 
import Logo from "../images/easyFINDlogo.png";

import { FaGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { LuLinkedin } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { IoSend } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-title">
                <div className="footer-title-text">
                    CONTRIBUTE TO THIS WORK
                </div>

                <div className="footer-subscription">
                    <div className="footer-subscription-input">
                        <input 
                            type="text" 
                            placeholder="SUBSCRIBE"
                            className="footer-subscription-input__field"
                        />
                        <IoSend
                            size={30}
                            className="footer-subscription-input__icon"
                        />
                    </div>
                </div>

                <div className="footer-social">
                    <FaGithub
                        size={40}
                        className="footer-social__application"
                    />
                    <AiFillInstagram
                        size={40}
                        className="footer-social__application"
                    />
                    <LuLinkedin
                        size={40}
                        className="footer-social__application"
                    />
                    <MdEmail
                        size={40}
                        className="footer-social__application"
                    />
                </div>

                <div className="footer-horizontal">
                </div>

                <div className="footer-logo">
                    <img 
                        src={Logo}
                        alt="easyFIND logo"
                        className="footer-logo__image"
                    />
                </div>

                <div className="footer-copyright">
                    <h3
                        className="footer-copyright__text"
                    >
                        @COPYRIGHT 2024 | <span className="footer-copyright__text-span"> &lt;#/&gt;easyFIND.prog </span> | SUVAJIT KARMAKAR
                    </h3>
                </div>
            </div>
        </div>  
    );
};

export default Footer;