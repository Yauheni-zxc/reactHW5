import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProduct } from '../redux/productsSlice';
import { useForm } from 'react-hook-form';

function EditProduct({ product }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: product.name,
      description: product.description,
      price: product.price,
      available: product.available,
    },
  });

  const onSubmit = (data) => {
    dispatch(updateProduct({ id: product.id, ...data }));
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
      {/* ... аналогично для остальных свойств ... */}
      <button type="submit">Сохранить изменения</button>
    </form>
  );
}

export default EditProduct;