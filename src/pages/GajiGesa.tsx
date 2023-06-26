import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Select, Slider } from "antd";
import ValueSlider from "../components/ValueSlider";
import styles from "./GajiGesa.module.css";

const GajiGesa: FunctionComponent = () => {
    const [selectedOption, setSelectedOption] = useState("");
  const [sliderValue, setSliderValue] = useState(0);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <div className={styles.gajigesa}>
      <Select
        className={styles.inputGroup}
        style={{ width: "235.7241668701172px" }}
        value={selectedOption}
        onChange={handleOptionChange}
        size="middle"
        placeholder="Akun Gaji"
        filterOption={(input: any, option: any) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        virtual={true}
        showArrow={true}
      >
        <Select.Option value="Option1">Option1</Select.Option>
        <Select.Option value="Option2">Option2</Select.Option>
        <Select.Option value="Option3">Option3</Select.Option>
      </Select>
      <div className={styles.withdrawlAmount}>Withdrawl Amount</div>
      <img
        className={styles.iconsmodeEdit24px}
        alt=""
        src="/iconsmode-edit-24px.svg"
      />
      <Slider
        className={styles.slider}
        style={{ width: 374 }}
        min={100}
        max={2085500}
        defaultValue={0}
        onChange={(value) => setSliderValue(value)}
      />
      <div className={styles.rp100}>Rp 100</div>
      <div className={styles.rp2085500}>Rp 2.085.500</div>
      <ValueSlider slider={sliderValue} />
      <div className={styles.gajigesaChild} />
    </div>
  );
};

export default GajiGesa;
