import { Listbox } from "@headlessui/react";
import { useState } from "react";
function HourlyForecast({ hourly }) {
	if (!hourly) return null;

	const days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	const [day, setDay] = useState(days[0]);

	return (
		<div className="flex md:w-[30%] bg-gray-800 p-4 rounded-2xl mt-8 md:mt-0">
			<div className="flex items-center justify-between w-full h-16">
				<div>
					<h2 className="text-lg">Hourly Forecast</h2>
				</div>
				<div>
					<Listbox value={day} onChange={setDay}>
						<Listbox.Button className="bg-gray-700 px-4 py-2 rounded-lg">
							{day}
						</Listbox.Button>

						<Listbox.Options className="absolute mt-2 bg-gray-500 p-4 rounded-2xl  ">
							{days.map((d) => (
								<Listbox.Option
									key={d}
									value={d}
									className="cursor-pointer shadow-md hover:bg-gray-700 py-2 px-4"
								>
									{d}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Listbox>
				</div>
			</div>
		</div>
	);
}

export default HourlyForecast;
