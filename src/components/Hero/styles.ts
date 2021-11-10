import styled from 'styled-components'
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1%;
  width: 80%;
  margin: 0 auto;
  padding: 100px 0px 40px 0px;
  @media (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
    flex-direction: column;
    padding: 50px 0px 20px 0px;
  }
`
export const HeroInfo = styled.div`
  font-family: 'Sofia Pro';
  font-weight: 600;
  font-size: 42px;
  color: #0d0c22;
  line-height: 54px;
`
export const HeroTitle = styled.h2`
  font-family: 'Sofia Pro';
  font-weight: 500;
  font-size: 3em;
  padding: 10px 0px;
  color: #0d0c22;
`
interface Props {
  width: string
}
export const Col = styled.div<Props>`
  width: ${(props) => (props.width ? props.width : '50%')};
  padding: 5px;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ButtonTray = styled.div`
  margin-top: 50px;
  padding: 5px;
`

export const Img = styled.img`
  display: block;
  margin: -60px 0 20px auto;
  padding-right: 0;
  padding-left: 0;
  cursor: default;
  @media (max-width: 768px) {
    margin: 5px 0 5px auto;
  }
`
