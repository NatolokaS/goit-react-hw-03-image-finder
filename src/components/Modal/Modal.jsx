import React, { Component } from 'react';
import { StyledModal } from './Styled';


export default class Modal extends Component {
  state = {
    counter: 1,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'auto';
  }

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <StyledModal onClick={this.handleOverlayClick}>
        <div className="modal">
          <img src={this.props.imageData.name} alt="Not Found" />
        </div>
      </StyledModal>
    );
  }
}