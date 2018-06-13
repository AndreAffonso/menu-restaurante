import styled from 'styled-components';

export const List = styled.div`
  padding: 2rem;
`;

export const ListItem = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0;
  transition: all 0.3s;
`;

export const LoginButton = styled.button`
  background: #4b4b4c;
  color: white;
  font-weight: bold;
  border: 3px solid #4b4b4c;
  border-radius: 3px;
  padding: 1rem 2rem;
  margin: 1rem 0;
  font-size: 22px;
  transition: all 0.4s;

  &:hover {
    background: white;
    color: #4b4b4c;
  }

  &:focus {
    outline: none;
  }
`;

export const Spinner = styled.div`
  content: '';
  box-sizing: border-box;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border-top: 3px solid #f22613;
  border-right: 3px solid transparent;
  animation: spinner 0.7s linear infinite;
  margin: auto;

  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;
