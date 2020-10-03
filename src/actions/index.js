import moment from "moment";

const SET = "SET";
const SELECT = "SELECT";
const CLEAR_SELECTED = "CLEAR_SELECTED";
const CLEAR_NEWS = "CLEAR_NEWS";

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

const getLastest = (dispatch) => {
  const endpoint = `https://api.canillitapp.com/latest/${moment().format(
    "yyyy-MM-DD"
  )}`;
  getFromEndpoint(endpoint)(dispatch);
};

const getCategory = (id, dispatch) => {
  const endpoint = `https://api.canillitapp.com/news/category/${id}`;
  getFromEndpoint(endpoint)(dispatch);
};

const getSearch = (searchValue, dispatch) => {
  const endpoint = `https://api.canillitapp.com/search/${searchValue}`;
  getFromEndpoint(endpoint)(dispatch);
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
  switch (newsType) {
    case "category":
      // console.log(searchValue);
      // dispatch(changeCategory(searchValue));
      getCategory(searchValue, dispatch);
      break;
    case "search":
      dispatch(clearSelected());
      getSearch(searchValue, dispatch);
      break;
    default:
      getLastest(dispatch);
      break;
  }
};
