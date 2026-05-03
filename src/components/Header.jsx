import logo from "../assets/images/logo.svg";
import UnitsToggle from "./UnitsToggle";
function Header({ setIsCelsius, setIsKm, isCelsius, isKm, setIsMil, isMil }) {
	return (
		<header className="flex  justify-between">
			<img src={logo} alt="logo" />
			<UnitsToggle
				setIsCelsius={setIsCelsius}
				setIsKm={setIsKm}
				isCelsius={isCelsius}
				isKm={isKm}
				setIsMil={setIsMil}
				isMil={isMil}
			/>
		</header>
	);
}

export default Header;
