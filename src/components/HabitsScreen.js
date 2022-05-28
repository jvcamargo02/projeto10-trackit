import styled from "styled-components"
import Header from "./Header"
import { useState } from 'react'
import ButtonDay from "./ButtonDay"
import Footer from "./Footer"

export default function HabitsScreen() {

    const [toggle, setToggle] = useState(true)
    const [selectDay, setSelectDay] = useState([])
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    console.log(selectDay)
    function onSubmit(e) {
        e.preventDefault()
    }

    return (
        <Container>
            <Header />
            <MainTop>
                <h3>Meus Hábitos</h3>
                <ion-icon name={toggle === true ? "add-circle-sharp" : "close-circle-sharp"} onClick={() => { setToggle(!toggle); setSelectDay([]) }} ></ion-icon>
            </MainTop>
            {toggle === true ? null :

                <form onSubmit={onSubmit}>
                    <input type='text' placeholder='Nome do hábito' />
                    <Buttons>
                        {weekDays.map((day, index) =>
                            <ButtonDay key={index} day={day} index={index} selectDay={selectDay} setSelectDay={setSelectDay} />)}
                    </Buttons>
                    <span>
                        <a onClick={() => setToggle(!toggle)}>Cancelar</a>
                        <button>Salvar</button>
                    </span>
                </form>

            }
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            <Footer />
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

    form{
        min-width: 21rem;
        height: 11.2rem;
        max-width: 50rem;
        margin-left: auto;
        margin-right: auto;
        background-color: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
        margin-bottom: 1.9rem;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 1.25rem;
        border-radius: 5px;
        font-size: 1.2rem;

        input{
            min-width: 18.75rem;
            width: 80%;
            height: 2.81rem;
            border: 1px solid var(--border-color);
            border-radius: 5px;
            margin-left: auto;
            margin-right: auto;

           
        } 
        
        span {
            margin-left: auto;

            a{
                font-size: 16px;
                color: var(--buttons-color);
                margin-right: 20px;
                cursor: pointer;
            }

            button{
                border: none;
                border-radius: 5px;
                font-size: 16px;
                color: #fff;
                background-color: var(--buttons-color);
                padding: 10px 20px;
                cursor: pointer;
            }
        }
    }
   
`

const MainTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    h3{
        color: var(--header-color);
        font-size: 1.44rem;
    }

    ion-icon{
        font-size: 2.2rem;
        color: ${props => (props.children[1].props.name) === "add-circle-sharp" ? "var(--buttons-color)" : "#ff000075"};
        cursor: pointer;
    }
`

const Buttons = styled.div`

    margin: 8px auto 30px auto;
    display: flex;
    gap: 5px;

`