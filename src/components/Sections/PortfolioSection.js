import styled from 'styled-components'
import OkieDokie from '../../images/okiedokie.png'
import GoElectrical from '../../images/go-electrical.png'
import PCPal from '../../images/pcpal.png'

const Portfolio = styled.div`
    width: 100%;
    height: calc(100vh - 55px);
    background-color: #262526;
    color: #D7D8DA;
    padding-top: 30px ;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  
  .portfolio-header {
    margin-bottom: -50px;
  }

  .portfolio-header-text {
    background-color: white;
    font-style: italic;
    color: black;
    padding: 7px 30px;
    text-align: center;
    display: inline-block;
    
  }
  
  .portfolio-text {
    max-width: 500px;
    margin-top: 20px;
    text-align: justify;
  }
  
  .site-image {
    max-width: 182px;
    max-height: 182px;
    opacity: 0.7;
    z-index: 0;
    border-radius: 100%;
    float: left;
    padding: 10px;
    margin-top: 5px;
  }
  
  .project-description {
    display: block;
    margin-bottom: 30px;
  }
  
  @media (max-width: 768px) {
    height: 100%;
    .portfolio-header {
      margin-bottom: -20px;
    }
    .container {
      flex-flow: row wrap;
    }
    .portfolio-text {
      max-width: 450px;
      padding-right: 15px;
      text-align: left;
    }
    .portfolio-site-preview {
      width: 450px;
    }
    .site-image {
      margin: 25px 0;
      width: 90px;
      height: 90px;
    }
    
  }
`

export default function PortfolioSection() {
    return (
        <Portfolio >
            <div className='portfolio-header'>
                <h1 className='portfolio-header-text'>PORTFOLIO</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="column">
                            <div className='project-description'>
                            <img src={OkieDokie} className='site-image' alt='okiedokie'/>
                            <h3 className='section-header'>OKIEDOKIE.CLUB</h3>
                            <div className="portfolio-text">
                                <ul>
                                    <li><b>Duration:</b> 2 months</li>
                                    <li><b>Technologies used:</b> Python, Flask, Jinja2, SQLite, Bootstrap</li>
                                    <li>Designed and developed whole application: Login & Registration, Admin Panel, Payments, Booking System, Email notifications. Application is still operating and used for commercial purpose.</li>
                                </ul>
                            </div>
                            </div>
                    </div>
                    <div className="column">
                        <div className='project-description'>
                            <img src={GoElectrical} className='site-image' alt='okiedokie'/>
                            <h3 className='section-header'>GO ELECTRICAL</h3>
                            <div className="portfolio-text">
                                <ul>
                                    <li><b>Duration:</b> 1 month</li>
                                    <li><b>Technologies used:</b> React, NodeJS, Express, MySQL</li>
                                    <li>Part of the university program. First and solo React project, with the main aim to learn more about React.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className='project-description'>
                            <img src={PCPal} className='site-image' alt='okiedokie'/>
                            <h3 className='section-header'>PCPal</h3>
                            <div className="portfolio-text">
                                <ul>
                                    <li><b>Duration:</b> 1 month</li>
                                    <li><b>Technologies used:</b> React, NodeJS, Express, PostgreSQL</li>
                                    <li>Another project from the university program. The main aim was to practice React and improve teamwork. My part of the project was: Login & Registration, User profile, Shopping Card and Balance System</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className='project-description'>
                            <img src={OkieDokie} className='site-image' alt='okiedokie'/>
                            <h3 className='section-header'>OKIEDOKIE.CLUB REMASTERED</h3>
                            <div className="portfolio-text">
                                Duration: In progress
                                Technologies used: Python Flask, Jinja2, SQLite, Bootstrap
                                Designed and developed whole application: Login & Registration, Admin Panel, Payments, Booking System, Email notifications. Application is still operating and used for commercial purpose.

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div  id='portfolio-section' />
        </Portfolio>
    )
}