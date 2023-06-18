import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  position: fixed;
  padding: 10px 50px;
  top: 0;
  img {
    width: 25%;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 30px;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.7s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    transition: width 0.7s ease-in-out;
  }
`
