import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import WomenPage from './pages/WomenPage';
import SalePage from './pages/SalePage';
import AboutPage from './pages/AboutPage';
import AccountSecPage from './pages/AccountSecPage';
import VouchersPage from './pages/VouchersPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import FaqPage from './pages/FaqPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PerfumePage from './pages/PerfumePage';
import ChocolatePage from './pages/ChocolatePage';
import GadgetsPage from './pages/GadgetsPage';
import ShoesPage from './pages/ShoesPage';
import WomenShoesPage from './pages/WomenShoesPage';
import MenShoesPage from './pages/MenShoesPage';
import SnacksPage from './pages/SnacksPage';
import BeveragesPage from './pages/BeveragesPage';
import BabiesKidsPage from './pages/BabiesKidsPage';
import BooksPage from './pages/BooksPage';
import PetCarePage from './pages/PetCarePage';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/accountsec" element={<AccountSecPage />} />
          <Route path="/vouchers" element={<VouchersPage />} />
          <Route path="/orderhistory" element={<OrderHistoryPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/perfume" element={<PerfumePage />} />
          <Route path="/chocolate" element={<ChocolatePage />} />
          <Route path="/gadgets" element={<GadgetsPage />} />
          <Route path="/shoes" element={<ShoesPage />} />
          <Route path="/womenshoes" element={<WomenShoesPage />} />
          <Route path="/menshoes" element={<MenShoesPage />} />
          <Route path="/snacks" element={<SnacksPage />} />
          <Route path="/beverages" element={<BeveragesPage />} />
          <Route path="/babies-kids" element={<BabiesKidsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/pet-care" element={<PetCarePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


