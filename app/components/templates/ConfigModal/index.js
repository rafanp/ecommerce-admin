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
  const {
    openCreateModal,
    handleCloseCreateModal,
    hideModal,
    store,
    form,
    setForm,
    handleConfirm,
  } = useGlobalModal();

  // const [form, setForm] = useState({});

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
  const { handlefields, store, form } = useGlobalModal();
  console.log('form :', form);
  // Change to Formik
  return (
    <ModalBody>
      <Stack>
        {fields.map((field, index) => {
          return (
            <FormInput
              key={index}
              title={field.title}
              type={field.type}
              onChange={(e) => {
                handleInputs(field.title, e.target.value);
              }}
              value={form[field.title]}
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
        // placeholder={"Add new item"}
        bg={'white'}
        type={type}
        domain={'category'}
        mr={4}
        borderRadius={8}
        {...rest}
      />
      {/* <FormErrorMessage>{}</FormErrorMessage> */}
    </FormControl>
  );
};
