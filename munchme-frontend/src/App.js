import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import Productspage from './pages/Productspage';
import SingleProductsPage from './pages/SingleProductsPage';
import { CartContext, getTotalItemsInCart } from './components/Cart';
import { useMemo, useState } from 'react';

function App() {
  const [value, setvalue] = useState(getTotalItemsInCart())
  const cartQuantity = useMemo(() => ({ value, setvalue }), [value, setvalue])
  return (
    <CartContext.Provider value={cartQuantity}>
      <Router>
        <Route exact path='/'><Homepage /></Route>
        <Route exact path='/cart'><Cartpage /></Route>
        <Route exact path='/all'><Productspage /></Route>
        <Route exact path='/view/:id'><SingleProductsPage /></Route>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
