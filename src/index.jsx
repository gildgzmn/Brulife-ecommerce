import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import WomenPage from './pages/WomenPage';
import SalePage from './pages/SalePage';
import AboutPage from './pages/AboutPage';
import AccountSecPage from './pages/AccountSecPage';
import FaqPage from './pages/FaqPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import VouchersPage from './pages/VouchersPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PerfumePage from './pages/PerfumePage';
import ChocolatePage from './pages/ChocolatePage';
import GadgetsPage from './pages/GadgetsPage';
import ShoesPage from './pages/ShoesPage';
import WomenShoesPage from './pages/WomenShoesPage';
import MenShoesPage from './pages/MenShoesPage';
import KidsShoesPage from './pages/KidsShoesPage';
import SnacksPage from './pages/SnacksPage';
import BeveragesPage from './pages/BeveragesPage';
import BabiesKidsPage from './pages/BabiesKidsPage';
import BooksPage from './pages/BooksPage';
import PetCarePage from './pages/PetCarePage';

import Perfume1 from './pages/proddetpage/Perfume1ProdPage';

import Chocolate1 from './pages/proddetpage/Chocolate1ProdPage';

import Shoes1 from './pages/proddetpage/Shoes1ProdPage';
import Shoes2 from './pages/proddetpage/Shoes2ProdPage';

import Beverages1 from './pages/proddetpage/Beverages1ProdPage';

import Snacks1 from './pages/proddetpage/Snacks1ProdPage';

import Gadgets1 from './pages/proddetpage/Gadgets1ProdPage';

import Books1 from './pages/proddetpage/Books1ProdPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/accountsec" element={<AccountSecPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/orderhistory" element={<OrderHistoryPage />} />
        <Route path="/vouchers" element={<VouchersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/perfume" element={<PerfumePage />} />
        <Route path="/chocolate" element={<ChocolatePage />} />
        <Route path="/gadgets" element={<GadgetsPage />} />
        <Route path="/shoes" element={<ShoesPage />} />
        <Route path="/womenshoes" element={<WomenShoesPage />} />
        <Route path="/menshoes" element={<MenShoesPage />} />
        <Route path="/kidsshoes" element={<KidsShoesPage />} />
        <Route path="/snacks" element={<SnacksPage />} />
        <Route path="/beverages" element={<BeveragesPage />} />
        <Route path="/babies-kids" element={<BabiesKidsPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/pet-care" element={<PetCarePage />} />

        <Route path="/perfume1" element={<Perfume1 />} />

        <Route path="/chocolate1" element={<Chocolate1 />} />

        <Route path="/shoes1" element={<Shoes1 />} />
        <Route path="/shoes2" element={<Shoes2 />} />

        <Route path="/beverages1" element={<Beverages1 />} />

        <Route path="/snacks1" element={<Snacks1 />} />

        <Route path="/gadgets1" element={<Gadgets1 />} />

        <Route path="/books1" element={<Books1 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
