import React, { useContext } from 'react';
import { Divider, List, Typography } from 'antd';
import CardConsulta from './CardConsulta';
import { useGetConsultasAuth } from '../service/queries/consulta';
import { Colors } from '../global/Colors';
import { useGetConsultaByPacienteIdAuth } from '../service/queries/paciente';
import { AuthContext } from '../store/AuthContext';

const ListaConsulta = () => {
  const { userLogged } = useContext(AuthContext);
  const { data: allConsultas, isLoadingCs } = useGetConsultasAuth();
  const { data: pacienteConsultas, isLoadingPc } =
    useGetConsultaByPacienteIdAuth(userLogged.id);
  return (
    <>
      <div
        style={{ display: 'flex', paddingLeft: '42%', color: Colors.primary }}
      >
        <h1 style={{ fontSize: 32 }}>Consultas</h1>
      </div>
      {userLogged.role === 'Paciente' && (
        <List
          size="small"
          bordered
          dataSource={pacienteConsultas}
          renderItem={(item) => (
            <CardConsulta key={item.id} item={item} loading={isLoadingPc} />
          )}
        />
      )}
      {userLogged.role === 'Admin' && (
        <List
          size="small"
          bordered
          dataSource={allConsultas}
          renderItem={(item) => (
            <CardConsulta key={item.id} item={item} loading={isLoadingCs} />
          )}
        />
      )}
      {userLogged.role === 'Dentista' && (
        <List
          size="small"
          bordered
          dataSource={allConsultas}
          renderItem={(item) => (
            <CardConsulta key={item.id} item={item} loading={isLoadingCs} />
          )}
        />
      )}
    </>
  );
};
export default ListaConsulta;
