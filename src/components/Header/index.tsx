import React from 'react'
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button'
import { IHeader } from './types'

import {
    Container,
    FindInputContainer,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'



const Header = ({authenticated}: IHeader) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt= "Logo da dio" />
                {authenticated ? (
                    <>
                    <FindInputContainer>
                       <Input placeholder='Buscar...'/> 
                    </FindInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>
                    ) : null}
            </Row>
            <Row>
                {authenticated ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/105035293?v=4'/>
                ) : (
                    <>
                    <MenuRight href="/#">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar"/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }