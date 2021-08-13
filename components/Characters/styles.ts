import styled from 'styled-components';

export const ContainerItem = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  align-content: center;
  text-align: center;
  width: 100%;
  padding: 2%;
  @media (max-width: 700px) {
    display: inline;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-content: center;
  }
`;
export const Image = styled.img`
  width: 50vh;
  height: 50vh;
  @media (max-width: 700px) {
    width: 90%;
    height: 70vh;
    margin-left: 5%;
    justify-content: center;
  }
`;
export const Name = styled.p`
  font-size: 55px;
  text-align: left;
  margin-left: 2%;

  @media (max-width: 700px) {
    margin-left: 0%;
    text-align: center;
  }

  font-family: 'Roboto', sans-serif;
`;
export const Description = styled.p`
  text-align: left;
  color: gray;
  width: 80%;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 700px) {
    text-align: center;

    display: inline;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 100px;

    align-content: center;
  }
  margin-left: 2%;
`;
export const DescriptionDiv = styled.div`
  @media (max-width: 700px) {
    display: inline;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 100px;
    margin-top: 0%;

    align-content: center;
  }
`;
export const CarouselDiv = styled.div`
  padding: 2%;
  background-color: #1a2235;
  width: 100%;
`;
