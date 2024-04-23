import styled from 'styled-components';
import StyledButton from '../Button';

const Container = styled.div`
  width: 100%;
  max-width: 20rem;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  @media (min-width: 640px) {
    max-width: 30rem;
  }
  @media (min-width: 768px) {
    grid-column: span 6;
  }
  @media (min-width: 1024px) {
    grid-column: span 4;
  }
`;

const Image = styled.img`
  padding: 2rem;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
`;

const Title = styled.h5`
  font-size: 1.25rem; 
  font-weight: 600; /
  line-height: 1.5; /* Equivalent of tracking-tight */
  color: #1f2937; /* Equivalent of text-gray-900 */
  @media (prefers-color-scheme: dark) {
    color: #fff; /* Equivalent of dark:text-white */
  }
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.4;
  color: #333; /* or any other color you prefer */
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.625rem; /* Equivalent of mt-2.5 */
  margin-bottom: 1.25rem; /* Equivalent of mb-5 */
`;

const StarIcon = styled.svg`
  width: 1rem; /* Equivalent of w-4 */
  height: 1rem; /* Equivalent of h-4 */
  fill: #fbbf24; /* Equivalent of text-yellow-300 */
  margin-left: 0.25rem; /* Space between stars */
`;

const Rating = styled.span`
  background-color: #edf2f7; /* Equivalent of bg-blue-100 */
  color: #4c51bf; /* Equivalent of text-blue-800 */
  font-size: 0.75rem; /* Equivalent of text-xs */
  font-weight: 600; /* Equivalent of font-semibold */
  padding: 0.125rem 0.625rem; /* Equivalent of px-2.5 py-0.5 */
  border-radius: 0.25rem; /* Equivalent of rounded */
  @media (prefers-color-scheme: dark) {
    background-color: #4c51bf; /* Equivalent of dark:bg-blue-200 */
    color: #fff; /* Equivalent of dark:text-blue-800 */
  }
`;

const Price = styled.span`
  font-size: 1.875rem; /* Equivalent of text-3xl */
  font-weight: 700; /* Equivalent of font-bold */
  color: #1f2937; /* Equivalent of text-gray-900 */
  @media (prefers-color-scheme: dark) {
    color: #fff; /* Equivalent of dark:text-white */
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Container>
      <a href="#">
        <Image src="https://via.placeholder.com/350x250" alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <Title>{product?.title}</Title>
        </a>
        <Description>{product?.description}</Description>

        <RatingContainer>
          {[...Array(4)].map((_, index) => (
            <StarIcon
              key={index}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </StarIcon>
          ))}
          <StarIcon
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </StarIcon>
          <Rating>5.0</Rating>
        </RatingContainer>
        <div className="flex items-center justify-between">
          <Price>रु{product?.price}</Price>
          <StyledButton text="Buy Now" />
        </div>
      </div>
    </Container>
  );
};

export default ProductCard;
