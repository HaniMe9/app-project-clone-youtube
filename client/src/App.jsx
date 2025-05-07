import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Iphone from './pages/Iphone';
import Shared from './components/Shared/Shared';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Shared />}>
        <Route index element={<Home />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path='iphone/:productID' element={<ProductPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
