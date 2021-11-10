import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
  border-bottom: 1px solid #eee;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 0;
  @media (max-width: 768px) {
    width: 95%;
  }
`
interface Props {
  isOpen: boolean
}
export const NavItem = styled.div<Props>`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  list-style: none;
  @media (max-width: 768px) {
    /* display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')}; */
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: ${({ isOpen }) => (isOpen ? '-50%' : '50%')};
    transform: translate(-50%, -50%);
    transition: left 0.3s linear;
  }
`
export const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  margin-left: 40px;
  padding: 13px 0 0;
  font-family: 'Hind';
  color: #6e6d7a;
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  text-transform: none;
  cursor: pointer;
  @media (max-width: 768px) {
    width: auto;
    margin-left: 0;
    margin: 14px auto;
  }
  &:hover {
    color: #000000;
    border-bottom: 4px solid #f55b5d;
    transition: 300ms linear ease-in;
  }
`
export const NavContainer = styled.div``
export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`
export const ImgLogo = styled.img`
  width: 100%;
  max-height: 60 px;
  margin-right: auto;
  float: left;
`

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 1px;
  }
  span:first-child {
    width: 25px;
  }
  span:nth-child(2) {
    width: 17px;
  }
  span:last-child {
    width: 30px;
  }
  @media (max-width: 768px) {
    display: flex;
    margin-left: auto;
  }
`
