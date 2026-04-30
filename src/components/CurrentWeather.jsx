import bgLarge from "../assets/images/bg-today-large.svg";
import sunnyIcon from "../assets/images/icon-sunny.webp";
import DailyForeCast from "./DailyForeCast";
function CurrentWeather() {
	return (
		<div className="md:w-[60%]">
			<div
				style={{
					backgroundImage: `url(${bgLarge})`,
				}}
				className="bg-cover mt-10  h-[200px] flex items-center justify-around rounded-2xl"
			>
				<div>
					<h2>Berlin, Germany </h2>
					<p className="text-sm text-gray-200">Tuesday Aug 5 , 2025</p>
				</div>
				<div className="flex items-center">
					<img src={sunnyIcon} alt="IconSunny" className="h-20 w-20" />
					<span className="text-5xl font-semibold italic">20°</span>
				</div>
			</div>

			<div className="flex justify-between items-center mt-6">
				<div className="py-5 px-7 bg-gray-800 rounded-2xl  ">
					<h3>Feels like</h3> <br />
					<span>20°</span>
				</div>
				<div className="py-5 px-7 bg-gray-800 rounded-2xl  ">
					<h3>Humidity</h3> <br />
					<span>46%</span>
				</div>
				<div className="py-5 px-7 bg-gray-800 rounded-2xl  ">
					<h3>Wind</h3> <br />
					<span>14 km/h</span>
				</div>
				<div className="py-5 px-7 bg-gray-800 rounded-2xl  ">
					<h3>Precipitation</h3> <br />
					<span>0 mm</span>
				</div>
			</div>

			<DailyForeCast />
		</div>
	);
}

export default CurrentWeather;
