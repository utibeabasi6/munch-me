import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import Productspage from './pages/Productspage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { CartContext, getTotalItemsInCart } from './components/Cart';
import { useMemo, useState } from 'react';
import { Background } from './components/Background';

function App() {
  const [value, setvalue] = useState(getTotalItemsInCart())
  const cartQuantity = useMemo(() => ({ value, setvalue }), [value, setvalue])
  return (
    <CartContext.Provider value={cartQuantity}>
      <Background>
      <Router>
        <Route exact path='/'><Homepage /></Route>
        <Route exact path='/cart'><Cartpage /></Route>
        <Route exact path='/cakes'><Productspage /></Route>
        <Route exact path='/cakes/:id'><ProductDetailsPage /></Route>
      </Router></Background>
    </CartContext.Provider>
  );
}

export default App;
