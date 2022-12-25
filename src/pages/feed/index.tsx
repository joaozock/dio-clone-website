
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"
import { Header } from "../../components/Header"

import { Container, Column, Title, TitleHighlight } from './styles'

const Feed = () => {
    return (<>
        <Header authenticated={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo percentual={80} nome= "Joao Victor" image={"https://avatars.githubusercontent.com/u/105035293?v=4"}/>   
                <UserInfo percentual={35} nome= "Joao Victor" image={"https://avatars.githubusercontent.com/u/105035293?v=4"}/>   
                <UserInfo percentual={40} nome= "Joao Victor" image={"https://avatars.githubusercontent.com/u/105035293?v=4"}/>   
                <UserInfo percentual={50} nome= "Joao Victor" image={"https://avatars.githubusercontent.com/u/105035293?v=4"}/>   
                <UserInfo percentual={10} nome= "Joao Victor" image={"https://avatars.githubusercontent.com/u/105035293?v=4"}/>   
                <UserInfo percentual={42} nome= "Joao Victor" image={"https://avatars.githubusercontent.com/u/105035293?v=4"}/>   
                <UserInfo percentual={77} nome= "Joao Victor" image={"https://avatars.githubusercontent.com/u/105035293?v=4"}/>   
            </Column>
        </Container>
    </>)
}

export { Feed }