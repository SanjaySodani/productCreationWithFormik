import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './Navigation';
import EditProduct from './EditProduct';
import CreateProduct from './CreateProduct';
import Users from './Products';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<Dashboard/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
        <Route exact path='/products' element={<Users />} />
        <Route exact path='/create-product' element={<CreateProduct/>} />
        <Route exact path='/edit-product/:id' element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;