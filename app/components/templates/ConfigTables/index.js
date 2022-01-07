import { useCallback, useEffect } from 'react';
import Table from '@/components/common/Tables/tables';
import { MODAL_TYPES, useGlobalModal } from 'app/contexts/globalModal/provider';

const ConfigTables = ({ table, modalConfig, serviceName, contextRef }) => {
  const { data, refreshData, loading } = contextRef;

  const { showModal, setForm } = useGlobalModal();

  const loadData = useCallback(async () => {
    if (!data.length) {
      await refreshData(serviceName);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleAdd = () => {
    showModal(MODAL_TYPES.CREATE_MODAL, {
      title: modalConfig.createTitle || 'Create',
      fields: modalConfig.fields,
      service: serviceName,
      contextRef,
    });
  };

  const handleEdit = (form) => {
    setForm(form);

    showModal(MODAL_TYPES.CREATE_MODAL, {
      title: modalConfig.editTitle || 'Edit',
      fields: modalConfig.fields,
      service: serviceName,
      contextRef,
    });
  };

  const handleRemove = (form) => {
    setForm(form);

    showModal(MODAL_TYPES.DELETE_MODAL, {
      title: modalConfig.deleteTitle,
      description: 'Are you sure you want delete this item?',
      service: serviceName,
      contextRef,
    });
  };

  return (
    <Table
      title={table.title}
      columns={table.columns}
      data={data}
      loading={loading}
      handleAdd={handleAdd}
      handleEdit={handleEdit}
      handleRemove={handleRemove}
    />
  );
};

export default ConfigTables;
