import styled from 'styled-components'
import Gmail from '../../images/gmail.png'
import Telegram from '../../images/telegram.svg'
import LinkedIn from '../../images/linkedin.png'
import GitHub from '../../images/github.png'

const Contact = styled.div`
  height: calc(100vh - 55px);
  background-color: #fff;
  color: #262526;
  padding-top: 30px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 30vh;
  margin-bottom: -20vh;

  .contact-header-text {
    background-color: black;
    font-style: italic;
    color: white;
    padding: 7px 30px;
    text-align: center;
    display: inline-block;
    margin-bottom: 50px;
  }
  
  .section-header {
    padding: 10px 250px;
    line-height: 15px;
  }
    
  .contact-header {
    text-align: center;
  }

  .social-image {
    max-width: 70px;
    max-height: 70px;
    z-index: 0;
    border-radius: 10%;
    float: left;
    padding: 10px;
    margin-top: -10px;
    cursor: pointer;
  }
  

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: -100px;
    .section-header {
      padding: 10px 30px;
    }
  }
`

export default function ContactSection() {
    return (
        <Contact id='contact-section'>
            <div className='contact-header'>
                <h1 className='contact-header-text'>CONTACT</h1>
                <h1>LET'S GET IN TOUCH</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="column first-col">
                        <h3 className='section-header'>TELEGRAM</h3>
                        <a target="_blank" href="https://t.me/stnoov"><img src={Telegram} className='social-image' alt='gmail'/></a>
                        <div className="contact-text">
                            <p>
                                @STNOOV
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <h3 className='section-header'>GMAIL</h3>
                        <a href="mailto:stnoov@gmail.com"><img src={Gmail} className='social-image' alt='gmail'/></a>
                        <div className="contact-text education-section">
                            stnoov@gmail.com
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h3 className='section-header'>LINKEDIN</h3>
                        <a target="_blank" href="https://www.linkedin.com/in/asitnov/"><img src={LinkedIn} className='social-image' alt='LinkedIn'/></a>
                        <div className="contact-text">
                            /asitnov
                        </div>
                    </div>
                    <div className="column">
                        <h3 className='section-header'>GITHUB</h3>
                        <a target="_blank" href="https://github.com/stnoov"><img src={GitHub} className='social-image' alt='GitHub'/></a>
                        <div className="contact-text">
                            /stnoov
                        </div>
                    </div>
                </div>
            </div>
            <div  id='portfolio-section' />
        </Contact>
    )
}