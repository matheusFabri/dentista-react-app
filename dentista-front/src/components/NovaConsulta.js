import { Button, Dropdown, Form, Input, Space } from 'antd';
import React, { useContext, useState } from 'react';
import { Colors } from '../global/Colors';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../store/GlobalContext';
import { AuthContext } from '../store/AuthContext';
import { usePostConsultaAuth } from '../service/queries/consulta';
import { useGetDentistasAuth } from '../service/queries/dentista';
import ModalDentista from './ModalDentista';

function NovaConsulta() {
  const navigate = useNavigate();
  const { userLogged } = useContext(AuthContext);
  const { dentistaConsulta, setDentistaConsulta } = useContext(GlobalContext);
  const { mutate } = usePostConsultaAuth();
  const [consulta, setConsulta] = useState({
    paciente: userLogged,
    dentista: dentistaConsulta,
    dataConsulta: '',
    horaConsulta: '',
  });

  const handleCadastro = () => {
    mutate(consulta);
    navigate('/listaConsulta');
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: Colors.secondaryDarkTheme,
          width: '100vw',
          height: '100vh',
          paddingRight: 300,
        }}
      >
        <Form
          name="basic"
          labelCol={{}}
          wrapperCol={{}}
          style={{
            display: 'flex',
            flexDirection: 'column',
            // flexBasis: '50%',
            alignItems: 'stretch',
            backgroundColor: Colors.primaryBackground,
            borderRadius: 5,
            width: '40%',
            padding: '3%',
            margin: '5%',
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Dentista:"
            name="dentista"
            rules={[
              {
                // required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <ModalDentista />
            {/* <Input
              value={consulta.dentista}
              onChange={(e) =>
                setConsulta({ ...consulta, dentista: e.target.value })
              }
            /> */}
          </Form.Item>

          <Form.Item
            label="Data:"
            name="data"
            rules={[
              {
                // required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              value={consulta.dataConsulta}
              onChange={(e) =>
                setConsulta({ ...consulta, dataConsulta: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Hora:"
            name="hora"
            rules={[
              {
                // required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              value={consulta.horaConsulta}
              onChange={(e) =>
                setConsulta({ ...consulta, horaConsulta: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item wrapperCol={{}}>
            <Button
              style={{ margin: 10, width: '50%' }}
              type="primary"
              htmlType="submit"
              onClick={handleCadastro}
            >
              Agendar Consulta
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default NovaConsulta;
