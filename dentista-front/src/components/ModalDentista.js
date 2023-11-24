import React, { useContext, useState } from 'react';
import { Button, List, Modal } from 'antd';
import { useGetDentistasAuth } from '../service/queries/dentista';
import CardDentistaBasic from './CardDentistaBasic';
import { GlobalContext } from '../store/GlobalContext';

const ModalDentista = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetDentistasAuth();
  const { dentistaConsulta, setDentistaConsulta } = useContext(GlobalContext);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClick = (item) => {
    setDentistaConsulta({ item });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Selecionar Dentista
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {!isLoading && (
          <List
            size="small"
            bordered
            dataSource={data}
            renderItem={(item) => (
              <Button onClick={handleClick(item)}>{item.nome}</Button>
            )}
          />
        )}
      </Modal>
    </>
  );
};

export default ModalDentista;
