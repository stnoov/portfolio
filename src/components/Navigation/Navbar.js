import React from 'react'
import styled from 'styled-components'
import BurgerMenu from "./BurgerMenu";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #262526;
  color: #D7D8DA;
  border-bottom: 1px solid #D7D8DA;
  position: fixed;
  top: 0;
  
  .logotype {
    padding: 12px 0;
    font-size: 24px;
    line-height: 0.8;
  }
`

export default function Navbar() {
    return (
        <Nav>
            <div className="logotype">
                ARTEM SITNOV<br/>
                <small>Web developer</small>
            </div>
            <BurgerMenu />
        </Nav>
    )
}