import WelcomeSection from "./Sections/WelcomeSection";
import styled from 'styled-components'
import AboutSection from "./Sections/AboutSection";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PortfolioSection from "./Sections/PortfolioSection";
import ContactSection from "./Sections/ContactSection";

const Page = styled.div`
  margin-top: 55px;
  
  .next-section {
    position: fixed;
    bottom: 20px;
    right: 30px;
    fill: #D7D8DA;
    font-size: 40px;
    cursor: pointer;
  }
`


export default function Main () {

    let sections = ['home-section', 'about-section', 'portfolio-section', 'contact-section']
    let currentIndex = 0;

    const ScrollNext = () => {
        if (currentIndex === 3) {
            currentIndex = -1
        }
        if (sections[currentIndex + 1] === 'home-section') {
            window.scrollTo({top: 0, left: 0, behavior: "smooth"})
            currentIndex++
        } else {
            document.getElementById(sections[currentIndex + 1]).scrollIntoView({behavior: "smooth"})
            currentIndex++
        }
    }

    return (
        <Page>
            <WelcomeSection />
            <AboutSection />
            <PortfolioSection />
            <ContactSection />
            <ExpandMoreIcon className='next-section' onClick={() => {ScrollNext({behavior: "smooth"})}} />
        </Page>
    )
}