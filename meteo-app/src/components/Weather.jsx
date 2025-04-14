
function Weather({ data }) {
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    return (
        <div style={{ marginTop: '20px'}}>
            <h2>{data.name}</h2>
            <img src={iconUrl} alt={data.weather[0].description} />
            <p>{data.weather[0].description}</p>
            <p>🌡️ Température : {data.main.temp}°C</p>
            <p>💧 Humidité : {data.main.humidity}%</p>
            <p>🌬️ Vent : {data.wind.speed} km/h</p>
        </div>
    );
}

export default Weather;