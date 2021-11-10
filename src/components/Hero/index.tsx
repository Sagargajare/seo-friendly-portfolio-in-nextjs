import React from 'react'
import { PrimaryButton, SecondaryButton } from 'styles/common/Button'
import { Col, HeroInfo, HeroTitle, Row, ButtonTray, Img } from './styles'

export default function index() {
  return (
    <Row>
      <Col width={'55%'}>
        <HeroTitle>Hi, my name is Sagar.</HeroTitle>
        <br />
        <HeroInfo>
          I’m a freelance Full Stack Developer with a Computer Science
          Background expert in Reactjs & Django.
        </HeroInfo>
        <ButtonTray>
          <SecondaryButton>Let Connect</SecondaryButton>
          <PrimaryButton>Contact Me</PrimaryButton>
        </ButtonTray>
      </Col>
      <Col width={'45%'}>
        <Img
          width={'350px'}
          src={
            'https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ec8bd3a80fe62bc11cda_kristi-header-optimized.jpg'
          }
          alt="hero"
        />
      </Col>
    </Row>
  )
}
