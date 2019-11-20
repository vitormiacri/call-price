import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 972px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.4rem;

  strong {
    font-size: 1.4rem;
  }

  button {
    border: 0;
    /* padding: 0.4rem 0.5rem; */
    background: #fff;
    cursor: pointer;

    svg {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;
export const InfoContainer = styled.div`
  border-bottom: 1px solid #999;
  padding: 0.5rem;

  p {
    margin: 0.3rem 0;
  }

  .valuePlan {
    color: #00c853;
  }

  .value {
    color: #f44336;
  }
  @media (min-width: 520px) {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;

    padding: 1rem;

    p {
      margin: 0.5rem 0.9rem;
    }
  }
`;
