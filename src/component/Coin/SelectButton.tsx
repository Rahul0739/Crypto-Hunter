import styles from "./CoinInfo.module.scss";

interface IProps {
  children: any;
  selected: any;
  onClick: any;
}
const SelectButton = ({ children, selected, onClick }: IProps) => {
  return (
    <span
      className={`rounded-top rounded-bottom p-3 pl-2 pe-2 text-Montserrat w-25 m-3 ${styles.garphbutton}`}
      onClick={onClick}
      style={
        selected
          ? { backgroundColor: "gold", fontWeight: 700, color: "black" }
          : { backgroundColor: "black", color: "white" }
      }
    >
      {children}
    </span>
  );
};

export default SelectButton;
