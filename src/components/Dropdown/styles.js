import styled from 'styled-components';

export const Select = styled.select`
  display: block;
  width: 100%;
  max-width: 270px;

  height: 36px;

  background: #fff;
  color: #000;
  font-size: 1rem;
  line-height: 2rem;
  border-radius: 4px;

  padding-left: 0.5rem;

  ${props => (props.error ? 'border: 1px solid #f44336' : null)};

  &:focus,
  &:hover {
    border: 1px solid rgba(33, 79, 124, 0.7);
    box-shadow: 1px 1px 3px 2px rgba(33, 79, 124, 0.3);
  }
`;
