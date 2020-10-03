import { connect } from "react-redux";
import NewsList from "../components/NewsList";
import { getNews } from "../actions/index";

const mapStateToProps = (state) => state;

const mapActionsToProps = {
  getNews
};

export default connect(mapStateToProps, mapActionsToProps)(NewsList);
