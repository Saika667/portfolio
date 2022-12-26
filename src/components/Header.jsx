import { createRef, useEffect } from 'react'
import styled from 'styled-components'
import { StyledLink } from './../utils/styles/Atoms'
import { useState, useContext } from 'react'
import DarkLightModeButton from './buttons/DarkLightModeButton'
import { GlobalContext } from '../utils/context/global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.secondary};
  position: fixed;
  width: 100%;
  z-index: 8;
  height: 59px;
`

const Navigation = styled.nav`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  &.hidden {
    display: none;
  }
`
const LinkContainer = styled.div`
  padding: 23px;
  font-size: 12px;
  display: inline-block;
  position: relative;
  z-index: 1;
  transition-duration: 0.6s;

  &.active a {
    color: white;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
        padding: 23px 11px;
  }
`

const Selector = styled.div`
  height: 38px;
  display:inline-block;
  position:absolute;
  left: 8px;
  top: 11px;
  z-index:1;
  border-radius:38px;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background: linear-gradient(45deg, #9F496E 0%, #2B262D 100%);
`

const MenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 23px;
  font-size: 26px;
  color: ${props => props.theme.primary};
`
const MobileContainer = styled.div`
  display: flex;
`

const MobileMenu = styled.div`
  display: none;

  &.open {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 59px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.primary};
  }
`

function Header({ currentTheme, setTheme }) {
  const pathIndex = {
    '/': 0,
    '/folio': 1,
    '/skills': 2,
    '/experiences': 3,
    '/animation': 4
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
    let activeWidth = currentNavItem ? currentNavItem.offsetWidth : 0;
    let leftPosition = currentNavItem.offsetLeft;
  
    //adapte les propriétés css width et left du selecteur
    selectorRef.current.style.width = `${activeWidth}px`;
    selectorRef.current.style.left = `${leftPosition}px`;
    if (firstRender > 0) {
      selectorRef.current.style.transitionDuration = "0.6s";
    }
    ++firstRender;
  }, [navMenuActive])
  
  const [navMobileOpen, setNavMobileOpen] = useState(false)
  const { device } = useContext(GlobalContext)

  return ( 
      <NavContainer>
        <DarkLightModeButton currentTheme={currentTheme} setTheme={setTheme}/>
        <Navigation className={`${device === 'mobile' ? 'hidden' : ''}`}>
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
          {device === 'tablet' ? null : (
            <LinkContainer className={`${navMenuActive === 4 ? 'active' : ''}`} ref={fifthMenuRef}>
              <StyledLink to="/animation" onClick={() => {setNavMenuActive(4)}}>Animation</StyledLink>
            </LinkContainer>
          )}
        </Navigation>

        {device === 'mobile' &&
          <MobileContainer>
            <MenuButton onClick={() => {setNavMobileOpen(!navMobileOpen)}}>
              <FontAwesomeIcon icon={faBars} /> 
            </MenuButton>
            <MobileMenu className={`${navMobileOpen === true ? 'open' : ''}`}>
              <LinkContainer className={``} ref={firstMenuRef}>
                <StyledLink to="/" onClick={() => {setNavMobileOpen(false)}}>Accueil</StyledLink>
              </LinkContainer>

              <LinkContainer className={``} ref={secondMenuRef}>
                <StyledLink to="/folio" onClick={() => {setNavMobileOpen(false)}}>Portfolio</StyledLink>
              </LinkContainer>

              <LinkContainer className={``} ref={thirdMenuRef}>
                <StyledLink to="/skills" onClick={() => {setNavMobileOpen(false)}}>Compétences</StyledLink>
              </LinkContainer>

              <LinkContainer className={``} ref={fourthMenuRef}>
                <StyledLink to="/experiences" onClick={() => {setNavMobileOpen(false)}}>Expériences</StyledLink>
              </LinkContainer>
            </MobileMenu>
          </MobileContainer>
        }
      </NavContainer>   
  )
}

export default Header