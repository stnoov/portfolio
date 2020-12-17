import styled from 'styled-components'

const Welcome = styled.div`
    width: 100%;
    height: 150vh;
    background-color: #262526;
`

export default function WelcomeSection() {
    return (
        <Welcome>
            Welcome message
        </Welcome>
    )
}