import styled from 'styled-components'

const About = styled.div`
    width: 100%;
    height: calc(100vh - 55px);
    background-color: #fff;
    color: #262526;
    display: flex;
    justify-content: center;
    padding-top: 30px ;
  
    #portfolio-section {
      align-self: flex-end;
      padding-top: 55px;
    }
`

export default function AboutSection() {
    return (
        <About >
            <h1>ABOUT</h1>
            <div  id='portfolio-section' />
        </About>
    )
}