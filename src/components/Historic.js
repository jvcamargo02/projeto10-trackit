import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components'

export default function Historic (){
    return(
        <Container>
            <Header/>
            <h3>Histórico</h3>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    padding: 6.25rem 1.1rem;
    background-color: var(--background-color);
    height: 100vh;
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.125rem; 

    h3{
        color: var(--header-color);
        margin-bottom: 20px;
        font-size: 1.44rem;
    }
`