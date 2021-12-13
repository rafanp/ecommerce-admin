import { TaskProvider, useTasks } from 'app/contexts/tasks/provider';

import { useCallback, useEffect } from 'react';
import Table from '@/components/templates/Tables/tables';
import { MODAL_TYPES, useGlobalModal } from 'app/contexts/globalModal/provider';

const ConfigTables = ({ table, modalConfig, serviceName, contextRef }) => {
  console.log('contextRef :', contextRef);
  const qwe = useTasks();

  const { todoList, refreshData } = contextRef;

  const { showModal, setForm } = useGlobalModal();

  const loadData = useCallback(async () => {
    if (!todoList.length) {
      await refreshData();
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleAdd = () => {
    showModal(MODAL_TYPES.CREATE_MODAL, {
      title: modalConfig.createTitle || 'Create',
      inputs: modalConfig.inputs,
      //   confirmBtn: 'Save',
      service: serviceName,
    });
  };

  const handleEdit = (form) => {
    setForm(form);

    showModal(MODAL_TYPES.CREATE_MODAL, {
      title: modalConfig.editTitle || 'Edit',
      inputs: ['name'],
      //   confirmBtn: 'Save',
      service: serviceName,
    });
  };

  const handleRemove = (form) => {
    showModal(MODAL_TYPES.DELETE_MODAL, {
      title: modalConfig.deleteTitle,
      description: 'Are you sure you want delete this item?',
      service: serviceName,
    });
    setForm(form);
  };

  return (
    <Table
      title={table.title}
      columns={table.columns}
      data={todoList}
      handleAdd={handleAdd}
      handleEdit={handleEdit}
      handleRemove={handleRemove}
    />
  );
};

export default ConfigTables;
