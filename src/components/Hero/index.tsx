import React from 'react'
import { PrimaryButton, SecondaryButton } from 'styles/common/Button'
import { Col, HeroInfo, HeroTitle, Row, ButtonTray, Img } from './styles'
import Image from 'next/image'
import heroimg from '../../assets/Hero.png'

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
        <Img>
          <Image src={heroimg} />
        </Img>
      </Col>
    </Row>
  )
}
