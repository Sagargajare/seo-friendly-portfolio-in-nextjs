import styled from 'styled-components'
export const Section = styled.section``
export const Col = styled.div<{ width: string }>`
  width: ${(props) => (props.width ? props.width : '50%')};
  padding: 5px;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1%;
  width: 80%;

  margin: 0 auto;
  padding: 100px 0px 40px 0px;
  margin-bottom: 20vh;
  @media (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
    flex-direction: column;
    padding: 50px 0px 20px 0px;
  }
`
