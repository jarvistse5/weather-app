import "./Search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({handleSubmit, handleCityChange, city}) => {
    return (
        <form className="inputForm" onSubmit={handleSubmit}>
            <input
                className="inputBox"
                type="text"
                value={city}
                onChange={handleCityChange}
                placeholder="City"
            />
            <button className="submitBtn" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    );
}

export default Search;