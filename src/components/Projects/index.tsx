import { Row } from 'components/Hero/styles'
import { Title } from 'styles/common/Text'
import React from 'react'
import { Section } from 'styles/common/Layout'
import {
  ProjectItem,
  ProjectsContainer,
  ProjectTitle,
  ProjectContent,
  ProjectDescription,
} from './styles'

export default function Projects() {
  const myLists = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  return (
    <div>
      <Title>Projects</Title>
      <Row>
        <ProjectsContainer>
          {myLists.map((key) => (
            <ProjectItem key={key}>
              <ProjectContent>
                <ProjectTitle>Diyintern Platform</ProjectTitle>
                <ProjectDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam eius voluptatibus minus delectus! Enim, pariatur!
                </ProjectDescription>
              </ProjectContent>
            </ProjectItem>
          ))}
        </ProjectsContainer>
      </Row>
    </div>
  )
}
