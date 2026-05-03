import logo from "../assets/images/logo.svg";
import UnitsToggle from "./UnitsToggle";
function Header({setIsCelsius, setIsKm}) {
	return (
		<header className="flex  justify-between">
			<img src={logo} alt="logo" />
			<UnitsToggle setIsCelsius={setIsCelsius} setIsKm={setIsKm} />
		</header>
	);
}

export default Header;
