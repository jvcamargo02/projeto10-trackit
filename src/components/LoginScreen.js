import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export default function LoginScreen() {

    function onSubmit(e) {
        e.preventDefault()
    }

    return (
        <Container>
            <img src={logo} alt="Logo" />
            <h1>TrackIt</h1>
            <form onSubmit={onSubmit}>
                <input id='email' type='text' placeholder='Email' />
                <input id='password' type='password' placeholder='Senha' />
                <button type='submit'>
                    <Link to="/habitos">
                        <h4>Entrar</h4>
                    </Link>
                </button>
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
    }

    h4{
        color: #fff;
        text-decoration: none;
    }

    h6{
        color: var(--header-color);
        text-decoration: underline;
    }
`
