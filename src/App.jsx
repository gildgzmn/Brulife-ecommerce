import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PromoBannerWrapper from './components/PromoBannerWrapper';
import AllProducts from './pages/AllProductsPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import WomenPage from './pages/WomenPage';
import SalePage from './pages/SalePage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
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
import KidsShoesPage from './pages/KidsShoesPage';
import SnacksPage from './pages/SnacksPage';
import BreakFastPage from './pages/BreakFastPage';
import LunchPage from './pages/LunchPage';
import DinnerPage from './pages/DinnerPage';
import BeveragesPage from './pages/BeveragesPage';
import CoffeePage from './pages/CoffeePage';
import AlcoholPage from './pages/AlcoholPage';
import JuicePage from './pages/JuicePage';
import ShakePage from './pages/ShakePage';
import BabiesKidsPage from './pages/BabiesKidsPage';
import NewbornPage from './pages/NewbornPage';
import LetterPage from './pages/LetterPage';
import ToddlerPage from './pages/ToddlerPage';
import PreSchoolPage from './pages/PreSchoolPage';
import BooksPage from './pages/BooksPage';
import RomancePage from './pages/RomancePage';
import ActionPage from './pages/ActionPage';
import NonFictionPage from './pages/NonFictionPage';
import YoungAdultPage from './pages/YoungAdultPage';
import CrimePage from './pages/CrimePage';
import AudioBooksPage from './pages/AudioBooksPage';
import MysteryPage from './pages/MysteryPage';
import HorrorPage from './pages/HorrorPage';
import PetCarePage from './pages/PetCarePage';
import Perfume1 from './pages/proddetpage/Perfume1ProdPage';
import Chocolate1 from './pages/proddetpage/Chocolate1ProdPage';
import Shoes1 from './pages/proddetpage/Shoes1ProdPage';
import Shoes2 from './pages/proddetpage/Shoes2ProdPage';
import Beverages1 from './pages/proddetpage/Beverages1ProdPage';
import Snacks1 from './pages/proddetpage/Snacks1ProdPage';
import Gadgets1 from './pages/proddetpage/Gadgets1ProdPage';
import Gadgets2 from './pages/proddetpage/Gadgets2ProdPage';
import Books1 from './pages/proddetpage/Books1ProdPage';
import PetCare1 from './pages/proddetpage/PetCare1ProdPage';
import Kids1 from './pages/proddetpage/Kids1ProdPage';
import Kids2 from './pages/proddetpage/Kids2ProdPage';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <PromoBannerWrapper />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
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
          <Route path="/kidsshoes" element={<KidsShoesPage />} />
          <Route path="/snacks" element={<SnacksPage />} />
          <Route path="/breakfast" element={<BreakFastPage />} />
          <Route path="/lunch" element={<LunchPage />} />
          <Route path="/dinner" element={<DinnerPage />} />
          <Route path="/beverages" element={<BeveragesPage />} />
          <Route path="/coffee" element={<CoffeePage />} />
          <Route path="/alcohol" element={<AlcoholPage />} />
          <Route path="/juice" element={<JuicePage />} />
          <Route path="/shake" element={<ShakePage />} />
          <Route path="/babies-kids" element={<BabiesKidsPage />} />
          <Route path="/newborn" element={<NewbornPage />} />
          <Route path="/letter" element={<LetterPage />} />
          <Route path="/toddler" element={<ToddlerPage />} />
          <Route path="/pre-school" element={<PreSchoolPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/romance" element={<RomancePage />} />
          <Route path="/action" element={<ActionPage />} />
          <Route path="/non-fiction" element={<NonFictionPage />} />
          <Route path="/young-adult" element={<YoungAdultPage />} />
          <Route path="/crime" element={<CrimePage />} />
          <Route path="/audio-books" element={<AudioBooksPage />} />
          <Route path="/mystery" element={<MysteryPage />} />
          <Route path="/horror" element={<HorrorPage />} />
          <Route path="/pet-care" element={<PetCarePage />} />
          <Route path="/perfume1" element={<Perfume1 />} />
          <Route path="/chocolate1" element={<Chocolate1 />} />
          <Route path="/shoes1" element={<Shoes1 />} />
          <Route path="/shoes2" element={<Shoes2 />} />
          <Route path="/beverages1" element={<Beverages1 />} />
          <Route path="/snacks1" element={<Snacks1 />} />
          <Route path="/gadgets1" element={<Gadgets1 />} />
          <Route path="/gadgets2" element={<Gadgets2 />} />
          <Route path="/books1" element={<Books1 />} />
          <Route path="/petcare1" element={<PetCare1 />} />
          <Route path="/kids1" element={<Kids1 />} />
          <Route path="/kids2" element={<Kids2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
