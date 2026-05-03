import unit from "../assets/images/icon-units.svg";
import { Listbox } from "@headlessui/react";
import dropdown from "../assets/images/icon-dropdown.svg";

function UnitsToggle({ setIsCelsius, setIsKm }) {
	return (
		<div className="flex items-center gap-2 bg-gray-800 px-2 rounded-xl  ">
			<img src={unit} alt="unit" />
			<span>Units</span>
			<div className="relative">
				<Listbox>
					<Listbox.Button>
						<img src={dropdown} alt="dropdown icon" />
					</Listbox.Button>

					<Listbox.Options className="absolute mt-2 right-0 bg-gray-800 p-4 rounded-2xl  w-[13rem] ">
						<h2 className="font-semibold">Switch to Imperial</h2>
						<div className="mt-2 border-b py-2 ">
							<span className="">Temperature🌅</span>
							<Listbox.Option
								value="celsius"
								className="option"
								onClick={() => setIsCelsius(true)}
							>
								Celsius (°C)
							</Listbox.Option>
							<Listbox.Option
								value="Fahrenheit"
								className="option"
								onClick={() => setIsCelsius(false)}
							>
								Temperature(°F)
							</Listbox.Option>
						</div>
						<div className="mt-2 border-b py-2 ">
							<span className="">Wind 🍃</span>
							<Listbox.Option
								value="km"
								className="option"
								onClick={() => setIsKm(true)}
							>
								km/h
							</Listbox.Option>
							<Listbox.Option
								value="mph"
								className="option"
								onClick={() => setIsKm(false)}
							>
								mph
							</Listbox.Option>
						</div>
						<div className="mt-2 border-b py-2 ">
							<span className="">Precipitation </span>
							<Listbox.Option value="Precipitation" className="option">
								Millimeters (mm)
							</Listbox.Option>
							<Listbox.Option value="inches" className="option">
								Inches(in)
							</Listbox.Option>
						</div>
					</Listbox.Options>
				</Listbox>
			</div>
		</div>
	);
}

export default UnitsToggle;
