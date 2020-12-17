import WelcomeSection from "./Sections/WelcomeSection";
import styled from 'styled-components'

const Page = styled.div`
  margin-top: 55px;
`


export default function Main () {
    return (
        <Page>
            <WelcomeSection />
        </Page>
    )
}