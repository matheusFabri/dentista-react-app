import React, { useEffect, useState } from 'react';
import { Divider, List, Typography } from 'antd';
import CardDentista from './CardDentista';
import { useGetDentistasAuth } from '../service/queries/dentista';
import { Colors } from '../global/Colors';

const ListaDentista = () => {
  const { data, isLoading } = useGetDentistasAuth();
  const [filtro, setFiltro] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  function buscaUsuario(e) {
    setPesquisa(e);

    if (e === '') {
      setFiltro(data);
    } else {
      const pesquisaLowerCase = e.toLowerCase();
      const filtro = data.filter((user) => {
        const nomeLowerCase = user.nome.toLowerCase();
        return nomeLowerCase.includes(pesquisaLowerCase);
      });
      setFiltro(filtro);
    }
  }

  return (
    <>
      <div
        style={{ display: 'flex', paddingLeft: '42%', color: Colors.primary }}
      >
        <h1 style={{ fontSize: 32 }}>Dentistas</h1>
      </div>
      <div style={{ marginLeft: 10 }}>
        <label>Filtro por nome:</label>
        <input
          style={{ marginLeft: 10 }}
          type="text"
          onChange={(e) => buscaUsuario(e.target.value)}
          value={pesquisa}
        />
      </div>
      {!isLoading && (
        <List
          size="large"
          bordered
          dataSource={data}
          renderItem={(item) => (
            <CardDentista key={item.id} loading={isLoading} item={item} />
          )}
        />
      )}
    </>
  );
};
export default ListaDentista;
