import React, { useContext, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { Colors } from '../global/Colors';
import { AuthContext } from '../store/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const itemsPaciente = [
  { label: 'Dashboard', key: 'dashboardPaciente', icon: <PieChartOutlined /> },
  {
    label: 'Consultas',
    key: 'consultasPaciente',
    icon: <PieChartOutlined />,
    children: [
      {
        label: 'Nova Consulta',
        key: 'novaConsultaPaciente',
        icon: <UserOutlined />,
      },
      {
        label: 'Histórico de Consultas',
        key: 'histConsultaPaciente',
        icon: <UserOutlined />,
      },
    ],
  },
  {
    label: 'Logout',
    key: 'logoutPaciente',
    icon: <UserOutlined />,
    danger: true,
  },
];

const itemsAdmin = [
  { label: 'Dashboard', key: 'dashboardAdmin', icon: <PieChartOutlined /> },
  {
    label: 'Consultas',
    key: 'consultasAdmin',
    icon: <PieChartOutlined />,
    children: [
      {
        label: 'Listar Consultas',
        key: 'listConsultaAdmin',
        icon: <UserOutlined />,
      },
    ],
  },
  {
    label: 'Dentistas',
    key: 'dentistasAdmin',
    icon: <PieChartOutlined />,
    children: [
      {
        label: 'Cadastrar Dentista',
        key: 'cadastroDentistaAdmin',
        icon: <UserOutlined />,
      },
      {
        label: 'Listar Dentistas',
        key: 'listDentistaAdmin',
        icon: <UserOutlined />,
      },
    ],
  },
  { label: 'Logout', key: 'logoutAdmin', icon: <UserOutlined />, danger: true },
];

const itemsDentista = [
  { label: 'Dashboard', key: 'dashboardDentista', icon: <PieChartOutlined /> },
  {
    label: 'Consultas',
    key: 'consultasDentista',
    icon: <PieChartOutlined />,
    children: [
      {
        label: 'Lista de Consultas',
        key: 'listConsultaDentista',
        icon: <UserOutlined />,
      },
    ],
  },
  {
    label: 'Logout',
    key: 'logoutDentista',
    icon: <UserOutlined />,
    danger: true,
  },
];

const Home = () => {
  const { userLogged, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log(e.key);
    if (
      e.key === 'logoutPaciente' ||
      e.key === 'logoutAdmin' ||
      e.key === 'logoutDentista'
    ) {
      handleLogout();
    }
    if (e.key === 'cadastroDentistaAdmin') {
      navigate('/cadastroDentista');
    }
  };
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        width="18%"
        style={{
          paddingTop: 20,
          display: 'flex',
          // alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        {userLogged.role === 'Paciente' && (
          <Menu
            theme="dark"
            mode="inline"
            items={itemsPaciente}
            onClick={handleClick}
          ></Menu>
        )}
        {userLogged.role === 'Admin' && (
          <Menu
            theme="dark"
            mode="inline"
            items={itemsAdmin}
            onClick={handleClick}
          ></Menu>
        )}
        {userLogged.role === 'Dentista' && (
          <Menu
            theme="dark"
            mode="inline"
            items={itemsDentista}
            onClick={handleClick}
          ></Menu>
        )}
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 10,
            background: Colors.primaryBackground,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <div
            style={{ fontSize: 32, fontWeight: 'bold', color: Colors.primary }}
          >
            Olá, {userLogged.nome}
          </div>
        </Header>
        <Content
          style={
            {
              // margin: '0 16px',
            }
          }
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              padding: 24,
              minHeight: '100%',
              background: Colors.primaryBackground,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
