import styled from 'styled-components'

export const Title = styled.h2`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 60px;
  font-family: 'Sofia Pro';
  font-weight: 700;
  font-size: 3.5em;
  padding: 10px 15px;
  color: #0d0c22;
  @media (max-width: 768px) {
    width: 95%;
  }
`
export const SubTitle = styled.h1`
  font-family: 'Hind';
  margin: 10px 0;
  color: #0d0c22;
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`
export const Paragraph = styled.p`
  margin-top: 14px;
  margin-bottom: 30px;
  color: #5c5b66;
  font-family: 'Hind', sans-serif;
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
`

export const TextLink = styled.a`
  margin-top: auto;
  -webkit-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
  color: #0d0c22;
  font-weight: 600;
  text-decoration: none;
  font-size: 18px;
  line-height: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
export const TextTag = styled.span`
  margin-top: -10 px;
  margin-bottom: 20 px;
  color: #a4a4a4;
  font-size: 14px;
  line-height: 22px;
`
