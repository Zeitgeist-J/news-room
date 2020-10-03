import React from "react";
import Navbaritem from "./NavbarItem";
import Divider from "./Divider";
import Input from "./Input";
import store from "../store";

export default class NavBar extends React.Component {
  state = { items: this.props.items };

  setItems = () => {
    this.setState({ items: store.getState().items });
  };

  componentDidMount() {
    this.unsuscribe = store.subscribe(this.setItems);
  }

  componentWillUnmount() {
    this.unsuscribe();
  }

  render() {
    const { selectCategory, clearCategory } = this.props;
    const { items } = this.state;
    return (
      <div className="navbar">
        <div className="navbar-data">
          <h1>News Room</h1>
          <h3 className="title">Categorías</h3>
          <Divider />
          {items.map((item, index) => (
            <Navbaritem
              key={`item-${index}`}
              {...item}
              selectCategory={selectCategory}
            />
          ))}
          <Divider />
          <Navbaritem
            name="Recientes"
            selected={!items.some((item) => item.selected)}
            selectCategory={clearCategory}
          />
          <Input />
        </div>
      </div>
    );
  }
}
