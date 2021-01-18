import React from "react";

import WelcomeSection from "./Sections/WelcomeSection";
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AboutSection from "./Sections/AboutSection";
import PortfolioSection from "./Sections/PortfolioSection";
import FooterSection from "./components/Footer";

import Gmail from './assets/images/gmail.png'
import Telegram from './assets/images/telegram.png'
import LinkedIn from './assets/images/linkedin.svg'
import GitHub from './assets/images/github.png'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Page = styled.div`
  margin-top: 55px;
  
  .contact-section {
    position: fixed;
    display: flex;
    flex-direction: column;
    bottom: 40px;
    right: 30px;
    fill: #D7D8DA;
    font-size: 40px;
    cursor: pointer;
  }

  .social-image {
    max-width: 25px;
    max-height: 25px;
    z-index: 0;
    border-radius: 10%;
    float: left;
    margin: 25px 0;
    cursor: pointer;
  }
  
  .contact-section-button {
    background-color: white;
    padding: 5px 10px;
    border-radius: 20px;
    color: black;
    position: fixed;
    bottom: 20px;
    right: 5px;
    align-items: center;
    display: none;
  }

  @media (max-width: 768px) {
    .contact-section {
      display: ${({ showContact }) => showContact ? 'flex' : 'none'}
    }
    .contact-section-button {
      display: flex;
    }
  }
  
`


export default function Main () {

    const [showContact, setShowContact] = React.useState(false)

    const notify = () => {
        toast.dark('Email address copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        navigator.clipboard.writeText('stnoov@gmail.com')
    }


    return (
        <Page showContact={showContact}>
            <ToastContainer />
            <WelcomeSection />
            <AboutSection />
            <PortfolioSection />
            <div className='contact-section-button' onClick={() => setShowContact(!showContact)}> Contacts
                {showContact ?
                    <ExpandMoreIcon />
                    : <ExpandLessIcon/>
                }
                </div>
            <div className='contact-section'>
                <a target="_blank" href="https://t.me/stnoov"><img src={Telegram} className='social-image' alt='gmail'/></a>
                <a onClick={(notify)}><img src={Gmail} className='social-image' alt='gmail'/></a>
                <a target="_blank" href="https://www.linkedin.com/in/asitnov/"><img src={LinkedIn} className='social-image' alt='LinkedIn'/></a>
                <a target="_blank" href="https://github.com/stnoov"><img src={GitHub} className='social-image' alt='GitHub'/></a>
            </div>
            <FooterSection />
        </Page>
    )
}