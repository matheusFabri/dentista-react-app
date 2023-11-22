import { Button, Form, Input } from 'antd';
import React from 'react';
import { Colors } from '../global/Colors';
import { useNavigate } from 'react-router-dom';

function Root() {
  const navigation = useNavigate();
  const handleLogin = () => {
    navigation('login');
  };

  const handleCadastro = () => {
    navigation('cadastro');
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
          {/* <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
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
          <Input.Password />
        </Form.Item> */}

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
              Login
            </Button>
            <Button
              style={{ margin: 10, width: '100%' }}
              type="primary"
              htmlType="submit"
              onClick={handleCadastro}
            >
              Novo usuário
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Root;
