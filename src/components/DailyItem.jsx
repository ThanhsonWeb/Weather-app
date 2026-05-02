import drizzle from "../assets/images/icon-drizzle.webp";
import cloud from "../assets/images/icon-overcast.webp";
import sun from "../assets/images/icon-partly-cloudy.webp";
import snow from "../assets/images/icon-snow.webp";

function DailyItem({ date, min, max }) {
	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		weekday: "short", // "Mon", "Tue", etc.
	});

	// pick icon based on max temperature
	const icon = getIconForTemp(max);

	function getIconForTemp(temp) {
		if (temp >= 25) return sun;
		if (temp >= 15) return cloud;
		if (temp >= 5) return drizzle;
		return snow;
	}

	return (
		<div>
			<div className="p-2 bg-gray-800  h-[8rem] rounded-2xl  flex flex-col items-center  space-y-3 ">
				<h3>{formattedDate}</h3>
				<img src={icon} alt="weather icon" className="h-10 w-10" />
				<div className="flex items-center justify-between w-full ">
					<span>{Math.floor(min)}°</span>
					<span>{Math.ceil(max)}°</span>
				</div>
			</div>
		</div>
	);
}

export default DailyItem;
