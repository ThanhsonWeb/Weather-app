import { Listbox } from "@headlessui/react";
import { useState } from "react";
import HourlyForecastItem from "./HourlyForecastItem";
function HourlyForecast({ hourly }) {
	// render lis option
	const days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	const [dayIndex, setDayIndex] = useState(1);
	if (!hourly) return null;

	// const times = hourly.time.slice(0, 8);

	function groupByDay(hourly) {
		const groupedDays = [];
		for (let i = 0; i < hourly.time.length; i += 24) {
			// after loop we have 7 elements in array
			groupedDays.push({
				time: hourly.time.slice(i, i + 24),
				temp: hourly.temperature_2m.slice(i, i + 24),
			});
		}
		return groupedDays;
	}

	const grouped = groupByDay(hourly);

	return (
		<div className="flex flex-col md:w-[30%] bg-gray-800 p-4 rounded-2xl mt-8 md:mt-0">
			<div className="flex items-center justify-between w-full h-16">
				<div>
					<h2 className="text-lg">Hourly Forecast</h2>
				</div>
				<div>
					<Listbox value={dayIndex} onChange={setDayIndex}>
						<Listbox.Button className="bg-gray-700 px-4 py-2 rounded-lg">
							{days[dayIndex]}
						</Listbox.Button>

						<Listbox.Options className="absolute mt-2 bg-gray-700 p-4 rounded-2xl   ">
							{days.map((d, i) => (
								<Listbox.Option
									key={d}
									value={i}
									className="option"
									onClick={() => setDayIndex(i)}
								>
									{d}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Listbox>
				</div>
			</div>
			<div>
				{grouped && grouped[dayIndex]?.time ? (
					grouped[dayIndex].time
						.slice(0, 8)
						.map((t, i) => (
							<HourlyForecastItem
								key={t}
								time={t}
								temp={grouped[dayIndex].temp[i]}
							/>
						))
				) : (
					<p>Loading forecast...</p> // Provide a fallback UI while data is missing
				)}
			</div>
		</div>
	);
}

export default HourlyForecast;
