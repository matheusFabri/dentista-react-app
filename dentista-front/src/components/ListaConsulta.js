import React from 'react';
import { Divider, List, Typography } from 'antd';
import CardConsulta from './CardConsulta';
import { useGetConsultasAuth } from '../service/queries/consulta';
import { Colors } from '../global/Colors';

const ListaConsulta = () => {
  const { data, isLoading } = useGetConsultasAuth();
  return (
    <>
      <div
        style={{ display: 'flex', paddingLeft: '42%', color: Colors.primary }}
      >
        <h1 style={{ fontSize: 32 }}>Consultas</h1>
      </div>
      <List
        size="small"
        bordered
        dataSource={data}
        renderItem={(item) => (
          <CardConsulta key={item.id} item={item} loading={isLoading} />
        )}
      />
    </>
  );
};
export default ListaConsulta;
