import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 5px;

  margin: 0 auto;
  padding: 10px;

  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.2);

  margin-bottom: 1rem;
  &:last-of-type {
    margin-bottom: 0;

    @media (min-width: 1025px) {
      flex-shrink: 2;
    }
  }

  &:first-of-type {
    margin-bottom: 1rem;

    @media (min-width: 1025px) {
      flex-shrink: 4;
      margin-right: 1rem;
      max-height: 600px;
      margin-bottom: 0;
    }
  }
`;
