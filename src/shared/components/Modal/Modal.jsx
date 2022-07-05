import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    if (e.code === 'Escape') {
      return this.props.onClose();
    }
    if (e.currentTarget === e.target) {
      return this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div className={styles.Overlay} onClick={this.handleClose}>
        <div className={styles.Modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}
