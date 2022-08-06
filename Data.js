import dindex from "./dindex.css";
const Data = (props) => {
  const { user } = props;
  const { title, icon_url, link, description, category, tag, id } = user;

  return (
    <li className="back1">
      <div className="back">
        <div className="row">
          <img src={icon_url} className="img" />
          <h1>{title}</h1>
        </div>
        <a href={link}>{link}</a>
        <p> {description} </p>
      </div>
    </li>
  );
};
export default Data;
