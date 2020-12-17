import styled from 'styled-components'

const Links = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
      padding: 18px 10px;
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


export default function NavLinks({open}) {
    return (
        <Links open={open}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PORTFOLIO</li>
            <li>CONTACT</li>
        </Links>
    )
}