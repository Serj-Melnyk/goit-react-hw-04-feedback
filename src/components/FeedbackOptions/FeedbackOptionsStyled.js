import styled from 'styled-components';

export const ButtonOptions = styled.div`
  margin-top: 50px;
  width: 100%;
  height: auto;
  display: flex;
  text-align: center;
  gap: 20px;
`;

export const Button = styled.button`
  /* background-color: red; */
  border: 0.5px solid black;
  border-radius: 6px;
  padding: 5px 20px;
  font-size: 20px;
  font-weight: 500;
  -webkit-box-shadow: 10px 7px 11px -7px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 10px 7px 11px -7px rgba(0, 0, 0, 0.66);
  box-shadow: 10px 7px 11px -7px rgba(0, 0, 0, 0.66);

  &:hover {
    background-color: #2986cc;
    color: #ffffff;
    cursor: pointer;
  }
  &:first-letter {
    text-transform: uppercase;
  }
`;
