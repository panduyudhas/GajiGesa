import { FunctionComponent } from "react";
import styles from "./ValueSlider.module.css";

type ValueSliderType = {
  slider?: string;
};

const ValueSlider: FunctionComponent<ValueSliderType> = ({ slider = "0" }) => {
  return (
    <h6 className={styles.value} id="slider" form>
      {slider}
    </h6>
  );
};

export default ValueSlider;
