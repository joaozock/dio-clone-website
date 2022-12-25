import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api'
import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { Column, Container, CreateText, RememberText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'
import { IFormDataLogin } from "./types";

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(8, 'No mínimo 8 caracteres').required('Campo Obrigatório'),
  }).required();


const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormDataLogin>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async (formData:IFormDataLogin) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`) ;
            if(data.length === 1){
                navigate('/feed') 
            }else{
                alert('Email ou senha inválido')
            }
        }catch{
            alert('Houve um erro, tente novamente')
        }
    };
    
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas. 
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu Cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder=" E-mail" leftIcon={<MdEmail />} />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder=" Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Entrar" variant="secondary" type='submit' />
                    </form>
                    <Row>
                       <RememberText>Esqueci minha senha</RememberText> 
                       <CreateText href="/register">Criar Conta</CreateText> 
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }