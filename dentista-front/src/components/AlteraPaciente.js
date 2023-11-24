import { Button, Form, Input } from 'antd';
import React, { useContext, useState } from 'react';
import { Colors } from '../global/Colors';
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../store/GlobalContext';
import { usePutPacienteAuth } from '../service/queries/paciente';

function AlteraPaciente() {
  const navigate = useNavigate();
  const { mutate } = usePutPacienteAuth();
  const { pacientePut, setPacientePut } = useContext(GlobalContext);

  let { id } = useParams();

  const handleCadastro = () => {
    mutate({ paciente: pacientePut, id: id });
    navigate('/listaPaciente');
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
              Alterar Paciente
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
              value={pacientePut.nome}
              onChange={(e) => {
                setPacientePut({
                  ...pacientePut,
                  nome: e.target.value,
                  id: id,
                });
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
              value={pacientePut.email}
              onChange={(e) =>
                setPacientePut({ ...pacientePut, email: e.target.value })
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
              value={pacientePut.login}
              onChange={(e) =>
                setPacientePut({ ...pacientePut, login: e.target.value })
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
              value={pacientePut.senha}
              onChange={(e) =>
                setPacientePut({ ...pacientePut, senha: e.target.value })
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
              value={pacientePut.telefone}
              onChange={(e) =>
                setPacientePut({ ...pacientePut, telefone: e.target.value })
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
              value={pacientePut.cpf}
              onChange={(e) =>
                setPacientePut({ ...pacientePut, cpf: e.target.value })
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
              value={pacientePut.dataNasc}
              onChange={(e) =>
                setPacientePut({ ...pacientePut, dataNasc: e.target.value })
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

export default AlteraPaciente;
