import React from 'react';
import { Card, Col, Row } from 'antd';
import { useGetDashboardAuth } from '../service/queries/dashboard';
import { Colors } from '../global/Colors';
import { CChart } from '@coreui/react-chartjs';

const Dashboard = () => {
  const { data, isLoading } = useGetDashboardAuth();

  return (
    <Card style={{ margin: 20 }}>
      {!isLoading && (
        <CChart
          type="bar"
          data={{
            labels: data.meses,
            datasets: [
              {
                label: 'Consultas por mês',
                backgroundColor: Colors.primary,
                data: data.qtdPorMes,
              },
            ],
          }}
          labels="months"
          options={{
            plugins: {
              legend: {
                labels: {
                  color: Colors.primary,
                },
              },
            },
            scales: {
              x: {
                grid: {
                  color: Colors.primary,
                },
                ticks: {
                  color: Colors.primary,
                },
              },
              y: {
                grid: {
                  color: Colors.primary,
                },
                ticks: {
                  color: Colors.primary,
                },
              },
            },
          }}
        />
      )}
    </Card>
  );
};
export default Dashboard;
