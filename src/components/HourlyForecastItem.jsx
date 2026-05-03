import drizzle from "../assets/images/icon-drizzle.webp";
import cloud from "../assets/images/icon-overcast.webp";
import sun from "../assets/images/icon-partly-cloudy.webp";
import snow from "../assets/images/icon-snow.webp";

function HourlyForecastItem({ time, temp }) {
	const date = new Date(time);
	const hour = date.toLocaleTimeString([], { hour: "2-digit", hour12: true });

	function getIconOnTemp(temp) {
		if (temp >= 25) return sun;
		if (temp >= 15) return cloud;
		if (temp >= 5) return drizzle;
		return snow;
	}

	const icon = getIconOnTemp(temp);

	return (
		<div className="flex items-center justify-between bg-gray-700 p-2 mt-2 rounded-lg">
			<img src={icon} alt="icon"  className="h-12 w-12"/>
			<span>{hour}</span>
			<span>{Math.round(temp)}°</span>
		</div>
	);
}

export default HourlyForecastItem;
