import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useContext, useState } from 'react'
import { ThreeDots } from  'react-loader-spinner'
import UserContext from '../contexts/UserContext'
import axios from 'axios'

export default function LoginScreen() {

    const {setToken} = useContext(UserContext)
    const {setPhoto} = useContext(UserContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disable, setDisable] = useState("")
    const [opacity, setOpacity] = useState('100%')
    const [button, setButton] = useState('Entrar')
    const userDataString = localStorage.getItem("userData");


    function teste (){
        const  userData = JSON.parse(userDataString);

        if(userData !== null){
            const data = {
                email: userData.email,
                password: userData.password
            }
            const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', data)
            promisse.then((response) => success(response, data))
            promisse.catch((err) => error(err))
        }

    }
    

   /*  userData === null ? null : onSubmit() */

    function success (response, data){
        const serialData = JSON.stringify(data)
        localStorage.setItem("userData", serialData)
        setToken(response.data.token)
        setPhoto(response.data.image)
        navigate('/hoje')
    }


    function error (e){
        console.log(e)
        setDisable('')
        setButton("Cadastrar")
        setOpacity("100%")
        alert("Ops! Houve um erro aqui. Que tal tentar novamente?") 
    }

    function onSubmit(e) {
        e.preventDefault()
        setDisable("disabled")
        setButton(<ThreeDots color="#FFF" height={50} width={50}/>)
        setOpacity('50%')
        const data = {
            email,
            password
        }
        
        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', data)
        promisse.then((response) => success(response, data))
        promisse.catch((err) => error(err))

    }

    teste()

    return (
        <Container>
            <img src={logo} alt="Logo" />
            <h1>TrackIt</h1>
            <form onSubmit={onSubmit}>
                <input required disabled={disable} onChange={(e) => setEmail(e.target.value)} value={email} id='email' type='text' placeholder='Email' />
                <input required disabled={disable} onChange={(e) => setPassword(e.target.value)} value={password} id='password' type='password' placeholder='Senha' />
                <Button opacity={opacity}>
                    <button disabled={disable} type='submit'>{button}</button>
                </Button>
            </form>
            <Link to="/cadastro">
                <h6>Não tem uma conta? Cadastre-se</h6>
            </Link>
        </Container>
    )
}

const Container = styled.div`

    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    h1{
        font-family: 'Playball', cursive;
        font-size: 4.4rem;
        line-height: 5.6rem;
        text-align: center;
        color: var(--logo-main-color);
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        
    }

    img{
        height: 12rem;
        margin-bottom: -3.75rem;
    }

    a{
        margin-top: 1.5rem;
        
    }

    input, button{
        width: 19rem;
        height: 2.8rem;
        font-size: 1.31rem;
        border-radius: 0.313rem;
    }

    input{
        border: 1px solid var(--border-color);
    }

    button{
        background-color: var(--buttons-color);
        border: none;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h6{
        color: var(--header-color);
        text-decoration: underline;
    }
`
const Button = styled.div`
    opacity: ${props =>  props.opacity};
`