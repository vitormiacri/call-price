import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  padding: 1rem;
  margin: 0 auto;
  max-width: 1100px;

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  margin: 1rem 0;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
    max-width: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
      max-width: 270px;

      select,
      input,
      button {
        margin-right: 1rem;
      }
    }
  }

  .error {
    color: #f44336;
    margin-top: 0.3rem;
  }

  @media (min-width: 768px) {
    .error {
      margin-right: 1rem;
    }
  }
`;

export const FormControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 0.5rem;

  label {
    font-weight: bold;
    margin: 0.3rem 0;
  }

  select,
  input {
    margin-top: 0.3rem;
    align-self: center;
  }
`;

export const ResultContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1rem;

  p {
    margin: 0.5rem 0;
  }

  .valuePlan {
    color: #00c853;
  }

  .value {
    color: #f44336;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.5rem;
    }

    strong {
      font-size: 1.3rem;
    }
  }
  /* 
  @media (min-width: 1024px) {
    p {
      font-size: 2rem;
    }

    strong {
      font-size: 1.7rem;
    }
  } */
`;

export const Button = styled.button`
  width: 100%;
  max-width: 270px;
  height: 36px;

  background: rgb(33, 79, 124);
  color: #fff;
  font-weight: bold;

  margin: 0.7rem 0;
  border: 0;
  border-radius: 4px;

  &:focus,
  &:hover {
    background: rgba(33, 79, 124, 0.9);
  }
`;
