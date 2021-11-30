// import { hot } from 'react-hot-loader/root';
import './app.scss';
import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';

import { Spin } from 'antd';
import DashboardLayout from './components/templates/dashboard-layout';
import React, { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/home'));
const AboutPage = lazy(() => import('./pages/about'));

const App: React.FC = () => {
  return (
    <DashboardLayout>
      <Suspense fallback={<Spin />}>
        <Routes>
          <Route element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </DashboardLayout>
  );
};

export default App;
