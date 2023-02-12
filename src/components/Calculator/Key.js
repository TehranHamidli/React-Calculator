import { useCallback, useContext } from "react";
import style from "./style.module.css";
import { calculatorContext } from "../../contexts/Calculator";
function Key({ value, type }) {
  const [state, dispatch] = useContext(calculatorContext);
  const onClick = () => {
    if (type === "operator" && value === "C") {
      dispatch({
        type: "erase",
      });
    } else if (type === "operator" && value === "=") {
      dispatch({
        type: "calculate",
      });
    } else {
      dispatch({
        type,
        payload: value,
      });
    }
  };

  return (
    <>
      <button onClick={onClick} className={style.key}>
        {value}
      </button>
    </>
  );
}

export default Key;
