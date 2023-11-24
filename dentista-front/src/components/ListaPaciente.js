import React, { useEffect, useState } from 'react';
import { Divider, List, Typography } from 'antd';
import CardDentista from './CardDentista';
import { Colors } from '../global/Colors';
import { useGetPacientesAuth } from '../service/queries/paciente';
import CardPaciente from './CardPaciente';

const ListaPaciente = () => {
  const { data, isLoading } = useGetPacientesAuth();
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
        <h1 style={{ fontSize: 32 }}>Pacientes</h1>
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
          dataSource={filtro.length === 0 ? data : filtro}
          renderItem={(item) => (
            <CardPaciente key={item.id} loading={isLoading} item={item} />
          )}
        />
      )}
    </>
  );
};
export default ListaPaciente;
