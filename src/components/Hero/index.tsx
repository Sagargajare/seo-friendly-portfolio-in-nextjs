import React from 'react'
import { PrimaryButton, SecondaryButton } from 'styles/common/Button'
import { HeroInfo, HeroTitle, ButtonTray, Img } from './styles'
import { Col, Row } from 'styles/common/Layout'
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
          {/* <Image src={heroimg} /> */}
          <img
            src="https://cdn2.iconfinder.com/data/icons/coding-7/100/mobile-developer-2-coding-developer-programmer-coder-software-laptop-mobile-phone-app-male-512.png"
            alt=""
            srcSet=""
            width="100%"
          />
        </Img>
      </Col>
    </Row>
  )
}
