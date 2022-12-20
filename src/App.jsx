import './App.css';
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import Footer from './components/Footer.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Cart from './components/Cart';
import CartContextProvider from './context/CartContext';


function App() {
  return (
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <div className="container container-generico">
              <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/category/:categoryID" element={ <ItemListContainer/>} />
                    <Route path="/item/:itemID" element={<ItemDetailContainer/>} />
                    <Route path="/cart" element={<Cart/>} />
              </Routes>
            </div>
            <Footer/>
            </BrowserRouter>
          </CartContextProvider>
  );
}

export default App;
