import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useContext, useEffect, useState } from "react";
import styled from 'styled-components'
import UserContext from "../contexts/UserContext";
import Footer from "./Footer";
import Header from "./Header";

export default function TodayScreen() {

    const { token } = useContext(UserContext)
    const [habits, setHabits] = useState([])
    const day = dayjs().locale('pt-br').format("dddd, DD/MM");

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promisse.then(response => setHabits(response.data))
    }, []) 

    return (
        <Container>
            <Header />
            <h1>{day.charAt(0).toUpperCase() + day.slice(1)}</h1>
            <p>Nenhum hábito concluído ainda</p>
            <Habits>
                {habits.length === 0 ? <h4>Nenhum hábito para hoje</h4> :

                    habits.map((habit, index) =>

                        <Habit key={index}>
                            <ion-icon color="primary" name="checkmark-circle"></ion-icon>
                            <h4>{habit.name}</h4>
                            <span>Sequência atual: {habit.currentSequence} dias</span><br />
                            <span>Seu recorde: {habit.highestSequence} dias</span>
                        </Habit>)}

            </Habits>
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
    overflow: auto;
    
    h1{
        color: var(--header-color);
        font-size: 23px;
    }

    p{
        font-size: 18px;
        margin-top: 5px;
        color: rgba(0,0,0,0.4);
    }
`

const Habits = styled.div`
    margin-top: 30px;
`

const Habit = styled.div`
    min-width: 21rem;
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
    margin-bottom: 1.9rem;
    box-sizing: border-box;
    padding: 1.25rem;
    padding-right: 0;
    border-radius: 5px;

    ion-icon{
        float: right;
        font-size: 80px;
        margin-top: -5px;
        
    }

    h4{
        font-size: 20px;
        margin-bottom: 10px;
    }

    span{
        font-size: 13px;
    }
`