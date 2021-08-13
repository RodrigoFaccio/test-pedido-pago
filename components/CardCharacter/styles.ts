import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;

  align-items: center;
  text-align: center;
  //border: 15px solid #d61511;
  border-bottom: 25px solid #d61511;
  border-left: 12px solid #d61511;
  border-top: 12px solid #d61511;
  border-right: 12px solid #d61511;

  width: 220px;
  height: 300px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const ImageCard = styled.img`
  width: 198px;
  height: 265px;
`;
export const Title = styled.p`
  position: absolute;
  width: 190px;
  margin-top: -2px;
  color: white;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
`;
