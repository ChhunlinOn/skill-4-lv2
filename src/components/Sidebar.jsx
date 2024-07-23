import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div id="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/croppages">Crop</NavLink>
          </li>
          <li>
            <NavLink to="/croptypes">CropType</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
