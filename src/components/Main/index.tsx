import * as S from './styles'
import Navbar from '../Navbar'
import Hero from '../Hero'
import { PrimaryButton, SecondaryButton } from 'styles/common/Button'
const Main = ({
  title = 'Sagar Gajare || Reactjs || Django || Freelancer',
  description = 'TypeScript, ReactJS, NextJS & Styled Components',
}) => (
  <div>
    <Navbar />
    <Hero />
  </div>
)

export default Main
