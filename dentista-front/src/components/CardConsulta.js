import React from 'react';
import { Card } from 'antd';

const CardConsulta = ({ item, loading }) => {
  return (
    <Card
      loading={loading}
      title={`Hora Consulta: ${item.horaConsulta}`}
      bordered={false}
      style={{ margin: 10 }}
    >
      <div style={{ display: 'flex' }}>
        <p>Data: {item.dataConsulta}</p>
      </div>
      <div style={{ display: 'flex' }}>
        <p>Paciente: {item.paciente.nome}</p>
      </div>
      <div style={{ display: 'flex' }}>
        <p>Dentista: {item.dentista.nome}</p>
      </div>
    </Card>
  );
};
export default CardConsulta;
