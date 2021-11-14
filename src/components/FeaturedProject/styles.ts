import styled from 'styled-components'
export const Img = styled.div`
  display: block;
  margin: -60px auto 20px auto;
  padding: 0 auto;
  display: block;
  margin-left: auto;
  cursor: default;
  text-align: center;
  border-radius: 20 px;
  box-shadow: 2px 2px 10px 1px rgb(0 0 0 / 2%), 4px 4px 20px 1px rgb(0 0 0 / 3%),
    7px 7px 40px 3px rgb(0 0 0 / 5%);
  opacity: 0.9;
  -webkit-transition: opacity 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    -webkit-transform 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
  width: 70%;
  margin: 0 auto;
  &:hover {
    box-shadow: 1px 1px 8px 1px rgb(0 0 0 / 2%),
      16px 16px 15px 2px rgb(0 0 0 / 4%), 20px 20px 20px 8px rgb(0 0 0 / 8%);
  }
  @media (max-width: 768px) {
    /* margin: 5px 0 5px auto; */
  }
`
