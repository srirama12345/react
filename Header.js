import { Link } from "react-router-dom";
import lindex from "./lindex.css";
import index from "./index.css";
const Header = () => {
  return (
    <div className="bg1">
      <div className="bg">
        <h1>
          <span className="h">NXT</span>WAVE
        </h1>

        <img src="http://loremflickr.com/640/480" className="img3" />
      </div>

      <ul className="list">
        <li className="li">
          <Link to="path1">Resouces</Link>
        </li>
        <li className="li">
          <Link to="path2">Request</Link>
        </li>
        <li className="li">
          <Link to="path3">Users</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
