import styled from 'styled-components'

const About = styled.div`
    height: calc(100vh - 55px);
    background-color: #fff;
    color: #262526;
    padding-top: 30px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  
    .about-header-text {
      background-color: black;
      font-style: italic;
      color: white;
      padding: 7px 30px;
      text-align: center;
      display: inline-block;
    }

    .about-text {
        max-width: 500px;
        text-align: justify;
      }
  
    .section-header {
      margin-bottom: 30px;
      margin-top: 30px;
    }  
    #portfolio-section {
      display: flex;
      justify-self: flex-end;
      align-self: flex-end;
      padding-top: 50px;
    }
  
  @media (max-width: 768px) {
        height: 100%;
       .container {
          flex-flow: row wrap;  
        }
        .about-text {
          max-width: 450px;
        }
        .about-header {
          margin-bottom: 40px;
        }
        ul {
          margin-bottom: 20px;
        }
        .section-header {
          margin-top: 30px;
        }
        .first-col {
          margin-top: -90px;
          }
        }
  }
  
    
`

export default function AboutSection() {
    return (
        <About >
            <div className='about-header'>
                <h1 className='about-header-text'>ABOUT</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="column first-col">
                        <h3 className='section-header '>ABOUT ME</h3>
                        <div className="about-text">
                            <p>
                                Hello, I'm Artem, a Junior Web Developer. I have started my path in computer science in 2016, studying in college in Toronto, Canada. At that time my major was system administration. In 2019 I moved and am based in Oulu, Finland. Here I decided to continue studying in that area and applied for Web Development at OAMK. The first semesters inspired me for extra work and self-studying. Now I have a strong desire to implement acquired skills in a real-work environment and become a part of a team of like-minded people for future personal growth and
                                career development.

                            </p>
                            </div>
                    </div>
                    <div className="column">
                        <h3 className='section-header'>EDUCATION</h3>
                        <div className="about-text education-section">
                            <ul>
                                <li><b>2019 — 2023</b></li>
                                <li><b>Bachelor of Engineering,</b> OAMK</li>
                                <li><b>Coursework:</b> Full-stack web development</li>
                            </ul>
                            <br />
                            <ul>
                                <li><b>2016 — 2018</b></li>
                                <li><b>Computer Engineering Technology,</b> Seneca college</li>
                                <li><b>Coursework:</b> System administration, Network design,
                                    System Automation, Technical support</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h3 className='section-header'>SKILLS</h3>
                        <div className="about-text">
                            <ul>
                                <li><b>JavaScript</b>, <b>Python</b>, <b>PHP</b> as main abilities, including <b>React</b>, <b>Redux</b>, and <b>Nodejs</b> for JavaScript,
                                    <b> Flask</b> and <b>Jinja2</b> for Python, and <b>CodeIgniter</b> for PHP.</li>
                                <li><b>HTML/CSS</b> skills complemented with <b>Bootstrap 4/5</b></li>
                                <li>Familiar with version control systems (<b>GitHub</b>, <b>GitLab</b>)</li>
                                <li>Experience with SQL databases such as <b>MySQL</b>, <b>SQLite</b>, <b>PostgreSQL</b>.</li>
                                <li>Base <b>UI/UX</b> design skills (<b>Axure</b>)</li>
                                <li>Ability to work with <b>Linux</b> based OS</li>


                            </ul>
                        </div>
                    </div>
                    <div className="column">
                        <h3 className='section-header'>SOFT SKILLS</h3>
                        <div className="about-text">
                            <ul>
                                <li><b>Flexibility and Adaptability:</b> Ready to handle many different tasks and easily adapt to the new environment.</li>
                                <li><b>Persistence:</b> Ready to spend extra time to get through obstacles.</li>
                                <li><b>Organizational skills:</b> All of the projects I made were handled in time, and I would like to keep this trend</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div  id='portfolio-section' />
        </About>
    )
}