import styled, { keyframes } from 'styled-components'

const scale = keyframes`
from{
    transform: scale(0);
}
to{
    transform: scale(1);
}`

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
`

export const Info = styled.div`
  z-index: 3;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`
export const Poster = styled.div`
  z-index: 3;
  padding: 10px;
  img {
    width: 400px;
    border-radius: 30px;
    animation: ${scale} 0.4s linear;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`
