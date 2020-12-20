import styled from 'styled-components'

const Welcome = styled.div`
    width: 100%;
    height: calc(100vh - 55px);
    background-color: #262526;
    color: #D7D8DA;
    padding: 10px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  
    .welcome-text {
      font-size: 24px;
      justify-self: flex-start;
      margin-top: -55px;
    }
  
    #about-section {
      align-self: flex-end;
      padding-bottom: 40px;
    }
`

export default function WelcomeSection() {
    return (
        <Welcome id='home-section'>
            <div className="welcome-text">
                ARTEM SITNOV
            </div>
            <div id='about-section' />
        </Welcome>
    )
}