import { HeroInfo, HeroTitle } from 'components/Hero/styles'
import React from 'react'
import { Row, Col, Section } from '../../styles/common/Layout'
import { AiOutlineCloud } from 'react-icons/ai'
import { SubTitle, Paragraph, TextLink, Title } from 'styles/common/Text'

export default function Work() {
  // <i class="fas fa-cloud"></i>
  return (
    <Section>
      {/* <Row>
        <HeroInfo>What I do</HeroInfo>
      </Row> */}
      <Title>What I do ?</Title>
      <Row style={{ paddingTop: '30px' }}>
        <Col width={'30%'}>
          <AiOutlineCloud size={50} color="#F4494E" />
          <SubTitle>UX/UI Design</SubTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            placeat reiciendis incidunt repellat cupiditate quas!
          </Paragraph>
          <TextLink href="http://google.com">Contact Me</TextLink>
        </Col>
        <Col width={'30%'}>
          <AiOutlineCloud size={50} color="#F4494E" />
          <SubTitle>UX/UI Design</SubTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            placeat reiciendis incidunt repellat cupiditate quas!
          </Paragraph>
          <TextLink href="http://google.com">Contact Me</TextLink>
        </Col>
        <Col width={'30%'}>
          <AiOutlineCloud size={50} color="#F4494E" />
          <SubTitle>UX/UI Design</SubTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            placeat reiciendis incidunt repellat cupiditate quas!
          </Paragraph>
          <TextLink href="http://google.com">Contact Me</TextLink>
        </Col>
      </Row>
    </Section>
  )
}
