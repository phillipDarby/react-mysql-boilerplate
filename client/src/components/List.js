import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/index';

const mapStateToProps = state => {
  return { users: state.users };
};

class ConnectedList extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // calling the new action creator
    this.props.getUsers();
  }
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.users.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.name}
          </li>
        ))}
      </ul>
    );
  }
}

const List = connect(
  mapStateToProps,
  { getUsers }
)(ConnectedList);
export default List;