import list from "./list.css";
const List = (props) => {
  const { data } = props;
  const { title, description, link } = data;
  return (
    <li className="d">
      <input type="checkbox" />
      <p>{title}</p>
      <p>{description}</p>
      <a href={link}>{link}</a>
    </li>
  );
};
export default List;
