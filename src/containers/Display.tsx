import { IState } from "../interfaces";
import { connect } from "react-redux";
import Display from "../components/Display";

const mapStateToProps = (state: IState) => ({
  displayValue: state.displayValue,
});

export default connect(mapStateToProps, null)(Display);