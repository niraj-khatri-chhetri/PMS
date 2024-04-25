import React, { useEffect, useState } from 'react';
import CreateUpdate from './CreateUpdate';
import { useParams } from 'react-router-dom';
import Api from '../../api';

const Index = () => {
  // const { productId } = useParams();

  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await Api.get(`/products/${productId}`);

  //       if (response) {
  //         setProduct(response?.data?.product);
  //       }
  //     } catch (error) {
  //       console.log('🚀 ~ useEffect ~ error:', error);
  //     }
  //   };

  //   fetchData();
  // }, [productId]);
  return <CreateUpdate />;
};

export default Index;
