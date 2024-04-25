import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from '../../components/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/store';

const ProductWrapper = styled.div`
  max-width: 80%;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
`;

const GridContainer = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
  margin: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

const Index = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { loading, products, error } = product;
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <ProductWrapper>
      <GridContainer>
        {products.length > 0 &&
          products.slice(0, 9).map((product, index) => {
            return (
              <ProductCard loading={loading} product={product} key={index} />
            );
          })}
      </GridContainer>
    </ProductWrapper>
  );
};

export default Index;
