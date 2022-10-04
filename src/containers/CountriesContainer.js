import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);

    const fetchCountries = () => {
        // console.log("Getting some country data"); testing...
        fetch("https://restcountries.com/v3.1/all")
        .then((response)=> {
            return response.json();
        })

        .then((response)=> setCountries(response.message)); // the path to access data = arrayOfCountries[0].name.common === "Angola"

        // fetch data from the RESTCountries API (done)
        // set the countries state to the result of the API call (done)
        // pass it down to relevant components
    }

    useEffect(() => {
        fetchCountries();
    }, [])   // if you leave [] empty it will call at the beginning


    return (
        <>
            <hr/>
            <CountriesList onClick={fetchCountries}/>
            <VisitedCountriesList/>
        </>
    );
}

export default CountriesContainer;