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


            <div className="menu-fork">
                <a href="#" target="_blank" className="menu-fork-icon">
                    CONTRIBUTE
                </a>
                <LuGitFork  
                        size={20}    
                />
            </div>

        </div>
    );  
};

export default Menu;