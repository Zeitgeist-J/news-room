import moment from "moment";

const SET = "SET";
const SELECT = "SELECT";
const CLEAR_SELECTED = "CLEAR_SELECTED";
const CLEAR_NEWS = "CLEAR_NEWS";
const API_BASE = "https://api.canillitapp.com";

const setNews = (news) => ({
  type: SET,
  news
});

const changeCategory = (id) => ({
  type: SELECT,
  id
});

const clearSelected = () => ({
  type: CLEAR_SELECTED
});

const clearNews = () => ({
  type: CLEAR_NEWS
});

const getFromEndpoint = (url) => (dispatch) => {
  fetch(url)
    .then((data) => data.json())
    .then((news) => {
      const result =
        news.length === 0
          ? {
              response: "Busqueda sin resultados"
            }
          : news.slice(0, 10);
      dispatch(setNews(result));
    });
};

const getLastest = () => {
  const endpoint = `${API_BASE}/latest/${moment().format("yyyy-MM-DD")}`;
  return getFromEndpoint(endpoint);
};

const getCategory = (id) => {
  const endpoint = `${API_BASE}/news/category/${id}`;
  return getFromEndpoint(endpoint);
};

const getSearch = (searchValue) => {
  const endpoint = `${API_BASE}/search/${searchValue}`;
  return getFromEndpoint(endpoint);
};

export const selectCategory = (id) => (dispatch) => {
  const action = changeCategory(id);
  dispatch(action);
};

export const clearCategory = () => (dispatch) => {
  const action = clearSelected();
  dispatch(action);
};

export const getNews = (newsType, searchValue) => (dispatch) => {
  dispatch(clearNews());
  let newsAction;
  switch (newsType) {
    case "category":
      newsAction = getCategory(searchValue);
      break;
    case "search":
      dispatch(clearSelected());
      newsAction = getSearch(searchValue);
      break;
    default:
      newsAction = getLastest();
      break;
  }
  newsAction(dispatch);
};
