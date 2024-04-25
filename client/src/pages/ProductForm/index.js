import React, { useEffect, useState } from 'react';
import CreateUpdate from './CreateUpdate';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/store';

const Index = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId]);

  return <CreateUpdate formData={product} />;
};

export default Index;
