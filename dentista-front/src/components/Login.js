import React, { useContext } from 'react';
import { Button, Form, Input } from 'antd';
import { Colors } from '../global/Colors';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser, login } = useContext(AuthContext);

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
    await login();
    navigate('/home');
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
      <Form
        name="basic"
        labelCol={{}}
        wrapperCol={{}}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexBasis: '50%',
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
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input
            value={user.login}
            onChange={(e) => setUser({ ...user, login: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
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
