import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #d61511;
  width: 100%;
`;
export const Title = styled.p`
  color: white;
  font-family: 'Roboto', sans-serif;
`;

export const Menu = styled.div`
  display: flex;
  margin-right: 5%;
`;
export const MenuItem = styled.p`
  color: white;
  padding: 10px;
  margin-left: 50px;
  font-family: 'Roboto', sans-serif;
  &:hover {
    background-color: white;
    cursor: pointer;
    color: #d61511;
    border-radius: 8px;
  }
`;
export const Logo = styled.img`
  width: 150px;
  height: 75px;
  margin-left: 10%;
`;
