import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import styled from 'styled-components'
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import Footer from "./Footer";
import HabitBox from "./HabitBox";
import Header from "./Header";

export default function TodayScreen() {

    const { token, checkHabits, habitsNum, setHabitsNum } = useContext(UserContext)
    const [habits, setHabits] = useState([])
    const day = dayjs().locale('pt-br').format("dddd, DD/MM");

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promisse.then(response => printHabits(response.data))
    }, [])

    function printHabits(response) {
        setHabits(response)
        setHabitsNum(response.length)
    }

    console.log(checkHabits)

    return (
        <Container>
            <Header />
            <h1>{day.charAt(0).toUpperCase() + day.slice(1)}</h1>
            {checkHabits === 0 || checkHabits === NaN ?
                <p>Nenhum hábito concluído ainda</p> :
                <p>{((checkHabits / habitsNum) * 100).toFixed(2) + "% dos hábitos concluídos"}</p>
            }
            {/* <p>{habits.len(checkHabits/habitsNum)* 100}</p> */}
            <Habits>
                {habits.length === 0 ?

                    <h4>Nenhum hábito para hoje</h4> :

                    habits.map((habit, index) => <HabitBox key={index} habit={habit} index={index} />)}

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

