import React from "react";
import Navbaritem from "../reusable-components/NavbarItem";
import Divider from "../reusable-components/Divider";
import Input from "../reusable-components/Input";
import store from "../../store";
import { Link } from "react-router-dom";

export default class NavBarContainer extends React.Component {
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
      <NavBar
        items={items}
        selectCategory={selectCategory}
        clearCategory={clearCategory}
      />
    );
  }
}

const NavBar = ({ items, selectCategory, clearCategory }) => (
  <div className="navbar">
    <div className="navbar-data">
      <Link to="/" className="homeLink">
        <h1>News Room</h1>
      </Link>
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
