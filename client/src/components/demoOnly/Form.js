// src/js/components/Form.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addUser } from '../../core/actions/actions-users';
import styles from './Form.module.scss';
import ErrorModal from './Modals/ErrorModal';
import { openConfirmModal } from '../../core/actions/actions-ui';

function mapDispatchToProps(dispatch) {
  return {
    addUser: user => dispatch(addUser(user)),
    openConfirmModal: modal => dispatch(openConfirmModal(modal))
  };
}

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    const id = uuidv1();
    this.props.addUser({ name, id });
    this.setState({ name: '' });
  }
  ok = () => {
    console.log('ok button clicked');
  };
  handleOpenModal = () => {
    this.props.openConfirmModal({ modalKey: 'error-modal' });
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles['form']}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success btn-lg">
            SAVE
          </button>

          <ErrorModal
            modalKey="error-modal"
            confirmModalState={this.props.ui.confirmModalState}
            okCallback={this.ok}
            title="Error With Login"
          >
            {' '}
            this is a test
          </ErrorModal>
        </form>

        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ui: state.ui
  };
}
const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm);
export default Form;
