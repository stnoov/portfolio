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
  position: fixed;
  top: 0;
  z-index: 1;
  
  .logotype {
    padding: 12px 0;
    cursor: pointer;
    font-size: 24px;
    line-height: 0.8;
    visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  }
  
`

export default function Navbar() {

    const [visible, setVisible] = React.useState(false)

    const [open, setOpen] = React.useState(false)

    const handleScroll = () => {
        if (window.scrollY <= 0) {
            setVisible(false)
            setOpen(false)
            window.addEventListener('scroll', handleScroll);
        } else {
            setVisible(true)
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    return (
        <Nav visible={visible} >
            <div className="logotype">
                ARTEM SITNOV<br/>
                <small>Web developer</small>
            </div>
            <BurgerMenu visible={visible} open={open} setOpen={setOpen}/>
        </Nav>
    )
}