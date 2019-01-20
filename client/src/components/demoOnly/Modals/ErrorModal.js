import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActionCreators from '../../../core/actions/actions-ui';
import { Dialog } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { styles } from './styles.module.scss';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: green,
    secondary: {
      main: '#f44336'
    }
  }
});

class ErrorModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  static getDerivedStateFromProps(nextProps) {
    const { modalKey, confirmModalState } = nextProps;

    if (confirmModalState && modalKey === confirmModalState.modalKey) {
      return { open: confirmModalState.openModal };
    }

    return { open: false };
  }

  handleCancel = () => {
    const { actions, modalKey } = this.props;
    actions.ui.closeConfirmModal({ modalKey });
  };

  handleOk = () => {
    const { actions, modalKey, okCallback } = this.props;
    if (okCallback) {
      okCallback();
    }
    actions.ui.closeConfirmModal({ modalKey });
  };

  render() {
    const {
      children,
      okCallback,
      modalKey,
      confirmModalState,
      title,
      ...other
    } = this.props;
    const { open } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Dialog
          disableBackdropClick={true}
          onClose={this.handleCancel}
          open={open}
          aria-labelledby="confirmation-dialog-title"
          title={title}
          {...other}
        >
          <div className={styles}>
            <DialogTitle id="confirmation-dialog-title">{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleOk} variant="text">
                OK
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  };
}

ErrorModal.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  okCallback: PropTypes.func,
  modalKey: PropTypes.string.isRequired,
  confirmModalState: PropTypes.shape({}).isRequired,
  title: PropTypes.string
};

ErrorModal.defaultProps = {
  children: null,
  okCallback: null,
  title: ''
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorModal);
