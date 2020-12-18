import styled from 'styled-components'

const Contact = styled.div`
    width: 100%;
    height: calc(100vh - 55px);
    background-color: #fff;
    color: #262526;
    display: flex;
    justify-content: center;
    padding-top: 30px ;
`

export default function ContactSection() {
    return (
        <Contact id='contact-section'>
            <h1>CONTACT</h1>
        </Contact>
    )
}