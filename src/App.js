import './App.css';
import CountriesContainer from './containers/CountriesContainer';
import SearchCountry from './components/SearchCountries';


function App() {
  return (
    <>
      <h1> 🛫TravelBucketList🪣</h1>
      <SearchCountry/>
      <CountriesContainer />

    </>

    
  );
}

export default App;
