import CodeRecorderNav from '../../components/CodeRecordNav'
import styled from 'styled-components'

const HomeContainer = styled.div`
    background-color:#2B3648;
    min-height:100vh;
    color:#ffffff;
`


export default function Home() {
    return (
        <HomeContainer>
            <CodeRecorderNav />
            <p>Home page.</p>
        </HomeContainer>
    )
}