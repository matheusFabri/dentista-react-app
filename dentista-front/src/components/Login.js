import React, { useContext, useState } from 'react';
import { Alert, Button, Form, Image, Input } from 'antd';
import { Colors } from '../global/Colors';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';
import Odonto from '../assets/imgs/odonto.png';

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser, login, limpaUser } = useContext(AuthContext);
  const [alert, setAlert] = useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleNewUser = () => {
    navigate('/cadastro');
  };

  const handleLogin = async () => {
    if (user.login !== '' || user.password !== '') {
      if (await login()) {
        navigate('/');
        setAlert(false);
        limpaUser();
      } else {
        setAlert(true);
      }
    }
  };

  return (
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
      {alert && (
        <Alert
          style={{ marginTop: 20 }}
          message="Usuário não cadastrado!"
          type="error"
        />
      )}
      <Form
        name="basic"
        labelCol={{}}
        wrapperCol={{}}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // justifyItems: 'stretch',
          // justifyContent: 'stretch',
          backgroundColor: Colors.primaryBackground,
          borderRadius: 5,
          width: '50%',
          padding: 20,
          margin: '5%',
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item>
          <Image width={250} src={Odonto} />
        </Form.Item>
        <Form.Item
          label="Login"
          name="username"
          rules={[
            {
              required: true,
              message: 'Login inválido!',
            },
          ]}
        >
          <Input
            value={user.login}
            onChange={(e) => setUser({ ...user, login: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          label="Senha"
          name="password"
          rules={[
            {
              required: true,
              message: 'Senha inválida!',
            },
          ]}
        >
          <Input.Password
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Item>

        <Form.Item wrapperCol={{}}>
          <Button
            style={{
              margin: 10,
              width: '100%',
            }}
            type="primary"
            htmlType="submit"
            onClick={handleLogin}
          >
            Entrar
          </Button>
          <Button
            style={{ margin: 10, width: '100%' }}
            type="primary"
            htmlType="submit"
            onClick={handleNewUser}
          >
            Novo usuário
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
