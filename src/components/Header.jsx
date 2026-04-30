import logo from "../assets/images/logo.svg";
import SearchBar from "./UnitsToggle";
function Header() {
	return (
		<div className="flex  justify-between">
			<img src={logo} alt="logo" />
			<SearchBar />
			
		</div>
	);
}

export default Header;
