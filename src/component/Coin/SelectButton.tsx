import styles from "./CoinInfo.module.scss";
// import { makeStyles } from "@material-ui/core";

interface IProps {
  children: any;
  selected: any;
  onClick: any;
}
const SelectButton = ({ children, selected, onClick }: IProps) => {
  //   const useStyles = makeStyles({
  let selectbutton = {
    // borderRadius: 5,
    // padding: 10,
    // paddingLeft: 20,
    // paddingRight: 20,
    // fontFamily: "Montserrat",
    cursor: "pointer",
    backgroundColor: selected ? "gold" : "",
    color: selected ? "black" : "",
    fontWeight: selected ? 700 : 500,
    // "&:hover": {
    //   backgroundColor: "gold",
    //   color: "black",
    // },
    // width: "22%",
    //   margin: 5,
  };
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
