import { Button, Form, Input } from 'antd';
import React, { useContext } from 'react';
import { Colors } from '../global/Colors';
import { useNavigate } from 'react-router-dom';
import { usePostPaciente } from '../service/queries/paciente';
import { GlobalContext } from '../store/GlobalContext';

function Cadastro() {
  const navigate = useNavigate();
  const { mutate } = usePostPaciente();
  const { paciente, setPaciente } = useContext(GlobalContext);

  const handleCadastro = () => {
    mutate(paciente);
    navigate('/');
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: Colors.secondary,
          width: '100vw',
          height: '100vh',
        }}
      >
        <Form
          name="basic"
          labelCol={{}}
          wrapperCol={{}}
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '50%',
            alignItems: 'stretch',
            backgroundColor: Colors.primaryBackground,
            borderRadius: 5,
            width: '50%',
            padding: '3%',
            margin: '5%',
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
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
              value={paciente.nome}
              onChange={(e) =>
                setPaciente({ ...paciente, nome: e.target.value })
              }
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
              value={paciente.email}
              onChange={(e) =>
                setPaciente({ ...paciente, email: e.target.value })
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
              value={paciente.login}
              onChange={(e) =>
                setPaciente({ ...paciente, login: e.target.value })
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
              value={paciente.senha}
              onChange={(e) =>
                setPaciente({ ...paciente, senha: e.target.value })
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
              value={paciente.telefone}
              onChange={(e) =>
                setPaciente({ ...paciente, telefone: e.target.value })
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
              value={paciente.cpf}
              onChange={(e) =>
                setPaciente({ ...paciente, cpf: e.target.value })
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
              value={paciente.dataNasc}
              onChange={(e) =>
                setPaciente({ ...paciente, dataNasc: e.target.value })
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
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Cadastro;
