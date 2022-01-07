import { useGlobalModal } from 'app/contexts/globalModal/provider';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

const DeleteModal = ({ title, inputs, description }) => {
  const {
    openCreateModal,
    handleCloseCreateModal,
    hideModal,
    store,
    form,
    setForm,
    handleConfirm,
  } = useGlobalModal();

  return (
    <Modal isOpen onClose={hideModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        {/* <Content inputs={inputs} /> */}
        <ModalBody>
          {description || 'Are you sure you want delete this item?'}
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={handleCloseCreateModal}>
            Close
          </Button>
          <Button variant="ghost" colorScheme="blue" onClick={handleConfirm}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
