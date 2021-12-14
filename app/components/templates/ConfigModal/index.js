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

const ConfigModal = ({ title, inputs }) => {
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
        <Content inputs={inputs} />
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

const Content = ({ inputs }) => {
  const { handleInputs, store, form } = useGlobalModal();
  console.log('form :', form);
  // Change to Formik
  return (
    <ModalBody>
      <Stack>
        {inputs.map((field, index) => {
          return (
            <FormInput
              key={index}
              text={field}
              onChange={(e) => {
                handleInputs(field, e.target.value);
              }}
              value={form[field]}
            />
          );
        })}
      </Stack>
    </ModalBody>
  );
};

const FormInput = ({ text, ...rest }) => {
  return (
    <FormControl>
      <FormLabel textTransform="capitalize">{text}</FormLabel>
      <Input
        // placeholder={"Add new item"}
        bg={'white'}
        mr={4}
        borderRadius={8}
        {...rest}
      />
      {/* <FormErrorMessage>{}</FormErrorMessage> */}
    </FormControl>
  );
};
