import styled from 'styled-components'

const Links = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  
    li {
      padding: 18px 10px;
      cursor: pointer;
    }

  @media (max-width: 768px) {
        background-color: #262526;
        flex-flow: column nowrap;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-out;

          li {
            padding:18px 40px;
                      
          }
    
          li:hover {
            color: #d7d8da;
            background-color: #7f8084;
          
          }
    }
  
`


export default function NavLinks({open, visible, setOpen}) {

    const jumpTo = (section) => {
        if (section === 'home') {
            window.scrollTo({top: 0, left: 0, behavior: "smooth"})
            setOpen(false)
        } else {
            document.getElementById(section).scrollIntoView({behavior: "smooth"})
            setOpen(false)
        }

    }
    return (
        <Links open={open} visible={visible}>
            <li onClick={() => jumpTo('home')}>HOME</li>
            <li onClick={() => jumpTo('about-section')}>ABOUT</li>
            <li onClick={() => jumpTo('portfolio-section')}>PORTFOLIO</li>
            <li onClick={() => jumpTo('contact-section')}>CONTACT</li>
        </Links>
    )
}