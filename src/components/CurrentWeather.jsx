import bgLarge from "../assets/images/bg-today-large.svg";
import sunnyIcon from "../assets/images/icon-sunny.webp";
import DailyForeCast from "./DailyForeCast";
function CurrentWeather({ data }) {
	// 1. Return null or a loader if data hasn't arrived yet
	if (!data) return <div>Loading...</div>;

	const { timezone, current_weather, hourly } =
		data;

	return (
		<div className="md:w-[70%]">
			<div
				style={{
					backgroundImage: `url(${bgLarge})`,
				}}
				className="bg-cover  h-[200px] flex items-center justify-around rounded-2xl"
			>
				<div>
					<h2>{timezone}</h2>
					<p className="text-sm text-gray-200">{current_weather.time}</p>
				</div>
				<div className="flex items-center">
					<img src={sunnyIcon} alt="IconSunny" className="h-20 w-20" />
					<span className="text-5xl font-semibold italic">
						{Math.ceil(current_weather.temperature)}°
					</span>
				</div>
			</div>
			{/* Weather metrics  : số liệu*/}
			<div className="flex justify-between items-center mt-6">
				<div className="w-40 h-30 text-xl text-center pt-3 bg-gray-800 rounded-2xl  ">
					<h3>Feels like</h3> <br />
					<span>{Math.floor(current_weather.temperature)}°</span>
				</div>
				<div className="w-40 h-30 text-xl text-center pt-3 bg-gray-800 rounded-2xl  ">
					<h3>Humidity</h3> <br />
					<span>{hourly.relative_humidity_2m[0]}%</span>
				</div>
				<div className="w-40 h-30 text-xl text-center pt-3 bg-gray-800 rounded-2xl  ">
					<h3>Wind</h3> <br />
					<span>{current_weather.windspeed} km/h</span>
				</div>
				<div className="w-40 h-30 text-xl text-center pt-3 bg-gray-800 rounded-2xl  ">
					<h3>Precipitation</h3> <br />
					<span>{Math.floor(hourly.precipitation[0])} mm</span>
				</div>
			</div>

			<DailyForeCast />
		</div>
	);
}

export default CurrentWeather;
