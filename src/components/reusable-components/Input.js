import React from "react";
import { withRouter } from "react-router-dom";

export default withRouter(
  class Input extends React.Component {
    state = { searchValue: "" };

    changeHandler = ({ target }) => {
      this.setState({ searchValue: target.value });
    };

    search = (e) => {
      e.preventDefault();
      this.props.history.push(`/search/${this.state.searchValue}`);
    };

    render() {
      const { searchValue } = this.state;
      return (
        <form className="input">
          <input
            placeholder="Busca..."
            onChange={this.changeHandler}
            value={searchValue}
          />
          <button
            type="submit"
            disabled={!(searchValue && searchValue.length > 3)}
            onClick={this.search}
          >
            Buscar
          </button>
        </form>
      );
    }
  }
);
