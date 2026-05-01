import DailyItem from "./DailyItem";

function DailyForeCast() {

	return (
		<div>
			<h2 className="mt-7 mb-3">Daily forecast</h2>
			<div className="flex justify-between">
				<DailyItem />
				<DailyItem />
				<DailyItem />
				<DailyItem />
				<DailyItem />
				<DailyItem />
				<DailyItem />
			</div>
		</div>
	);
}

export default DailyForeCast;
