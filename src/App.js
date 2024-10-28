

import {Routes, Route} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage';
import ProductItemPage from './pages/ProductItemPage';
import ProductListPage from './pages/ProductsListPage';
import HomePge from './pages/HomePge';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePge/>}/>
        <Route path="/products/:id" element={<ProductItemPage/>}/>
        <Route path="/products" element={<ProductListPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
