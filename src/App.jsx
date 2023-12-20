import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import Welcome from "./components/Welcome";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import { ShoppingCartProvider } from "./contexts/ShoppingCartProvider";
import { register } from 'swiper/element/bundle';
register()
const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/catalogue" element={<ItemListContainer />} />
            <Route exact path="/category/:category" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
}

export default App;

