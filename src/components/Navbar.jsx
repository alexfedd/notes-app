import { Link } from "react-router-dom";
export function Navbar(props) {
  return (
    <ul className="navbar">
      <li className="navbar__item" onClick={() => {props.setIsEditable(!props.isEditable)}}>
        <Link to={"/"}>
          <img src="" className="navbar__image" alt="New Note" />
        </Link>
      </li>
      <li className="navbar__item">
        <Link to={"/test"}>
          <img src="" className="navbar__image" alt="Test button" />
        </Link>
      </li>
    </ul>
  );
}
