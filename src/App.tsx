import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Products } from './components/Products';
import { ProductsCreate } from './components/ProductsCreate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />

        <Route path="/create" element={<ProductsCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
