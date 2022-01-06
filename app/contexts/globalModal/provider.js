import {
  useReducer,
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useToast } from '@chakra-ui/react';
import ConfigModal from '@/components/templates/ConfigModal';
import {
  createDatabase,
  deleteData,
  updateData,
} from 'app/services/defaultService';
import DeleteModal from '@/components/common/RemoveModal';

export const MODAL_TYPES = {
  CREATE_MODAL: 'CREATE_MODAL',
  DELETE_MODAL: 'DELETE_MODAL',
  //  UPDATE_MODAL: “UPDATE_MODAL”
};

const MODAL_COMPONENTS = {
  [MODAL_TYPES.CREATE_MODAL]: ConfigModal,
  [MODAL_TYPES.DELETE_MODAL]: DeleteModal,
  //  [MODAL_TYPES.UPDATE_MODAL]: UpdateModal
};

const initalState = {
  showModal: () => {},
  hideModal: () => {},
  store: {},
  openCreateModal: false,
  setOpenCreateModal: () => {},
  handleOpenCreateModal: () => {},
  handleCloseCreateModal: () => {},
};

const GlobalModalContext = createContext(initalState);

export function GlobalModalProvider({ children }) {
  const toast = useToast();

  const [openCreateModal, setOpenCreateModal] = useState(false);

  const [store, setStore] = useState({});
  const [form, setForm] = useState({});

  const { modalType, modalProps } = store || {};

  const showModal = (modalType, modalProps) => {
    setStore({
      ...store,
      modalType,
      modalProps,
    });
  };

  const hideModal = () => {
    setStore({
      ...store,
      modalType: null,
      modalProps: {},
    });
    setForm({});
  };

  const handleInputs = (field, value) => {
    // console.log('field, value :', field, value);
    setForm({
      ...form,
      [field]: value,
    });
    // console.log('form', form);
  };

  const handleConfirm = async () => {
    const { form, modalType, modalProps } = store;
    const { contextRef, service } = modalProps;

    const response = await confirmActionButton(modalType);
    contextRef.refreshData(service);

    return response;
  };

  const deleteConfirm = async () => {
    const response = await deleteData(modalProps.service, form.id);
    hideModal();
    return response;
  };

  const createConfirm = async () => {
    try {
      let response = {};
      if (form.id) {
        response = await updateData(modalProps.service, form);
      } else {
        response = await createDatabase(modalProps.service, form);
      }
      hideModal();
      return response;
    } catch {
      toast({
        description: 'Error while creating data.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const confirmActionButton = (type) => {
    switch (type) {
      case MODAL_TYPES.CREATE_MODAL:
        return createConfirm();
      case MODAL_TYPES.DELETE_MODAL:
        return deleteConfirm();
    }
  };

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType];
    if (!modalType || !ModalComponent) {
      return null;
    }
    return <ModalComponent id="global-modal" {...modalProps} />;
  };

  return (
    <GlobalModalContext.Provider
      value={{
        openCreateModal,
        showModal,
        hideModal,
        store,
        setOpenCreateModal,
        setForm,
        handleInputs,
        form,
        handleConfirm,
      }}
    >
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
}

export function useGlobalModal() {
  const context = useContext(GlobalModalContext);

  return context;
}
