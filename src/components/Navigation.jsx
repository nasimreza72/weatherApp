import { NavLink } from "react-router-dom";
import Input from "./Input.jsx";


function Navigation() {
  return (
    <nav>
      <Input />
      <NavLink to="/main/weather">Forecast</NavLink>
      <NavLink to="/main/metar">METAR</NavLink>
      <NavLink to="/main/taf">TAF</NavLink>
      <NavLink to="/main/metar-taf">METAR / TAF</NavLink>
      <NavLink to="/main/metar-taf-decoded">
        METAR / TAF <br />
        (decoded)
      </NavLink>
      <NavLink to="/main/archive">Archive</NavLink>

    </nav>
  );
}
export default Navigation;
