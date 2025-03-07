import { useState } from "react";
import data from "./data";
import "./Accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [selectedArray, setSlectedArray] = useState([]);

  const clickHandler = (getcurrentid) => {
    console.log("currentId", getcurrentid);
    const multiSelected = [...selectedArray];
    let find = multiSelected.indexOf(getcurrentid);
    console.log(find);
    if  (find === -1) {
      multiSelected.push(getcurrentid);
    } else {
      multiSelected.splice(find, 1);
    }
    setSlectedArray(multiSelected);
    setSelected(getcurrentid === selected ? null : getcurrentid);
    console.log("Selected Array", selectedArray);
  };

  return (
    <>
      <div className="wrap">
        <h2 className="heading">Accordion</h2>

        <div className="item">
          {data.map((dataItem) => (
            <div className="question" key={dataItem.id}>
              <div onClick={() => clickHandler(dataItem.id)}>
                <h3>{dataItem.question}</h3>

                <span>
                  {selectedArray.indexOf(dataItem.id) !== -1 ? "-" : "+"}
                </span>
              </div>

              {selectedArray.indexOf(dataItem.id) !== -1 ? (
                <div className="answer">{dataItem.answer}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Accordion;
