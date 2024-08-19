import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantList from './components/Company/RestaurantList';
import CompanyDetails from './pages/CompanyDetails';
import Admin from './pages/Admin';
import Login from './components/Auth/Login';
import RestaurantCatalog from './components/Company/RestaurantCatalog';
import AllRestaurants from './components/Company/AllRestaurants';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/restaurants/all" element={<AllRestaurants />} />
        <Route path="/restaurants/:restaurantId/products" element={<RestaurantCatalog />} /> 
        <Route path="/companies/:companyId" element={<CompanyDetails companyId={''} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
