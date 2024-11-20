import HomePage from "./components/homePage/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import MarcetPage from "./components/marcetPage/MarcetPage";
import ContactsPage from "./components/contactsPage/ContactsPage";
import PageNotFound from "./components/page 404/404";
import ProductDetails from "./components/productDetails/ProductDetails";
import Cart from "./components/cart/CartPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marcet" element={<MarcetPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/products/:productId" element={<ProductDetails/>}/>
          <Route path="/*" element={<PageNotFound />}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
