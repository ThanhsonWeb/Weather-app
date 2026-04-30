import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import HourlyForecast from "./components/HourlyForecast";
import SearchBar from "./components/SearchBar";
function App() {
	return (
		<>
			<Header />
			<SearchBar />
			<main className="flex gap-8 mt-10">
				<CurrentWeather />
				<HourlyForecast />
			</main>
		</>
	);
}

export default App;
