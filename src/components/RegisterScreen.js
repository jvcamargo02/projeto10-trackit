import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { ThreeDots } from  'react-loader-spinner'

import { useState } from 'react'


export default function RegisterScreen() {

    const navigate = useNavigate()


    function success (){
        navigate('/', { replace: true })
    }


    function error (e){
        console.log(e)
        setDisable('')
        setButton("Cadastrar")
        setOpacity('100%')
        alert("Ops! Houve um erro aqui. Que tal tentar novamente?") 
    }


    function onSubmit(e) {
        e.preventDefault()
        setDisable("disabled")
        setButton(<ThreeDots color="#FFF" height={50} width={50}/>)
        setOpacity('50%')
        const data = {
            email,
            name,
            image,
            password
        }

        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', data)
        promisse.then(success)
        promisse.catch((err) => error(err))

    }

    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [disable, setDisable] = useState("")
    const [opacity, setOpacity] = useState('100%')
    const [button, setButton] = useState('Cadastrar')

    return (
        <Container>
            <img src={logo} alt="Logo" />
            <h1>TrackIt</h1>
            <form onSubmit={onSubmit}>
                <input required disabled={disable} onChange={(e) => setEmail(e.target.value)} value={email} id='email' type='text' placeholder='Email' />
                <input required disabled={disable} onChange={(e) => setPassword(e.target.value)} value={password} id='password' type='password' placeholder='Senha' />
                <input required disabled={disable} onChange={(e) => setName(e.target.value)} value={name} id='name' type='text' placeholder='Nome' />
                <input required disabled={disable} onChange={(e) => setImage(e.target.value)} value={image} id='photo' type='url' placeholder='Foto' />
                <Button opacity={opacity}>
                    <button disabled={disable} type='submit'>{button}</button>
                </Button>
            </form>
            <Link to="/">
                <h6>Já tem uma conta? Faça login!</h6>
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