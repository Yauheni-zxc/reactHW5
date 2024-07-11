import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productsSlice';
import { useForm } from 'react-hook-form';

function AddProduct() {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    // Очистка формы
    // ...
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true })}
        />
        {errors.name && <span>Имя обязательное</span>}
      </div>
      <div>
        <label htmlFor="description">Описание:</label>
        <textarea
          id="description"
          {...register('description', { required: true })}
        />
        {errors.description && <span>Описание обязательное</span>}
      </div>
      <div>
        <label htmlFor="price">Цена:</label>
        <input
          type="number"
          id="price"
          {...register('price', { required: true, min: 0 })}
        />
        {errors.price && <span>Цена обязательная и должна быть больше 0</span>}
      </div>
      <div>
        <label htmlFor="available">Доступность:</label>
        <input
          type="checkbox"
          id="available"
          {...register('available')}
        />
      </div>
      <button type="submit">Добавить продукт</button>
    </form>
  );
}

export default AddProduct;