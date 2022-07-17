import "./History.css";
import Listitem from "./Listitems";

const History = (props) => {
  return (
    <div>
      <ul id="list" className="list">
        {props.item.map((exp) => (
          <Listitem text={exp.text} sign={exp.sign} Amount={exp.Amount} />
        ))}
      </ul>
    </div>
  );
};

export default History;
