import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./State.module.css";

function State({ state }) {
  return (
    <div className={styles.parent}>
      <FontAwesomeIcon
        icon={faCaretUp}
        color={
          state.percent < 30 ? "red" : state.percent < 70 ? "orange" : "green"
        }
        className={styles.icon}
      />
      <div className={styles.stateGroup}>
        <b>{state.state}</b>
        <div className={styles.stateDetail}>
          {state.sum}, {state.percent}%
        </div>
      </div>
    </div>
  );
}

export default State;
