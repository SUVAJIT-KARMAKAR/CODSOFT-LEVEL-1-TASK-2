// CONTENT 
import { IoSearch } from "react-icons/io5";

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
            </div>
        </div>
    );
};

export default Content;