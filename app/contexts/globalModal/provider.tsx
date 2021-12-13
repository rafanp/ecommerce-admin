import {
  useReducer,
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useToast } from "@chakra-ui/react";
import ConfigModal from "@/components/templates/ConfigModal";
import { api } from "app/services/api";
import { v4 as uuidv4 } from "uuid";
import {
  createDatabase,
  deleteData,
  updateData,
} from "app/services/defaultService";
import DeleteModal from "@/components/templates/RemoveModal";

export const MODAL_TYPES = {
  CREATE_MODAL: "CREATE_MODAL",
  DELETE_MODAL: "DELETE_MODAL",
  //  UPDATE_MODAL: “UPDATE_MODAL”
};

const MODAL_COMPONENTS = {
  [MODAL_TYPES.CREATE_MODAL]: ConfigModal,
  [MODAL_TYPES.DELETE_MODAL]: DeleteModal,
  //  [MODAL_TYPES.UPDATE_MODAL]: UpdateModal
};

type GlobalModalContext = {
  showModal: (modalType: string, modalProps?: any) => void;
  hideModal: () => void;
  store: any;
  openCreateModal: boolean;
  setOpenCreateModal: () => void;
  handleOpenCreateModal: () => void;
  handleCloseCreateModal: () => void;
};

const initalState: GlobalModalContext = {
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

  const showModal = (modalType, modalProps, form = {}) => {
    console.log("modalProps :", modalProps);
    console.log("modalType :", modalType);
    setStore({
      ...store,
      modalType,
      modalProps,
      form,
    });
  };

  const hideModal = () => {
    setStore({
      ...store,
      modalType: null,
      modalProps: {},
      form: {},
    });
  };

  const handleInputs = (field: string, value: string) => {
    setStore({
      ...store,
      form: {
        ...store.form,
        [field]: value,
      },
    });
  };

  const handleOpenCreateModal = () => {
    console.log("handleOpenCreateModal :");
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  const handleConfirm = async () => {
    const { form, modalType } = store;

    console.log("modalType :", modalType);

    const response = await confirmActions(modalType);
    console.log("response :", response);
  };

  const deleteConfirm = async () => {
    // const { form } = store;
    console.log("form :", form);
    // console.log("delete modal called");
    return await deleteData(modalProps.service, form.id);
  };

  const createConfirm = async () => {
    const { form } = store;
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
        description: "Error while creating data.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const confirmActions = (type) => {
    switch (type) {
      case MODAL_TYPES.CREATE_MODAL:
        return createConfirm();
      case MODAL_TYPES.DELETE_MODAL:
        return deleteConfirm();
    }
  };
  // const confirmActions = {
  //   CREATE_MODAL: createConfirm(),
  //   DELETE_MODAL: deleteConfirm(),
  // };

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType];
    if (!modalType || !ModalComponent) {
      return null;
    }
    // return <ConfigModal />;
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
        handleOpenCreateModal,
        handleCloseCreateModal,
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
