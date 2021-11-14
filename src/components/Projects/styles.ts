import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: auto auto auto;
  background-color: #ffffff;
  padding: 10px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const ProjectItem = styled.div`
  background-color: #dae2fe;

  border-radius: 5px;
  background-image: url('https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ef373c3ce916614c9bf125d_dribbble-fraser-opt.jpg');
  font-size: 30px;
  background-size: cover;
  background-position: center;
  text-align: center;
  width: 351px;
  height: 264px;
  grid-column-gap: 50px;
  display: grid;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.5s box-shadow;
  }
`

export const ProjectTitle = styled.h3`
  font-size: 0.7em;
  text-transform: capitalize;
  font-family: 'Hind';
  font-weight: 400;
`
export const ProjectDescription = styled.p`
  font-size: 0.5em;
  font-family: 'Sofia Pro', 'cursive';
  color: #5c5b66;
  font-weight: 300;
  word-wrap: normal;
  padding: 1px;
`
export const ProjectContent = styled.div`
  align-self: end;
  margin: 0 auto;
`
