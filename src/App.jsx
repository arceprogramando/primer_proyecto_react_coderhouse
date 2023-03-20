import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Welcome from "./components/Welcome/Welcome";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
const App = () => {
  return (
    <>
      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/catalogue" element={<ItemListContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

