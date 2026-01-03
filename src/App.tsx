import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthCallback from "./pages/AuthCallback";
import Checkout from "./pages/Checkout";
import OrderHistory from "./pages/OrderHistory";
import HelpCenter from "./pages/HelpCenter";
import Returns from "./pages/Returns";
import ShippingInfo from "./pages/ShippingInfo";
import TrackOrder from "./pages/TrackOrder";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import NotFound from "./pages/NotFound";

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/products" element={<ProductListing />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/auth/callback" element={<AuthCallback />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/order-history" element={<OrderHistory />} />
    <Route path="/help-center" element={<HelpCenter />} />
    <Route path="/returns" element={<Returns />} />
    <Route path="/shipping-info" element={<ShippingInfo />} />
    <Route path="/track-order" element={<TrackOrder />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-of-service" element={<TermsOfService />} />
    <Route path="/cookies-policy" element={<CookiesPolicy />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
