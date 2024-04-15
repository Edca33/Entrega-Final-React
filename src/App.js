import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/cart/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/checkout/Checkout';
function App() {

  return (
    <CartProvider> 
    <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting="Welcome"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<h2>404: No existe</h2>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
