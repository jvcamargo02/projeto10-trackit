import styled from "styled-components"
import Header from "./Header"
import {useState} from 'react'

export default function HabitsScreen() {

    const [toggle, setToggle] = useState(true)

    return (
        <Container>
            <Header />
            <MainTop>
                <h3>Meus Hábitos</h3>
                <ion-icon name={toggle === true ? "add-circle-sharp" : "close-circle-sharp"} onClick={() => setToggle(!toggle)} ></ion-icon>
            </MainTop>
            {toggle === true ? null :

                <form>
                <input type='text' placeholder='Nome do hábito' />
                
                </form>
            
            }
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>

        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    padding: 6.25rem 1.1rem;
    background-color: var(--background-color);
    height: 100vh;
    color: rgba(0, 0, 0, 0.6);
    font-size: 18px;
   
`

const MainTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    h3{
        color: var(--header-color);
        font-size: 23px;
    }

    ion-icon{
        font-size: 35px;
        color: ${props => (props.children[1].props.name) === "add-circle-sharp" ? "var(--buttons-color)" : "#ff000075"};
        cursor: pointer;
    }
`