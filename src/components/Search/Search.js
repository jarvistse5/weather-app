import "./Search.css";

const Search = ({handleSubmit, handleCityChange, city}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="inputBox"
                type="text"
                value={city}
                onChange={handleCityChange}
                placeholder="City"
                />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Search;