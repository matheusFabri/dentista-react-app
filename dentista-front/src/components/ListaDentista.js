import React, { useEffect } from 'react';
import { Divider, List, Typography } from 'antd';
import CardDentista from './CardDentista';
import { useGetDentistasAuth } from '../service/queries/dentista';
import { Colors } from '../global/Colors';

const ListaDentista = () => {
  const { data, isLoading } = useGetDentistasAuth();

  return (
    <>
      <div
        style={{ display: 'flex', paddingLeft: '42%', color: Colors.primary }}
      >
        <h1 style={{ fontSize: 32 }}>Dentistas</h1>
      </div>
      <List
        size="large"
        bordered
        dataSource={data}
        renderItem={(item) => (
          <CardDentista key={item.id} loading={isLoading} item={item} />
        )}
      />
    </>
  );
};
export default ListaDentista;
