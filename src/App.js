import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct'; // Опционально


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);



  const handleLogin = () => {
    setIsAuthenticated(true);
  };



  return (
    <Provider store={store}>
      <div>

          <div>
            <h1>Каталог продуктов</h1>
            <AddProduct />
            <ProductList />
          
          
          </div>
        
         
        
      </div>
    </Provider>
  );
}

export default App;