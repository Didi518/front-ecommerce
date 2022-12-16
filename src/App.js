import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndConditions from './pages/TermAndConditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/boutique" element={<OurStore />} />
            <Route path="/article/:id" element={<SingleProduct />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/panier" element={<Cart />} />
            <Route path="/facture" element={<Checkout />} />
            <Route path="/comparer" element={<CompareProduct />} />
            <Route path="/favoris" element={<Wishlist />} />
            <Route path="/connexion" element={<Login />} />
            <Route path="/changer-mdp" element={<ForgotPassword />} />
            <Route path="/inscription" element={<Signup />} />
            <Route path="/nouveau-mdp" element={<ResetPassword />} />
            <Route
              path="/politique-confidentialite"
              element={<PrivacyPolicy />}
            />
            <Route path="/politique-remboursement" element={<RefundPolicy />} />
            <Route path="/politique-livraison" element={<ShippingPolicy />} />
            <Route
              path="/conditions-generales"
              element={<TermAndConditions />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
