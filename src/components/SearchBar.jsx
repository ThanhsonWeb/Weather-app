import searchIcon from "../assets/images/icon-search.svg";

function SearchBar() {
	return (
		<div className="mt-10">
			<h1 className="md:text-5xl text-3xl  font-semibold text-center">
				How's the sky looking today?
			</h1>
			<form className="mt-10 not-target:flex gap-4 justify-center">
				<div className="flex items-center gap-2 bg-gray-800 rounded-xl px-2">
					<img src={searchIcon} alt="search" className="w-5 h-5" />
					<input
						type="text"
						className="flex-1 bg-transparent py-2 outline-none"
						placeholder="Search for a place..."
					/>
				</div>
				<button
					className=" px-4 py-2 bg-blue-500 rounded-xl cursor-pointer "
					type="submit"
				>
					Search
				</button>
			</form>
		</div>
	);
}

export default SearchBar;
