import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Common/Layout';
import Home from './pages/Home';
import Works from './pages/Works';
const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<Works />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};
export default App;
