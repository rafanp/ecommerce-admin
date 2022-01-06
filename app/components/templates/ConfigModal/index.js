import { Box, Flex, Spacer, Stack, Text } from '@chakra-ui/layout';
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
import Input from '@/components/ui/Input/Input';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control';

const ConfigModal = ({ title, fields }) => {
  const { handleCloseCreateModal, hideModal, handleConfirm } = useGlobalModal();

  return (
    <Modal isOpen onClose={hideModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <Form fields={fields} />
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

export default ConfigModal;

const Form = ({ fields }) => {
  const { form, handleInputs } = useGlobalModal();
  // Change to Formik
  const handleChange = (field, type, e) => {
    const value = type === 'select' ? e : e.target?.value;
    handleInputs(field, value);
  };

  return (
    <ModalBody>
      <Stack>
        {fields &&
          fields.map((field, index) => {
            const { title, type } = field;
            return (
              <FormInput
                key={index}
                title={title}
                type={type}
                onChange={(e) => handleChange(title, type, e)}
                value={form[title]}
              />
            );
          })}
      </Stack>
    </ModalBody>
  );
};

const FormInput = ({ title, type, ...rest }) => {
  return (
    <FormControl>
      <FormLabel textTransform="capitalize">{title}</FormLabel>
      <Input
        name={title}
        bg={'white'}
        type={type}
        domain={'category'}
        borderRadius={8}
        {...rest}
      />
      {/* <FormErrorMessage>{}</FormErrorMessage> */}
    </FormControl>
  );
};
