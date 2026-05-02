import DailyItem from "./DailyItem";

function DailyForeCast() {

	return (
		<div>
			<h2 className="mt-7 mb-3">Daily forecast</h2>
			<div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
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
