import React, { useState } from 'react'
import * as S from './styles'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
      <S.Nav>
        <div>
          <a>
            <img
              src="https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5e983bf0ee7196f1f3b940ae_Logo%20MINE.svg"
              alt=""
              srcSet=""
            />
          </a>
        </div>
        <S.Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </S.Hamburger>

        <S.NavItem isOpen={isOpen}>
          <S.NavLink href="#">About</S.NavLink>
          <S.NavLink href="#">Services</S.NavLink>
          <S.NavLink href="#">Pricing</S.NavLink>
          <S.NavLink href="#">Contact</S.NavLink>
        </S.NavItem>
      </S.Nav>
    </header>
  )
}
