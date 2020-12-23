import React from 'react'
import styled from 'styled-components'
import NavLinks from "./NavLinks";

const StyledButton = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;
    display: none;
    visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#f3f3f3'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default function BurgerMenu ({visible, open, setOpen}) {

    return (
        <>
            <StyledButton open={open} onClick={() => setOpen(!open)} visible={visible}>
                <div />
                <div />
                <div />
            </StyledButton>
            <NavLinks open={open} setOpen={setOpen} visible={visible} />
        </>
    )
}