import React from 'react'
import { Row, Col } from 'styles/common/Layout'
import Project1 from '../../assets/project1.jpg'
import { Img } from './styles'
import {
  Paragraph,
  SubTitle,
  TextLink,
  TextTag,
  Title,
} from 'styles/common/Text'
import Image from 'next/image'
export default function FeatureProject() {
  return (
    <div>
      <Title>Featured projects</Title>
      <Row style={{ paddingTop: '15px' }}>
        <Col width={'45%'}>
          <SubTitle style={{ marginBlockEnd: 0 }}>
            One-page Personal Website for Freelance Marketer, Nicole Warshauer
          </SubTitle>
          <TextTag>Website Design, Webflow Build</TextTag>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nisi
            et facere laboriosam autem excepturi! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatibus nihil molestiae veritatis
            in ea dolorem facere, delectus eos nisi hic.
          </Paragraph>
          <TextLink>Visit Here</TextLink>
        </Col>
        <Col width={'55%'}>
          <Img>
            <Image src={Project1} alt="Project1" />
          </Img>
        </Col>
      </Row>
      <Row style={{ paddingTop: '15px' }}>
        <Col width={'45%'}>
          <SubTitle style={{ marginBlockEnd: 0 }}>
            One-page Personal Website for Freelance Marketer, Nicole Warshauer
          </SubTitle>
          <TextTag>Website Design, Webflow Build</TextTag>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nisi
            et facere laboriosam autem excepturi! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatibus nihil molestiae veritatis
            in ea dolorem facere, delectus eos nisi hic.
          </Paragraph>
          <TextLink>Visit Here</TextLink>
        </Col>
        <Col width={'55%'}>
          <Img>
            <Image src={Project1} alt="Project1" />
          </Img>
        </Col>
      </Row>
    </div>
  )
}
