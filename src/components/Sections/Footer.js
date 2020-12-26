import styled from 'styled-components'

const Footer = styled.div`
    width: 100%;
    background-color: #262626;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  
    small {
      margin-top: 50px;
      color: white;
    }

  .cv-button {
    display: flex;
    margin-top: 5px;
    background-color: #262626;
    font-size: 25px;
    align-items: center;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid white;
  }

  @media (max-width: 768px) {
    .cv-button {
      margin-top: 30px;
    }
  }
`

export default function FooterSection() {
    return (
    <Footer>
        <a href="https://drive.google.com/file/d/10FTFKvJG8lltvr_Xf5_No3zigXNr91q0/view?usp=sharing" target="_blank"><button className='cv-button'>Download CV</button></a>
        <small>Copyright © 2020 Artem Sitnov • Oulu based Web Developer</small>
    </Footer>
    )
}