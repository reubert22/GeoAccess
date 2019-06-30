import React, { PureComponent } from 'react';
import { Modal } from 'react-native';

import Tubular from './Tubular';
import Hollow from './Hollow';

class ChooseModal extends PureComponent {
  render() {
    const { typeModal, place, handleModal, onRequestClose } = this.props;

    return (
      <Modal style={{ flex: 1 }} onRequestClose={onRequestClose}>
        {!typeModal.includes('tubular') ? (
          <Hollow item={place} handleModal={handleModal} />
        ) : (
          <Tubular item={place} handleModal={handleModal} />
        )}
      </Modal>
    );
  }
}

export default ChooseModal;
