const initialState = {
  items: [
    { id: 1, name: "Política", icon: "", selected: false },
    { id: 2, name: "Internacionales", icon: "", selected: false },
    { id: 3, name: "Tecnología", icon: "", selected: false },
    { id: 4, name: "Espectáculos", icon: "", selected: false },
    { id: 5, name: "Deportes", icon: "", selected: false },
    { id: 6, name: "Diseño", icon: "", selected: false }
  ],
  news: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SELECT":
      state.items = state.items.map((item) => ({
        ...item,
        selected: item.id === action.id
      }));
      break;
    case "CLEAR_SELECTED":
      state.items = state.items.map((item) => ({
        ...item,
        selected: false
      }));
      break;
    case "CLEAR_NEWS":
      state.news = [];
      break;
    case "SET":
      state.news = action.news;
      break;
    default:
      break;
  }
  return state;
};
