import unit from "../assets/images/icon-units.svg";

function UnitsToggle() {
	return (
		<div className="flex items-center gap-2 bg-gray-800 px-2 rounded-xl  ">
			<img src={unit} alt="" />
			<span>Units</span>
			<select>
				<option value=""></option>
				<option value=""></option>
				<option value=""></option>
				<option value=""></option>
				<option value=""></option>
				<option value=""></option>
			</select>
		</div>
	);
}

export default UnitsToggle;
