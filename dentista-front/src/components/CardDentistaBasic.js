import React, { useContext } from 'react';
import { Button, Card } from 'antd';
import { useDeleteDentistaAuth } from '../service/queries/dentista';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../store/GlobalContext';

const CardDentista = ({ item }) => {
  const { dentistaConsulta, setDentistaConsulta } = useContext(GlobalContext);

  return (
    // <Card
    //   key={item.id}
    //   loading={loading}
    //   title={item.nome}
    //   bordered
    //   style={{ margin: 10 }}
    //   onClick={setDentistaConsulta({ ...dentistaConsulta, item })}
    // ></Card>
    <Button onClick={setDentistaConsulta({ ...dentistaConsulta, item })}>
      {item.nome}
    </Button>
  );
};
export default CardDentista;
