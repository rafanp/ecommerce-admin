import { TaskProvider, useTasks } from 'app/contexts/tasks/provider';

import { useCallback, useEffect } from 'react';
import Table from '@/components/common/Tables/tables';
import { MODAL_TYPES, useGlobalModal } from 'app/contexts/globalModal/provider';

const ConfigTables = ({ table, modalConfig, serviceName, contextRef }) => {
  const { todoList, refreshData, loading } = contextRef;

  const { showModal, setForm } = useGlobalModal();

  const loadData = useCallback(async () => {
    if (!todoList.length) {
      await refreshData(serviceName);
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

    showModal(MODAL_TYPES.CREAtTE_MODAL, {
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
      loading={loading}
      handleAdd={handleAdd}
      handleEdit={handleEdit}
      handleRemove={handleRemove}
    />
  );
};

export default ConfigTables;
