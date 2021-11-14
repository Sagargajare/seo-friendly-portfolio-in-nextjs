import * as S from './styles'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Projects from 'components/Projects'

import Work from 'components/Work'
import FeatureProject from 'components/FeaturedProject'
const Main = ({
  title = 'Sagar Gajare || Reactjs || Django || Freelancer',
  description = 'TypeScript, ReactJS, NextJS & Styled Components',
}) => (
  <div>
    <Navbar />
    <Hero />
    <Work />
    <FeatureProject />
    <Projects />
  </div>
)

export default Main
