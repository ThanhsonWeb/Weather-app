import unit from "../assets/images/icon-units.svg";
import { Listbox } from "@headlessui/react";
import dropdown from "../assets/images/icon-dropdown.svg";
import checkmark from "../assets/images/icon-checkmark.svg";

function UnitsToggle({ setIsCelsius, setIsKm, isCelsius, isKm }) {
	return (
		<div className="flex items-center gap-2 bg-gray-800 px-2 rounded-xl  ">
			<img src={unit} alt="unit" />
			<span>Units</span>
			<div className="relative">
				<Listbox>
					<Listbox.Button>
						<img src={dropdown} alt="dropdown icon" />
					</Listbox.Button>

					<Listbox.Options className="absolute mt-2 right-0 bg-gray-800 p-4 rounded-2xl  w-[14rem] ">
						<h2 className="font-semibold">Switch to Imperial</h2>
						<div className="mt-2 border-b py-2 ">
							<span className="">Temperature🌅</span>
							<Listbox.Option
								value="celsius"
								className={`option ${isCelsius ? "active" : ""}`}
								onClick={() => setIsCelsius(true)}
							>
								{isCelsius ? (
									<>
										Celsius (°C) <img src={checkmark} alt="checkmark" />
									</>
								) : (
									"Celsius (°C)"
								)}
							</Listbox.Option>
							<Listbox.Option
								value="Fahrenheit"
								className={`option ${isCelsius ? "" : "active"}`}
								onClick={() => setIsCelsius(false)}
							>
								{!isCelsius ? (
									<>
										Temperature (°F) <img src={checkmark} alt="checkmark" />
									</>
								) : (
									"Temperature (°F)"
								)}
							</Listbox.Option>
						</div>
						<div className="mt-2 border-b py-2 ">
							<span className="">Wind 🍃</span>
							<Listbox.Option
								value="km"
								className={`option ${isKm ? "active" : ""}`}
								onClick={() => setIsKm(true)}
							>
								{isKm ? (
									<>
										km/h <img src={checkmark} alt="checkmark" />
									</>
								) : (
									"km/h"
								)}
							</Listbox.Option>
							<Listbox.Option
								value="mph"
								className={`option ${isKm ? "" : "active"}`}
								onClick={() => setIsKm(false)}
							>
								{!isKm ? (
									<>
										mph <img src={checkmark} alt="checkmark" />
									</>
								) : (
									"mph"
								)}
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
