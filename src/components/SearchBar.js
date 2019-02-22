import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    inputValue: ""
  };

  onInputChange = e => {
    console.log(e.target.value);
    this.setState({ inputValue: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onceSubmited(this.props.api_key, this.state.inputValue);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type to search"
            aria-label="Type to search"
            aria-describedby="button-addon2"
            value={this.state.inputValue}
            onChange={this.onInputChange}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
