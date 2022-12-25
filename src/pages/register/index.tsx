import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { AlreadyHasAccountText, Column, Container, Description, RedirectToLoginText, Row, SubtitleResgister, Title, TitleResgister, Wrapper } from './styles'
import { IFormDataRegister } from './types'
import { Button } from '../../components/Button'

const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(8, 'No mínimo 8 caracteres').required('Campo Obrigatório'),
  }).required();

const Register = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormDataRegister>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = () => {
        try{
            navigate('/feed')
        }catch{
            alert('Houve um erro, tente novamente')
        }
    };
    
  return (<>
    <Header/>
    <Container>
        <Column>
            <Title>
            A plataforma para você aprender com experts, dominar 
            as principais tecnologias e entrar mais rápido nas 
            empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleResgister>Comece agora grátis</TitleResgister>
                <SubtitleResgister>Faça seu login e make the change._</SubtitleResgister>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder=" Nome Completo"/>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder=" E-mail"/>
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder=" Senha" type="password"/>
                    <Button title='Criar minha conta' variant="secundary" type='submit'/>
                </form>
                <Description>
                Ao clicar em "criar minha conta grátis", declaro que 
                aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                </Description>
                <Row>
                    <AlreadyHasAccountText>Já tenho conta.</AlreadyHasAccountText>
                    <RedirectToLoginText href='/login'>Fazer Login</RedirectToLoginText>
                </Row>
            </Wrapper>
        </Column>
    </Container>
  </>
  )
}

export { Register }