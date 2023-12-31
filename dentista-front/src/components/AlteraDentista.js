import { Button, Form, Input } from 'antd';
import React, { useContext, useState } from 'react';
import { Colors } from '../global/Colors';
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../store/GlobalContext';
import {
  useGetDentistaByIdAuth,
  usePutDentistaAuth,
} from '../service/queries/dentista';

function AlteraDentista() {
  const navigate = useNavigate();
  const { mutate } = usePutDentistaAuth();
  const { dentista, setDentista } = useContext(GlobalContext);

  let { id } = useParams();

  const handleCadastro = () => {
    // setDentista({ ...dentista, id: id });
    mutate({ dentista: dentista, id: id });
    navigate('/listaDentista');
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
          <Form.Item>
            <p
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: Colors.primary,
              }}
            >
              Alterar Dentista
            </p>
          </Form.Item>
          <Form.Item
            label="Nome"
            name="nome"
            rules={[
              {
                // required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              value={dentista.nome}
              onChange={(e) => {
                setDentista({ ...dentista, nome: e.target.value, id: id });
              }}
            />
          </Form.Item>

          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                // required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              value={dentista.email}
              onChange={(e) =>
                setDentista({ ...dentista, email: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Login"
            name="login"
            rules={[
              {
                // required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              value={dentista.login}
              onChange={(e) =>
                setDentista({ ...dentista, login: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Senha"
            name="senha"
            rules={[
              {
                // required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password
              value={dentista.senha}
              onChange={(e) =>
                setDentista({ ...dentista, senha: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Telefone"
            name="telefone"
            rules={[
              {
                // required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              value={dentista.telefone}
              onChange={(e) =>
                setDentista({ ...dentista, telefone: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="CPF"
            name="cpf"
            rules={[
              {
                // required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              value={dentista.cpf}
              onChange={(e) =>
                setDentista({ ...dentista, cpf: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Data de nascimento"
            name="dataNasc"
            rules={[
              {
                // required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              value={dentista.dataNasc}
              onChange={(e) =>
                setDentista({ ...dentista, dataNasc: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item wrapperCol={{}}>
            <Button
              style={{ margin: 10, width: '40%' }}
              type="primary"
              htmlType="submit"
              onClick={handleCadastro}
            >
              Alterar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default AlteraDentista;
