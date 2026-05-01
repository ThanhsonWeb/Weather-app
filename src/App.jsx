import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import HourlyForecast from "./components/HourlyForecast";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
function App() {
	const [data, setData] = useState(null);

	const URL =
		"https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=relative_humidity_2m,precipitation&timezone=auto";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`${URL}`);
				const data = await res.json();
				console.log(data);
				setData(data);
				return data;
			} catch (error) {
				console.error("Error Fetching Data", error);
			}
		};
		// call function
		fetchData();
	}, []);

	return (
		<>
			<Header />
			<SearchBar />
			<main className="flex gap-8 mt-10">
				<CurrentWeather data={data} />
				<HourlyForecast />
			</main>
		</>
	);
}

export default App;
