import bgLarge from "../assets/images/bg-today-large.svg";
import sunnyIcon from "../assets/images/icon-sunny.webp";
import DailyForeCast from "./DailyForeCast";

function CurrentWeather({ data, location }) {
	//  Return null or a loader if data hasn't arrived yet
	if (!data) return <div>Loading...</div>;
	const { current_weather, hourly, daily } = data;

	const formattedTime = new Date(current_weather.time).toLocaleString("en-US", {
		weekday: "long",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});

	const currentTime = new Date(current_weather.time);
	const hourlyTime = hourly.time.map((t) => new Date(t));

	//Finds the one closest to the current_weather.time
	let closetIndex = 0;
	let minDiff = Infinity;
	hourlyTime.forEach((t, i) => {
		const diff = Math.abs(t - currentTime);
		if (diff < minDiff) {
			minDiff = diff;
			closetIndex = i;
		}
	});

	const humidity = hourly.relative_humidity_2m[closetIndex];
	const precipitation = hourly.precipitation[closetIndex];

	return (
		<div className="md:w-[70%]">
			<div
				style={{
					backgroundImage: `url(${bgLarge})`,
				}}
				className="bg-cover  h-[200px] flex items-center justify-around rounded-2xl"
			>
				<div>
					<h2>
						{location.name} {location.country}
					</h2>
					<p className="text-sm text-gray-200">{formattedTime}</p>
				</div>
				<div className="flex items-center">
					<img src={sunnyIcon} alt="IconSunny" className="h-20 w-20" />
					<span className="md:text-5xl text-2xl font-semibold italic">
						{Math.ceil(current_weather.temperature)}°
					</span>
				</div>
			</div>
			{/* Weather metrics  : số liệu*/}
			<div className="grid lg:grid-cols-4  sm:grid-cols-2 gap-3 mt-6">
				<div className=" text-xl text-center py-4 bg-gray-800 rounded-2xl  ">
					<h3>Feels like</h3> <br />
					<span>{Math.floor(current_weather.temperature)}°</span>
				</div>
				<div className=" text-xl text-center py-4 bg-gray-800 rounded-2xl  ">
					<h3>Humidity</h3> <br />
					<span>{humidity}%</span>
				</div>
				<div className=" text-xl text-center py-4 bg-gray-800 rounded-2xl  ">
					<h3>Wind</h3> <br />
					<span>{current_weather.windspeed} km/h</span>
				</div>
				<div className=" text-xl text-center py-4 bg-gray-800 rounded-2xl  ">
					<h3>Precipitation</h3> <br />
					<span>{precipitation} mm</span>
				</div>
			</div>

			<DailyForeCast daily={data.daily} />
		</div>
	);
}

export default CurrentWeather;
