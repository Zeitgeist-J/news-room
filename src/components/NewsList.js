import React from "react";
import News from "./News";
import NotFound from "./NotFoundNews";
import { withRouter } from "react-router";
import store from "../store";

export default withRouter(
  class NewsList extends React.Component {
    state = { news: this.props.news };

    setNews = () => {
      const [, type, value] = this.props.location.pathname.split("/");
      this.checkSelectedItem(type, Number(value));
      this.props.getNews(type, value);
    };

    checkSelectedItem = (type, value) => {
      const selectedItem = store.getState().items.find((item) => item.selected);
      if (type === "category") {
        const isDifferent = selectedItem && selectedItem.id === value;
        if (!isDifferent) {
          this.props.selectCategory(value);
        }
      }
    };

    mapNewsToState = () => {
      this.setState({ news: store.getState().news });
    };

    componentDidMount() {
      this.setNews();
      this.unsuscribe = store.subscribe(this.mapNewsToState);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.location.pathname !== this.props.location.pathname) {
        this.setNews();
      }
    }

    componentWillUnmount() {
      this.unsuscribe();
    }

    render() {
      const { news } = this.state;

      return (
        <div className="news-container">
          <NewsBlock news={news} />
        </div>
      );
    }
  }
);

const NewsBlock = ({ news }) => {
  if (news) {
    return news instanceof Array ? (
      <>
        {news.map((news, index) => (
          <News key={index} {...news} />
        ))}
      </>
    ) : (
      <NotFound message={news} />
    );
  } else {
    return <h2>...Cargando</h2>;
  }
};
