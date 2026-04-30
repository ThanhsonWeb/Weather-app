import drizzle from "../assets/images/icon-drizzle.webp";

function DailyItem() {
	return (
		<div>
			<div className="p-2 bg-gray-800  h-[8rem] rounded-2xl  flex flex-col items-center  space-y-3 ">
				<h3>Tue</h3>
				<img src={drizzle} alt="icon" className="h-10 w-10" />
				<div className="flex items-center justify-between w-full ">
					<span>20°</span>
					<span>12°</span>
				</div>
			</div>
		</div>
	);
}

export default DailyItem;
