import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeProduct,
  toggleAvailability,
} from '../redux/productsSlice';

function ProductList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState(null);
  const [filterName, setFilterName] = useState('');

  const sortedProducts = products.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'price') {
      return a.price - b.price;
    } else if (sortBy === 'availability') {
      return a.available - b.available;
    } else {
      return 0;
    }
  });

  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value={null}>Сортировка по умолчанию</option>
        <option value="name">Имя</option>
        <option value="price">Цена</option>
        <option value="availability">Доступность</option>
      </select>
      <input
        type="text"
        placeholder="Фильтровать по имени"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: {product.price}</p>
            <p>
              Доступность: {product.available ? 'В наличии' : 'Нет в наличии'}
            </p>
            <button
              onClick={() => dispatch(removeProduct(product.id))}
            >
              Удалить
            </button>
            <button
              onClick={() => dispatch(toggleAvailability(product.id))}
            >
              Изменить доступность
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;