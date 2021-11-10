import styled from 'styled-components'

export const PrimaryButton = styled.a`
  background-image: linear-gradient(to right, #ff8d4d 0%, #f4494e 100%);
  font-family: Hind;
  margin: 10px;
  padding: 12px 18px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 1px 1px 8px 1px rgb(0 0 0 / 2%), 3px 3px 15px 2px rgb(0 0 0 / 4%),
    6px 6px 20px 4px rgb(0 0 0 / 5%);
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out,
    -webkit-transform 0.2s ease-in-out;
  &:hover {
    color: #fff;
    text-decoration: none;
    box-shadow: 1px 1px 8px 1px rgb(0 0 0 / 2%),
      6px 6px 15px 2px rgb(0 0 0 / 4%), 10px 10px 30px 8px rgb(0 0 0 / 5%);
  }
`

export const SecondaryButton = styled.a`
  font-family: Hind;
  margin: 10px;
  padding: 12px 18px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #ff7d59;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 1px 1px 8px 1px rgb(0 0 0 / 2%), 3px 3px 15px 2px rgb(0 0 0 / 4%),
    6px 6px 20px 4px rgb(0 0 0 / 5%);
  border: 1px solid rgba(255, 125, 89, 0.2);
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out,
    -webkit-transform 0.2s ease-in-out;
  &:hover {
    text-decoration: none;
    box-shadow: 1px 1px 8px 1px rgb(0 0 0 / 2%),
      6px 6px 15px 2px rgb(0 0 0 / 4%), 10px 10px 30px 8px rgb(0 0 0 / 5%);
  }
`
