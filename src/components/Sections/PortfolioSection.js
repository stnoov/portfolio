import styled from 'styled-components'

const Portfolio = styled.div`
    width: 100%;
    height: calc(100vh - 55px);
    background-color: #262526;
    color: #D7D8DA;
    display: flex;
    justify-content: center;
    padding-top: 30px ;
`

export default function PortfolioSection() {
    return (
        <Portfolio>
            <h1>PORTFOLIO</h1>
        </Portfolio>
    )
}