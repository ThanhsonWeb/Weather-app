import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import HourlyForecast from "./components/HourlyForecast";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
function App() {
	const [data, setData] = useState(null);
	const [query, setQuery] = useState("Berlin");
	const [location, setLocation] = useState(null);

	// fetch weather data
	useEffect(() => {
		if (!location) return;
		const fetchData = async () => {
			try {
				const URL = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true&hourly=relative_humidity_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`;
				const res = await fetch(`${URL}`);
				const data = await res.json();
				console.log(data);
				setData(data);
				// return data;
			} catch (error) {
				console.error("Error Fetching Data", error);
			}
		};
		// call function
		fetchData();
	}, [location]);

	// fetch geolocation
	useEffect(() => {
		async function fetchGeolocation() {
			if (!query || query.length < 3) return;
			try {
				const res = await fetch(
					`https://geocoding-api.open-meteo.com/v1/search?name=${query}`,
				);
				const geoData = await res.json();
				console.log(geoData);
				if (geoData.results.length > 0) setLocation(geoData.results[0]);
				// return geoData;
			} catch (error) {
				console.error("Error when fetching Geolocation", error);
			}
		}

		fetchGeolocation();
	}, [query]);

	// change query -> fetchGeo -> location -> location change -> fetchWeather ?
	return (
		<>
			<Header />
			<SearchBar query={query} setQuery={setQuery} />
			<main className="md:flex gap-8 mt-10 ">
				<CurrentWeather data={data} location={location}  />
				<HourlyForecast />
			</main>
		</>
	);
}

export default App;
