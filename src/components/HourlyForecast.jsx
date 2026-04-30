function HourlyForecast() {
	return (
		<div className="flex md:w-[30%] bg-gray-800 p-4">
			<div className="flex  justify-between">
				<h2>Hourly Forecast</h2>
				<div className="flex items-center justify-between bg-gray-600 ">
					<span>Tuesday</span>
					<select>
						<option value=""></option>
						<option value=""></option>
						<option value=""></option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default HourlyForecast;
