import { createRef, useEffect } from 'react'
import styled from 'styled-components'
import { StyledLink } from './../utils/styles/Atoms'
import { useState } from 'react'
import DarkLightModeButton from './buttons/DarkLightModeButton'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.secondary};
  position: fixed;
  width: 100%;
  z-index: 8;
`

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const LinkContainer = styled.div`
  padding: 30px;
  display: inline-block;
  position: relative;
  z-index: 1;
  transition-duration: 0.6s;

  &.active a {
    color: white;
  }
`

const Selector = styled.div`
  height: 50px;
  display:inline-block;
  position:absolute;
  left: 10px;
  top: 15px;
  z-index:1;
  border-radius:50px;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background: linear-gradient(45deg, #9F496E 0%, #2B262D 100%);
`

function Header({ currentTheme, setTheme }) {
  const pathIndex = {
    '/': 0,
    '/folio': 1,
    '/skills': 2,
    '/experiences': 3,
    '/contact': 4
  }
  const path = window.location.pathname
  const initialIndex = pathIndex.hasOwnProperty(path) ? pathIndex[path] : 0
  const [navMenuActive, setNavMenuActive] = useState(initialIndex)
  let firstMenuRef = createRef()
  let secondMenuRef = createRef()
  let thirdMenuRef = createRef()
  let fourthMenuRef = createRef()
  let fifthMenuRef = createRef()
  let selectorRef = createRef()
  let menuRefs = [firstMenuRef, secondMenuRef, thirdMenuRef, fourthMenuRef, fifthMenuRef];
  let firstRender = 0;

  useEffect(() => {
    const currentNavItem = menuRefs[navMenuActive].current;
    // recupère width de l'élément courant
    let activeWidth = currentNavItem.offsetWidth;
    // getBoundingClientRect récupère les positions de l'élément
    let activePosition = currentNavItem.getBoundingClientRect();
  
    //adapte les propriétés css width et left du selecteur
    selectorRef.current.style.width = `${activeWidth}px`;
    selectorRef.current.style.left = `${activePosition.left}px`;
    if (firstRender > 0) {
      selectorRef.current.style.transitionDuration = "0.6s";
    }
    ++firstRender;
  }, [navMenuActive])
  

  return (
    <NavContainer>
      <DarkLightModeButton currentTheme={currentTheme} setTheme={setTheme}/>
      <Navigation>
        <Selector ref={selectorRef}/>
        <LinkContainer className={`${navMenuActive === 0 ? 'active' : ''}`} ref={firstMenuRef}>
          <StyledLink to="/" onClick={() => {setNavMenuActive(0)}}>Accueil</StyledLink>
        </LinkContainer>

        <LinkContainer className={`${navMenuActive === 1 ? 'active' : ''}`} ref={secondMenuRef}>
          <StyledLink to="/folio" onClick={() => {setNavMenuActive(1)}}>Portfolio</StyledLink>
        </LinkContainer>

        <LinkContainer className={`${navMenuActive === 2 ? 'active' : ''}`} ref={thirdMenuRef}>
          <StyledLink to="/skills" onClick={() => {setNavMenuActive(2)}}>Compétences</StyledLink>
        </LinkContainer>

        <LinkContainer className={`${navMenuActive === 3 ? 'active' : ''}`} ref={fourthMenuRef}>
          <StyledLink to="/experiences" onClick={() => {setNavMenuActive(3)}}>Expériences</StyledLink>
        </LinkContainer>

        <LinkContainer className={`${navMenuActive === 4 ? 'active' : ''}`} ref={fifthMenuRef}>
          <StyledLink to="/contact" onClick={() => {setNavMenuActive(4)}}>Contact</StyledLink>
        </LinkContainer>
      </Navigation>
    </NavContainer>
  )
}

export default Header