import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemListContainer from './components/ItemList/ItemListContainer/ItemListContainer';
import Header from './components/Header/Header';
import MyOrders from './pages/MyOrders/';
import Cart from './pages/Cart/';
import Checkout from './pages/Checkout/';
import NotFound from './pages/NotFound';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'CATÁLOGO'} />} />
          <Route path='/Collections' element={<ItemListContainer greeting={'CATÁLOGO'} />} />
          <Route path='/category' element={<ItemListContainer greeting={'CATÁLOGO'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'CATÁLOGO'} />} />

          <Route path='/item/:itemId' element={<ItemDetailContainer />} />

          <Route path='/myOrders' element={<MyOrders />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />

          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </CartProvider >
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App