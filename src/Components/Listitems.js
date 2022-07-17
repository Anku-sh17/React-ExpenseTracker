import "./Listitem.css";

const Listitem = (props) => {
  return (
    <div>
      <li className="minus">
        {props.text} {props.sign}${Math.abs(props.Amount)}
      </li>
    </div>
  );
};

export default Listitem;
