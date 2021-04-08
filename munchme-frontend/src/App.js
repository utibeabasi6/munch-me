import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Orderpage from './pages/Orderpage';
import Aboutpage from './pages/Aboutpage';
import Productspage from './pages/Productspage';
import Checkoutpage from './pages/Checkoutpage';

function App() {
  return (
    <Router>
      <Route exact path='/home'><Homepage /></Route>
      <Route exact path='/order'><Orderpage /></Route>
      <Route exact path='/about'><Aboutpage /></Route>
      <Route exact path='/cakes/all'><Productspage /></Route>
      <Route exact path='/order/checkout'><Checkoutpage /></Route>
    </Router>
  );
}

export default App;
