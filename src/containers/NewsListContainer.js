import { connect } from "react-redux";
import NewsList from "../components/views/NewsList";
import { getNews, selectCategory, clearSelected } from "../actions/index";

const mapStateToProps = (state) => state;

const mapActionsToProps = {
  getNews,
  selectCategory,
  clearSelected
};

export default connect(mapStateToProps, mapActionsToProps)(NewsList);
