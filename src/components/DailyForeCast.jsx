import DailyItem from "./DailyItem";

function DailyForeCast({ daily }) {
	if (!daily) return null;

	return (
		<div>
			<h2 className="mt-7 mb-3 font-semibold -text-lg">Daily forecast</h2>
			<div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
				{daily.time.map((date, index) => (
					<DailyItem
						key={date}
						date={date}
						min={daily.temperature_2m_min[index]}
						max={daily.temperature_2m_max[index]}
					/>
				))}
			</div>
		</div>
	);
}

export default DailyForeCast;
