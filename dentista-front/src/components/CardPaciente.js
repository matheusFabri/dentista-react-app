import React, { useContext } from 'react';
import { Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDeletePacienteAuth } from '../service/queries/paciente';

const CardPaciente = ({ item, loading }) => {
  const { mutate } = useDeletePacienteAuth();

  const navigate = useNavigate();

  const handleDelete = () => {
    mutate(item.id);
  };

  const handlePut = () => {
    navigate(`/alteraPaciente/${item.id}`);
  };

  return (
    <Card
      key={item.id}
      loading={loading}
      title={item.nome}
      bordered={false}
      style={{ margin: 10 }}
      extra={[
        <Button style={{ marginRight: 10 }} onClick={handlePut}>
          Alterar
        </Button>,
        <Button onClick={handleDelete} danger={true}>
          Exlcuir
        </Button>,
      ]}
    >
      <div style={{ display: 'flex' }}>
        {/* <PieChartOutlined style={{ margin: 5 }} /> */}
        <p>CPF: {item.cpf}</p>
      </div>
      <div style={{ display: 'flex' }}>
        <p>Telefone: {item.telefone}</p>
      </div>
      <div style={{ display: 'flex' }}>
        <p>Data de Nascimento: {item.dataNasc}</p>
      </div>
    </Card>
  );
};
export default CardPaciente;
