import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Cartpage from './pages/cartpage';
import Productspage from './pages/productspage';
import { CartContext, getTotalItemsInCart } from './services/cart';
import { getUser, AuthContext } from './services/auth';
import { useMemo, useState } from 'react';
import { Background } from './components/background';
import LoginPage from './pages/loginpage';

function App() {
  const [user, setuser] = useState(getUser())
  const auth = useMemo(() => ({ user, setuser }), [user, setuser])
  const [cartValue, setCartValue] = useState(getTotalItemsInCart())
  const cartQuantity = useMemo(() => ({ cartValue, setCartValue }), [cartValue, setCartValue])
  return (
    <AuthContext.Provider value={auth}>
      <CartContext.Provider value={cartQuantity}>
        <Background>
          <Router>
            <Route exact path='/'><Homepage /></Route>
            <Route exact path='/cart'><Cartpage /></Route>
            <Route exact path='/cakes'><Productspage /></Route>
            <Route exact path='/login'><LoginPage /></Route>
          </Router></Background>
      </CartContext.Provider></AuthContext.Provider>
  );
}

export default App;
