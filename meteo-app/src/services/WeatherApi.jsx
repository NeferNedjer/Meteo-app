import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export const getWeatherByCity = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`;

    const response = await axios.get(url);
    return response.data;
}