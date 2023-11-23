import React from 'react';
import { Button, Card } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useDeleteDentistaAuth } from '../service/queries/dentista';
import { useNavigate } from 'react-router-dom';

const CardDentista = ({ item, loading }) => {
  const { mutate } = useDeleteDentistaAuth();
  const navigate = useNavigate();

  const handleDelete = () => {
    mutate(item.id);
  };

  const handlePut = () => {
    navigate(`/alteraDentista/${item.id}`);
  };

  return (
    <Card
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
export default CardDentista;
