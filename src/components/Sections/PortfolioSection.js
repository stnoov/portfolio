import styled from 'styled-components'
import OkieDokie from '../../images/okiedokie.png'

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
  }
  
  .site-image {
    height: 182px;
    width: 182px;
    opacity: 0.7;
    z-index: 0;
    border-radius: 100%;
    float: left;
    padding: 10px;
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
    }
    .portfolio-site-preview {
      width: 450px;
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
                                Duration: 2 months
                                Technologies used: Python Flask, Jinja2, SQLite, Bootstrap
                                Designed and developed whole application: Login & Registration, Admin Panel, Payments, Booking System, Email notifications. Application is still operating and used for commercial purpose.

                            </div>
                            </div>
                    </div>
                    <div className="column">
                        <div className='project-description'>
                            <img src={OkieDokie} className='site-image' alt='okiedokie'/>
                            <h3 className='section-header'>OKIEDOKIE.CLUB</h3>
                            <div className="portfolio-text">
                                Duration: 2 months
                                Technologies used: Python Flask, Jinja2, SQLite, Bootstrap
                                Designed and developed whole application: Login & Registration, Admin Panel, Payments, Booking System, Email notifications. Application is still operating and used for commercial purpose.

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className='project-description'>
                            <img src={OkieDokie} className='site-image' alt='okiedokie'/>
                            <h3 className='section-header'>OKIEDOKIE.CLUB</h3>
                            <div className="portfolio-text">
                                Duration: 2 months
                                Technologies used: Python Flask, Jinja2, SQLite, Bootstrap
                                Designed and developed whole application: Login & Registration, Admin Panel, Payments, Booking System, Email notifications. Application is still operating and used for commercial purpose.

                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className='project-description'>
                            <img src={OkieDokie} className='site-image' alt='okiedokie'/>
                            <h3 className='section-header'>OKIEDOKIE.CLUB</h3>
                            <div className="portfolio-text">
                                Duration: 2 months
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