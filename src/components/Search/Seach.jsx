import React from "react";
import { connect } from "react-redux";
import { setValue } from "./../../redux/searchReducer";
import styles from './Search.module.css'


class SearchBar extends React.Component {
  onChange = e => {
    this.props.setValue(e.target.value);
    e.preventDefault();
    localStorage.setItem('prevSearch', e.target.value);
  }
  onSubmit = (e) => {
    e.preventDefault(e);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input className={styles.textFieldinput}
            onChange={this.onChange}
            type='text'
            placeholder="Chooise league"
            value={localStorage.getItem('prevSearch')}
          />
        </form>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    value: state.searchClass.value,
  }
}


export default connect(mapStateToProps, { setValue: setValue })(SearchBar);