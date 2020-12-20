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


export default function NavLinks({open, visible}) {
    return (
        <Links open={open} visible={visible}>
            <li onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>HOME</li>
            <li onClick={() => document.getElementById('about-section').scrollIntoView({behavior: "smooth"})}>ABOUT</li>
            <li onClick={() => document.getElementById('portfolio-section').scrollIntoView({behavior: "smooth"})}>PORTFOLIO</li>
            <li onClick={() => document.getElementById('contact-section').scrollIntoView({behavior: "smooth"})}>CONTACT</li>
        </Links>
    )
}