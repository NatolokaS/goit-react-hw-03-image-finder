import React, { Component } from 'react';
import css from 'components/App.module.css';
import { Notify } from 'notiflix';


export default class Searchbar extends Component {
  state = {
    inputValue: '',
  }

  handleChange =(e) => {
    this.setState({ inputValue: e.target.value})
  }

  handleSubmit =(e) => {
    e.preventDefault();
    if (this.state.inputValue.trim()===""){
      Notify.failure("Please enter your reqest")
    } 
    this.props.onSubmit(this.state.inputValue)
    this.setState({ inputValue: ""})
  }

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

