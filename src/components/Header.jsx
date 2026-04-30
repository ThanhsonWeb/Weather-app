import logo from "../assets/images/logo.svg";
import UnitsToggle from "./UnitsToggle";
function Header() {
	return (
		<header className="flex  justify-between">
			<img src={logo} alt="logo" />
			<UnitsToggle />
		</header>
	);
}

export default Header;
