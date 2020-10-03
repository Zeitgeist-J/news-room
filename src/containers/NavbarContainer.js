import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { selectCategory, clearCategory } from "../actions/index";

const mapStateToProps = (state) => state;

const mapActionsToProps = {
  selectCategory,
  clearCategory
};

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
