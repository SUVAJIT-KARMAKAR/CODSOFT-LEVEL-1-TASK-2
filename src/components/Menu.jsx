// MENU
import { LuGitFork } from "react-icons/lu";

const Menu = () => {
    return (
        <div className="menu">
            <div 
                className="menu-title"
            >
                <h2> &lt;#/&gt; easyFIND. 
                <span    
                    className="menu-title__prog"   
                >prog</span></h2>
            </div>

            <a href="#" target="_blank">
                <div className="menu-fork">
                    <LuGitFork  
                        size={20}    
                    />
                </div>
            </a>

        </div>
    );  
};

export default Menu;