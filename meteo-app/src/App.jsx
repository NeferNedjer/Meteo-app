import { useState } from 'react'
import Weather from './components/weather';
import { getWeatherByCity } from './services/weatherApi';
import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
    } catch (error) {
      console.error('Erreur lors de la récupération de la météo :', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      <h1>🌤️ Météo App</h1>
      <input
      type="text"
      value={city}
      onChange={e => setCity(e.target.value)}
      placeholder="Entrez une ville"/>
      <button onClick={handleSearch}>Rechercher</button>
      {weatherData && <Weather data={weatherData}/>}
    </div>
  );
}

export default App
