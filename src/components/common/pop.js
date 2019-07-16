import React from 'react';
import ModalVideo from 'react-modal-video';

class PopUp extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="lYdzK48a2WE"
          onClose={() => this.setState({ isOpen: false })}
        />
        <button onClick={this.openModal}>Open</button>
      </div>
    );
  }
}

export default PopUp;
