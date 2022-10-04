import { useState } from "react";

const SearchCountry = () => {
    const [query, setquery] = useState('')
    const handleChange = (e) => {
      setquery(e.target.value)
    }
    

    return(
        <div>
            <hr/>
            <form>
                <label htmlFor="search-field">
                    <input 
                        type="text" 
                        value={query}
                        id="search-field" 
                        placeholder="Start typing"
                        onChange={handleChange}
                    />
                </label>
            </form>

        </div>
    )


}

export default SearchCountry;

//be able to map the user search input with Country arrays